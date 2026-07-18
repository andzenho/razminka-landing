/* global React, ReactDOM */
(function(){
const useState = React.useState, useEffect = React.useEffect, useRef = React.useRef;

/* ── Форма захвата GetCourse ──────────────────────────────────────────────
   Виджет ГК монтируется вместе со страницей (в фоне, чуть отложенно) и держится
   готовым → по клику попап открывается мгновенно, форма уже загружена.
   Отправка, платная сделка (willCreatePaidDeal) и оплата — на стороне ГК. */
const GK_HOST = "https://kerrycatt1.getcourse.ru";
const GK_WIDGET_ID = "1632055";
const GK_UNIQ = "32505d6440058a3adaf8e327e50b3d7045e93618";

function widgetSrc() {
  var qs = window.location.search ? window.location.search.substring(1) + "&" : "";
  return GK_HOST + "/pl/lite/widget/widget?" + qs +
    "id=" + GK_WIDGET_ID +
    "&ref=" + encodeURIComponent(document.referrer) +
    "&loc=" + encodeURIComponent(document.location.href);
}

function LeadModal() {
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
    window.__openLeadModal = () => { setWarm(true); setOpen(true); };
    // прогрев формы ~1.2с после загрузки страницы — не мешает рендеру лендинга,
    // но к клику форма уже готова (мгновенное открытие)
    const warmT = setTimeout(() => setWarm(true), 1200);
    function onMsg(e) {
      const d = e.data;
      if (d && d.uniqName === GK_UNIQ && d.height) {
        const h = parseInt(d.height, 10);
        if (h > 0) { setHeight(Math.max(320, h)); setLoaded(true); }
      }
    }
    window.addEventListener("message", onMsg);
    return () => { clearTimeout(warmT); window.removeEventListener("message", onMsg); };
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

      React.createElement("h2", { style: { flexShrink: 0, margin: "0 0 6px", fontSize: "var(--fs-h3)", lineHeight: 1.15, paddingRight: "40px", color: "var(--ink)" } }, "Занять место на Разминке"),
      React.createElement("p", { style: { flexShrink: 0, margin: "0 0 16px", fontFamily: "var(--font-mono)", fontSize: "var(--fs-mono)", letterSpacing: "var(--ls-mono-wide)", color: "var(--coral)" } }, "29 июля · 4 дня · 990 ₽"),

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

ReactDOM.createRoot(document.getElementById("lead-modal-root")).render(React.createElement(LeadModal));
})();
