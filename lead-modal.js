/* global React, ReactDOM */
(function(){
const useState = React.useState, useEffect = React.useEffect, useRef = React.useRef;

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
  const [loaded, setLoaded] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const scrollerRef = useRef(null);

  function checkHint() {
    const el = scrollerRef.current;
    if (!el) { setShowHint(false); return; }
    setShowHint(el.scrollHeight - el.scrollTop - el.clientHeight > 16);
  }

  useEffect(() => {
    if (!open) return;
    const t = setTimeout(checkHint, 60);
    return () => clearTimeout(t);
  }, [open, height, loaded]);

  useEffect(() => {
    window.__openLeadModal = () => { setHeight(460); setLoaded(false); setShowHint(false); setOpenId(id => id + 1); setOpen(true); };
    function onMsg(e) {
      const d = e.data;
      if (d && d.uniqName === GK_UNIQ && d.height) {
        const h = parseInt(d.height, 10);
        if (h > 0) { setHeight(Math.max(320, h)); setLoaded(true); }
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
          !loaded && React.createElement("div", {
            style: { position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 14, color: "var(--ink-55)" }
          },
            React.createElement("span", { style: { width: 34, height: 34, borderRadius: "999px", border: "3px solid var(--hairline)", borderTopColor: "var(--coral)", animation: "leadSpin 0.7s linear infinite" } }),
            React.createElement("span", { style: { fontFamily: "var(--font-mono)", fontSize: "var(--fs-mono-sm)", letterSpacing: "var(--ls-mono-wide)" } }, "Загружаем форму…"),
            React.createElement("style", null, "@keyframes leadSpin{to{transform:rotate(360deg)}}")
          ),
          React.createElement("iframe", {
            key: openId,
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
