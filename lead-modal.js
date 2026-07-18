/* global React, ReactDOM */
(function(){
const useState = React.useState, useEffect = React.useEffect;

/* ── Форма захвата GetCourse ──────────────────────────────────────────────
   Показываем родной виджет ГК в нашем попапе. Форму строим свежей при каждом
   открытии → токены сессии подставляются автоматически. Отправка, создание
   платной сделки (willCreatePaidDeal) и переход на оплату — на стороне ГК. */
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
  const [openId, setOpenId] = useState(0);   // растёт при каждом открытии → свежий iframe
  const [height, setHeight] = useState(460);

  useEffect(() => {
    window.__openLeadModal = () => { setHeight(460); setOpenId(id => id + 1); setOpen(true); };
    function onMsg(e) {
      const d = e.data;
      if (d && d.uniqName === GK_UNIQ && d.height) {
        const h = parseInt(d.height, 10);
        if (h > 0) setHeight(Math.max(320, h));
      }
    }
    window.addEventListener("message", onMsg);
    return () => window.removeEventListener("message", onMsg);
  }, []);

  useEffect(() => {
    if (!open) return;
    function onKey(e) { if (e.key === "Escape") setOpen(false); }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  return React.createElement("div", {
      style: { position: "fixed", inset: 0, zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(20,20,15,0.6)", padding: "20px" },
      onClick: () => setOpen(false)
    },
    React.createElement("div", {
        onClick: e => e.stopPropagation(),
        style: { position: "relative", width: "100%", maxWidth: "480px", maxHeight: "92vh", overflowY: "auto", background: "var(--paper)", borderRadius: "var(--r-card)", padding: "clamp(22px, 5vw, 32px) clamp(16px, 4vw, 20px) 16px", boxShadow: "var(--shadow-lift)" }
      },
      React.createElement("button", {
        type: "button", onClick: () => setOpen(false), "aria-label": "Закрыть",
        style: { position: "absolute", top: "12px", right: "12px", width: "34px", height: "34px", border: "none", background: "var(--sand)", borderRadius: "999px", fontSize: "1.15rem", color: "var(--ink)", cursor: "pointer", lineHeight: 1, zIndex: 2 }
      }, "✕"),

      React.createElement("h2", { style: { margin: "0 0 6px", fontSize: "var(--fs-h3)", lineHeight: 1.15, paddingRight: "40px", color: "var(--ink)" } }, "Занять место на Разминке"),
      React.createElement("p", { style: { margin: "0 0 18px", fontFamily: "var(--font-mono)", fontSize: "var(--fs-mono)", letterSpacing: "var(--ls-mono-wide)", color: "var(--coral)" } }, "29 июля · 4 дня · 990 ₽"),

      React.createElement("iframe", {
        key: openId,
        src: widgetSrc(),
        title: "Форма записи",
        style: { display: "block", width: "100%", height: height + "px", border: "0", overflow: "hidden" },
        allow: "clipboard-write"
      })
    )
  );
}

ReactDOM.createRoot(document.getElementById("lead-modal-root")).render(React.createElement(LeadModal));
})();
