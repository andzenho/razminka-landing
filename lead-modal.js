/* global React, ReactDOM */
(function(){
const useState = React.useState, useEffect = React.useEffect;

/* ── Формы/оплата GetCourse ────────────────────────────────────────────────
   Виджет ГК держится в попапе готовым → по клику открывается мгновенно.
   Отправка, платная сделка (willCreatePaidDeal) и оплата — на стороне ГК.
   Форма прокручивается ВНУТРИ iframe (внутренний скролл), высота попапа
   фиксирована → колесо/тач над формой листает её (до галочек согласий),
   а фон под попапом заблокирован (html + body).
   Две конфигурации: рубли (прогрев в фоне) и зарубежная карта (по интенту). */
const GK_HOST = "https://kerrycatt1.getcourse.ru";

// widgetId — id виджета ГК; uniqName — id встраиваемого скрипта (для postMessage).
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
  function widgetSrc() {
    var qs = window.location.search ? window.location.search.substring(1) + "&" : "";
    return GK_HOST + "/pl/lite/widget/widget?" + qs +
      "id=" + cfg.widgetId +
      "&ref=" + encodeURIComponent(document.referrer) +
      "&loc=" + encodeURIComponent(document.location.href);
  }
  const [open, setOpen] = useState(false);
  const [warm, setWarm] = useState(false);   // форма подгружена в фоне
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    window[cfg.openerName] = () => { setWarm(true); setOpen(true); };
    // прогрев по наведению/тапу на кнопку (для зарубежной) — форма готова к клику.
    if (cfg.warmerName) window[cfg.warmerName] = () => setWarm(true);
    // прогрев ~1.2с после загрузки (только для рублёвой) — к клику форма готова.
    const warmT = cfg.prewarm ? setTimeout(() => setWarm(true), 1200) : null;
    function onMsg(e) {
      const d = e.data;
      if (d && d.uniqName === cfg.uniqName) setLoaded(true);
    }
    window.addEventListener("message", onMsg);
    return () => { if (warmT) clearTimeout(warmT); window.removeEventListener("message", onMsg); };
  }, []);

  useEffect(() => {
    if (!open) return;
    function onKey(e) { if (e.key === "Escape") setOpen(false); }
    document.addEventListener("keydown", onKey);
    // блокируем прокрутку фона надёжно — и html, и body (в разных браузерах скроллит разное)
    const de = document.documentElement;
    const prevHtml = de.style.overflow, prevBody = document.body.style.overflow;
    de.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      de.style.overflow = prevHtml;
      document.body.style.overflow = prevBody;
    };
  }, [open]);

  // Оверлей всегда в DOM (чтобы iframe не перезагружался), видимость — через стиль.
  return React.createElement("div", {
      style: { position: "fixed", inset: 0, zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(20,20,15,0.6)", padding: "20px", overscrollBehavior: "contain", visibility: open ? "visible" : "hidden", opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none", transition: "opacity .2s ease" },
      onClick: () => setOpen(false)
    },
    React.createElement("div", {
        onClick: e => e.stopPropagation(),
        style: { position: "relative", display: "flex", flexDirection: "column", width: "100%", maxWidth: "480px", height: "min(94vh, 900px)", overflow: "hidden", background: "var(--paper)", borderRadius: "var(--r-card)", padding: "clamp(22px, 5vw, 32px) clamp(16px, 4vw, 20px) 16px", boxShadow: "var(--shadow-lift)" }
      },
      React.createElement("button", {
        type: "button", onClick: () => setOpen(false), "aria-label": "Закрыть",
        style: { position: "absolute", top: "12px", right: "12px", width: "34px", height: "34px", border: "none", background: "var(--sand)", borderRadius: "999px", fontSize: "1.15rem", color: "var(--ink)", cursor: "pointer", lineHeight: 1, zIndex: 4 }
      }, "✕"),

      React.createElement("h2", { style: { flexShrink: 0, margin: "0 0 6px", fontSize: "var(--fs-h3)", lineHeight: 1.15, paddingRight: "40px", color: "var(--ink)" } }, cfg.title),
      React.createElement("p", { style: { flexShrink: 0, margin: "0 0 16px", fontFamily: "var(--font-mono)", fontSize: "var(--fs-mono)", letterSpacing: "var(--ls-mono-wide)", color: "var(--coral)" } }, cfg.subtitle),

      // iframe заполняет остаток попапа и прокручивается ВНУТРИ себя
      React.createElement("div", { style: { flex: "1 1 auto", minHeight: 0, position: "relative" } },
        warm && React.createElement("iframe", {
          src: widgetSrc(),
          title: "Форма записи",
          onLoad: () => setLoaded(true),
          style: { display: "block", width: "100%", height: "100%", border: "0", opacity: loaded ? 1 : 0, transition: "opacity .2s ease" },
          allow: "clipboard-write"
        })
      )
    )
  );
}

ReactDOM.createRoot(document.getElementById("lead-modal-root")).render(React.createElement(LeadModal, RUBLE_CFG));
ReactDOM.createRoot(document.getElementById("pay-foreign-root")).render(React.createElement(LeadModal, FOREIGN_CFG));
})();
