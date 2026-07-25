/* global React, ReactDOM */
(function(){
const useState = React.useState, useEffect = React.useEffect, useRef = React.useRef;

/* ── Формы/оплата GetCourse ────────────────────────────────────────────────
   Виджет ГК держится в попапе готовым → по клику открывается мгновенно.
   Отправка, платная сделка (willCreatePaidDeal) и оплата — на стороне ГК.
   Две конфигурации: оплата в рублях (прогревается в фоне) и оплата зарубежной
   картой (грузится по первому клику). */
const GK_HOST = "https://kerrycatt1.getcourse.ru";

// widgetId — id виджета ГК; uniqName — id встраиваемого скрипта (для postMessage высоты).
const RUBLE_CFG = {
  widgetId: "1632055", uniqName: "32505d6440058a3adaf8e327e50b3d7045e93618",
  openerName: "__openLeadModal", prewarm: true,
  title: "Занять место на Разминке", subtitle: "29 июля · 4 дня · 990 ₽"
};
const FOREIGN_CFG = {
  widgetId: "1634983", uniqName: "28ba78ae65137e386fbc6d89aefd35d44b751249",
  openerName: "__openForeignModal", warmerName: "__warmForeignModal", prewarm: false,
  title: "Оплата зарубежной картой", subtitle: "29 июля · 4 дня · $15 · €13"
};

function LeadModal(cfg) {
  const GK_WIDGET_ID = cfg.widgetId, GK_UNIQ = cfg.uniqName;
  function widgetSrc() {
    var qs = window.location.search ? window.location.search.substring(1) + "&" : "";
    return GK_HOST + "/pl/lite/widget/widget?" + qs +
      "id=" + GK_WIDGET_ID +
      "&ref=" + encodeURIComponent(document.referrer) +
      "&loc=" + encodeURIComponent(document.location.href);
  }
  const [open, setOpen] = useState(false);
  const [warm, setWarm] = useState(false);   // форма подгружена в фоне
  const [height, setHeight] = useState(460);
  const [loaded, setLoaded] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const scrollerRef = useRef(null);

  function checkHint() {
    const el = scrollerRef.current;
    if (!el) { setShowHint(false); return; }
    setShowHint(el.scrollHeight - el.scrollTop - el.clientHeight > 16);
  }

  useEffect(() => {
    window[cfg.openerName] = () => { setWarm(true); setOpen(true); };
    // прогрев по наведению/тапу на кнопку (для зарубежной) — форма готова к клику.
    if (cfg.warmerName) window[cfg.warmerName] = () => setWarm(true);
    // прогрев формы ~1.2с после загрузки (только для основной, рублёвой):
    // не мешает рендеру, но к клику форма уже готова. Зарубежная грузится по интенту.
    const warmT = cfg.prewarm ? setTimeout(() => setWarm(true), 1200) : null;
    function onMsg(e) {
      const d = e.data;
      if (d && d.uniqName === GK_UNIQ && d.height) {
        const h = parseInt(d.height, 10);
        if (h > 0) { setHeight(Math.max(320, h)); setLoaded(true); }
      }
    }
    window.addEventListener("message", onMsg);
    return () => { if (warmT) clearTimeout(warmT); window.removeEventListener("message", onMsg); };
  }, []);

  useEffect(() => {
    if (!open) return;
    function onKey(e) { if (e.key === "Escape") setOpen(false); }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    const t = setTimeout(checkHint, 60);
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; clearTimeout(t); };
  }, [open, height, loaded]);

  // Оверлей всегда в DOM (чтобы iframe не перезагружался), видимость — через стиль.
  return React.createElement("div", {
      style: { position: "fixed", inset: 0, zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(20,20,15,0.6)", padding: "20px", visibility: open ? "visible" : "hidden", opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none", transition: "opacity .2s ease" },
      onClick: () => setOpen(false)
    },
    React.createElement("div", {
        onClick: e => e.stopPropagation(),
        style: { position: "relative", display: "flex", flexDirection: "column", width: "100%", maxWidth: "480px", maxHeight: "92vh", overflow: "hidden", background: "var(--paper)", borderRadius: "var(--r-card)", padding: "clamp(22px, 5vw, 32px) clamp(16px, 4vw, 20px) 0", boxShadow: "var(--shadow-lift)" }
      },
      React.createElement("button", {
        type: "button", onClick: () => setOpen(false), "aria-label": "Закрыть",
        style: { position: "absolute", top: "12px", right: "12px", width: "34px", height: "34px", border: "none", background: "var(--sand)", borderRadius: "999px", fontSize: "1.15rem", color: "var(--ink)", cursor: "pointer", lineHeight: 1, zIndex: 4 }
      }, "✕"),

      React.createElement("h2", { style: { flexShrink: 0, margin: "0 0 6px", fontSize: "var(--fs-h3)", lineHeight: 1.15, paddingRight: "40px", color: "var(--ink)" } }, cfg.title),
      React.createElement("p", { style: { flexShrink: 0, margin: "0 0 16px", fontFamily: "var(--font-mono)", fontSize: "var(--fs-mono)", letterSpacing: "var(--ls-mono-wide)", color: "var(--coral)" } }, cfg.subtitle),

      React.createElement("div", {
          ref: scrollerRef, onScroll: checkHint,
          style: { flex: "1 1 auto", minHeight: 0, overflowY: "auto", paddingBottom: "20px", WebkitOverflowScrolling: "touch" }
        },
        React.createElement("div", { style: { position: "relative", minHeight: loaded ? "0" : "220px" } },
          warm && React.createElement("iframe", {
            src: widgetSrc(),
            title: "Форма записи",
            onLoad: () => setLoaded(true),
            style: { display: "block", width: "100%", height: height + "px", border: "0", overflow: "hidden", opacity: loaded ? 1 : 0, transition: "opacity .2s ease" },
            allow: "clipboard-write"
          })
        )
      ),

      React.createElement("div", {
          "aria-hidden": "true",
          style: { position: "absolute", left: 0, right: 0, bottom: 0, height: "58px", display: "flex", alignItems: "flex-end", justifyContent: "center", paddingBottom: "8px", background: "linear-gradient(to top, var(--paper) 38%, rgba(250,250,248,0))", pointerEvents: "none", opacity: showHint ? 1 : 0, transition: "opacity .2s ease", zIndex: 3 }
        },
        React.createElement("span", { style: { fontSize: "1.25rem", lineHeight: 1, color: "var(--coral)", animation: "leadBounce 1.2s ease-in-out infinite" } }, "↓"),
        React.createElement("style", null, "@keyframes leadBounce{0%,100%{transform:translateY(0)}50%{transform:translateY(4px)}}")
      )
    )
  );
}

ReactDOM.createRoot(document.getElementById("lead-modal-root")).render(React.createElement(LeadModal, RUBLE_CFG));
ReactDOM.createRoot(document.getElementById("pay-foreign-root")).render(React.createElement(LeadModal, FOREIGN_CFG));
})();
