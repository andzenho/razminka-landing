/* @ds-bundle: {"format":4,"namespace":"DesignSystem_9e127e","components":[{"name":"HandCircle","sourcePath":"components/collage/HandCircle.jsx"},{"name":"ScriptNote","sourcePath":"components/collage/ScriptNote.jsx"},{"name":"StatCard","sourcePath":"components/collage/StatCard.jsx"},{"name":"TapedPhoto","sourcePath":"components/collage/TapedPhoto.jsx"},{"name":"TornEdge","sourcePath":"components/collage/TornEdge.jsx"},{"name":"Accordion","sourcePath":"components/core/Accordion.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"OfferCard","sourcePath":"components/core/OfferCard.jsx"},{"name":"TiltCard","sourcePath":"components/core/TiltCard.jsx"},{"name":"HighlightMark","sourcePath":"components/signature/HighlightMark.jsx"},{"name":"RecIndicator","sourcePath":"components/signature/RecIndicator.jsx"},{"name":"SubtitleQuote","sourcePath":"components/signature/SubtitleQuote.jsx"},{"name":"Timecode","sourcePath":"components/signature/Timecode.jsx"},{"name":"Timeline","sourcePath":"components/signature/Timeline.jsx"},{"name":"Viewfinder","sourcePath":"components/signature/Viewfinder.jsx"}],"sourceHashes":{"components/collage/HandCircle.jsx":"791b31ef73cf","components/collage/ScriptNote.jsx":"58d08e5db2d6","components/collage/StatCard.jsx":"a222c07f232e","components/collage/TapedPhoto.jsx":"763a3901c651","components/collage/TornEdge.jsx":"6b6e81b241cd","components/core/Accordion.jsx":"191a74af4e9d","components/core/Button.jsx":"2498f660d284","components/core/OfferCard.jsx":"c1001fcc2121","components/core/TiltCard.jsx":"0ac916d81d2b","components/signature/HighlightMark.jsx":"66ebb7be1ebf","components/signature/RecIndicator.jsx":"2b539cee484c","components/signature/SubtitleQuote.jsx":"58cd0fb3c8ed","components/signature/Timecode.jsx":"053ad32d24ac","components/signature/Timeline.jsx":"5de3d434cf6c","components/signature/Viewfinder.jsx":"4b38e647a18c","ui_kits/razminka/RazminkaLanding.jsx":"cfc30457ee36","ui_kits/razminka/image-slot.js":"0394ad34f685"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_9e127e = window.DesignSystem_9e127e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/collage/HandCircle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * HandCircle — обводка ключевого слова от руки: эллипс или подчёркивание,
 * нарисованное грубой линией поверх текста (как маркером на лету).
 */
function HandCircle({
  children,
  color = "var(--coral)",
  shape = "circle",
  strokeWidth = 3,
  style,
  ...rest
}) {
  const circle = /*#__PURE__*/React.createElement("path", {
    d: "M 8,26 C 30,6 200,4 292,14 C 360,22 372,40 320,52 C 240,68 40,68 14,50 C 0,40 4,30 12,24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    vectorEffect: "non-scaling-stroke"
  });
  const underline = /*#__PURE__*/React.createElement("path", {
    d: "M 6,20 C 90,10 220,10 316,18 C 200,16 90,20 8,30",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    vectorEffect: "non-scaling-stroke"
  });
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: "relative",
      display: "inline-block",
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), children, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 326 72",
    preserveAspectRatio: "none",
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: shape === "circle" ? "-6%" : "0",
      top: shape === "circle" ? "-16%" : "72%",
      width: shape === "circle" ? "112%" : "100%",
      height: shape === "circle" ? "132%" : "40%",
      pointerEvents: "none",
      overflow: "visible"
    }
  }, shape === "circle" ? circle : underline));
}
Object.assign(__ds_scope, { HandCircle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/collage/HandCircle.jsx", error: String((e && e.message) || e) }); }

// components/collage/ScriptNote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ScriptNote — рукописная пометка-маркер секции, как «[2] мой подход».
 * Caveat, чуть наклонена. index рисует "[N]" перед текстом.
 */
function ScriptNote({
  children,
  index,
  color = "var(--coral)",
  tilt = -2,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "baseline",
      gap: "0.35em",
      fontFamily: "var(--font-script)",
      fontSize: "var(--fs-script)",
      fontWeight: 600,
      lineHeight: 1,
      color,
      transform: `rotate(${tilt}deg)`,
      ...style
    }
  }, rest), index != null && /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.85
    }
  }, "[", index, "]"), children);
}
Object.assign(__ds_scope, { ScriptNote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/collage/ScriptNote.jsx", error: String((e && e.message) || e) }); }

// components/collage/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * StatCard — оверлей-карточка со статистикой (охваты, подписчики), как всплывающий
 * блок аналитики Instagram поверх фото-коллажа. tone: light (на светлом) / dark.
 */
function StatCard({
  value,
  label,
  delta,
  deltaPositive = true,
  tone = "light",
  style,
  ...rest
}) {
  const dark = tone === "dark";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "inline-flex",
      flexDirection: "column",
      gap: "4px",
      minWidth: "180px",
      padding: "12px 16px",
      borderRadius: "var(--r-card)",
      background: dark ? "var(--ink)" : "var(--paper)",
      color: dark ? "var(--paper)" : "var(--ink)",
      boxShadow: "var(--shadow-lift)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      gap: "12px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-mono-sm)",
      letterSpacing: "var(--ls-mono)",
      color: dark ? "rgba(250,250,248,0.6)" : "var(--text-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "var(--fs-h3)",
      lineHeight: 1
    }
  }, value)), delta != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-mono)",
      letterSpacing: "var(--ls-mono)",
      color: deltaPositive ? "#1f7a34" : "var(--coral)",
      fontWeight: 600
    }
  }, deltaPositive ? "+" : "", delta));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/collage/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/collage/TapedPhoto.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * TapedPhoto — фото коллажем: лёгкий наклон, полоска «скотча» сверху, острые углы
 * (radius 0 — как видоискатель). children = <img>, <image-slot> или заглушка.
 * caption — рукописная подпись под фото.
 */
function TapedPhoto({
  children,
  rotate = -2,
  tape = true,
  caption,
  width,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      position: "relative",
      display: "inline-block",
      width: width || "auto",
      transform: `rotate(${rotate}deg)`,
      background: "var(--paper)",
      padding: "8px 8px 10px",
      boxShadow: "var(--shadow-lift)",
      ...style
    }
  }, rest), tape && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: "-11px",
      left: "50%",
      transform: "translateX(-50%) rotate(1.5deg)",
      width: "84px",
      height: "22px",
      background: "rgba(198,244,50,0.55)",
      boxShadow: "inset 0 0 0 1px rgba(20,20,15,0.06)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--ink-08)",
      lineHeight: 0
    }
  }, children), caption && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontFamily: "var(--font-script)",
      fontSize: "var(--fs-script)",
      color: "var(--ink-70)",
      textAlign: "center",
      marginTop: "6px",
      lineHeight: 1
    }
  }, caption));
}
Object.assign(__ds_scope, { TapedPhoto });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/collage/TapedPhoto.jsx", error: String((e && e.message) || e) }); }

// components/collage/TornEdge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * TornEdge — рваный край бумаги как переход между секциями. Кладётся сверху или
 * снизу секции; color = цвет ЭТОЙ секции (рвётся её бумага, открывая соседнюю).
 * Геометрия рваного края — фиксированный «естественный» путь, не идеально ровный.
 */
function TornEdge({
  side = "top",
  color = "var(--paper)",
  height = 34,
  style,
  ...rest
}) {
  // Грубый рваный контур (0..1200 x, высота 40). side=top => заливка сверху.
  const top = "M0,40 L0,18 L34,22 L70,10 L112,20 L150,8 L196,19 L236,6 L280,17 L322,7 L368,18 L410,9 L456,20 L500,10 L548,21 L590,8 L634,18 L680,7 L724,19 L768,9 L812,20 L856,8 L900,18 L944,7 L988,19 L1032,9 L1076,20 L1120,8 L1160,18 L1200,12 L1200,40 Z";
  const bottom = "M0,0 L1200,0 L1200,22 L1160,18 L1120,30 L1076,20 L1032,31 L988,19 L944,30 L900,20 L856,32 L812,20 L768,31 L724,19 L680,32 L634,21 L590,31 L548,19 L500,30 L456,20 L410,31 L368,20 L322,32 L280,21 L236,33 L196,20 L150,31 L112,19 L70,30 L34,18 L0,22 Z";
  return /*#__PURE__*/React.createElement("div", _extends({
    "aria-hidden": "true",
    style: {
      position: "relative",
      width: "100%",
      height: `${height}px`,
      lineHeight: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 1200 40",
    preserveAspectRatio: "none",
    style: {
      width: "100%",
      height: "100%",
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: side === "top" ? top : bottom,
    fill: color
  })));
}
Object.assign(__ds_scope, { TornEdge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/collage/TornEdge.jsx", error: String((e && e.message) || e) }); }

// components/core/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Accordion — FAQ. Одна открытая секция за раз (по умолчанию), моно-таймкоды слева
 * как индексы. Порядок вопросов не менять на уровне данных.
 * items: [{ q, a }]
 */
function Accordion({
  items = [],
  single = true,
  style,
  ...rest
}) {
  const [open, setOpen] = useState(single ? 0 : []);
  const isOpen = i => single ? open === i : open.includes(i);
  const toggle = i => {
    if (single) setOpen(open === i ? -1 : i);else setOpen(open.includes(i) ? open.filter(x => x !== i) : [...open, i]);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderTop: "1px solid var(--hairline)",
      ...style
    }
  }, rest), items.map((it, i) => {
    const o = isOpen(i);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderBottom: "1px solid var(--hairline)"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => toggle(i),
      "aria-expanded": o,
      style: {
        width: "100%",
        display: "flex",
        alignItems: "baseline",
        gap: "16px",
        textAlign: "left",
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "22px 4px",
        color: "var(--ink)",
        font: "inherit"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "var(--fs-mono-sm)",
        letterSpacing: "var(--ls-mono-wide)",
        color: o ? "var(--coral)" : "var(--text-faint)",
        flexShrink: 0,
        paddingTop: "3px"
      }
    }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        fontFamily: "var(--font-display)",
        fontWeight: 600,
        fontSize: "var(--fs-h3)",
        lineHeight: 1.2,
        letterSpacing: "-0.01em"
      }
    }, it.q), /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        flexShrink: 0,
        width: "24px",
        height: "24px",
        position: "relative",
        transform: o ? "rotate(45deg)" : "none",
        transition: "transform var(--dur) var(--ease-out)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        top: "11px",
        left: "3px",
        right: "3px",
        height: "2px",
        background: "var(--ink)"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: "11px",
        top: "3px",
        bottom: "3px",
        width: "2px",
        background: "var(--ink)"
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateRows: o ? "1fr" : "0fr",
        transition: "grid-template-rows var(--dur) var(--ease-out)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        padding: "0 4px 24px 44px",
        color: "var(--text-muted)",
        maxWidth: "58ch",
        fontSize: "var(--fs-body)"
      }
    }, it.a))));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — CTA. primary = коралл (основной призыв, один на экран),
 * secondary = обводка чернилами, ghost = только текст.
 * Углы — таблетка (pill) для primary/secondary.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  as = "button",
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "10px 18px",
      fontSize: "var(--fs-sm)"
    },
    md: {
      padding: "15px 28px",
      fontSize: "var(--fs-body)"
    },
    lg: {
      padding: "19px 36px",
      fontSize: "var(--fs-lead)"
    }
  };
  const variants = {
    primary: {
      background: "var(--coral)",
      color: "var(--on-accent)",
      border: "2px solid var(--coral)"
    },
    secondary: {
      background: "transparent",
      color: "var(--ink)",
      border: "2px solid var(--ink)"
    },
    ghost: {
      background: "transparent",
      color: "var(--ink)",
      border: "2px solid transparent",
      padding: "8px 6px"
    }
  };
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      letterSpacing: "-0.01em",
      lineHeight: 1,
      borderRadius: "var(--r-pill)",
      cursor: "pointer",
      textDecoration: "none",
      transition: "transform var(--dur-fast) var(--ease-out), background var(--dur) var(--ease-out), color var(--dur) var(--ease-out)",
      ...sizes[size],
      ...variants[variant],
      ...style
    },
    onMouseDown: e => e.currentTarget.style.transform = "scale(0.97)",
    onMouseUp: e => e.currentTarget.style.transform = "",
    onMouseLeave: e => e.currentTarget.style.transform = ""
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/OfferCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * OfferCard — блок цены. Тёмная подложка, REC-метка, крупная цена в display,
 * список входящего с моно-галочками, один CTA.
 * Копирайтинг офера: без двоеточий и без длинных тире.
 */
function OfferCard({
  price = "990 ₽",
  title = "Разминка",
  kicker = "Интенсив на 4 дня",
  includes = [],
  ctaLabel = "Забрать за 990 ₽",
  onCta,
  note,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--ink)",
      color: "var(--paper)",
      borderRadius: "var(--r-card)",
      padding: "clamp(24px, 6vw, 40px)",
      display: "flex",
      flexDirection: "column",
      gap: "24px",
      position: "relative",
      overflow: "hidden",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-mono-sm)",
      letterSpacing: "var(--ls-mono-wide)",
      color: "var(--paper)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 999,
      background: "var(--coral)"
    }
  }), "REC 00:00"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-mono-sm)",
      letterSpacing: "var(--ls-mono)",
      color: "rgba(250,250,248,0.55)"
    }
  }, kicker)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "var(--fs-h2)",
      lineHeight: 1,
      letterSpacing: "-0.02em"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "12px",
      marginTop: "14px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: "var(--fs-hero)",
      lineHeight: 0.9,
      letterSpacing: "-0.03em",
      color: "var(--lime)"
    }
  }, price))), includes.length > 0 && /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: "12px"
    }
  }, includes.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: "flex",
      gap: "12px",
      alignItems: "baseline",
      fontSize: "var(--fs-body)",
      color: "rgba(250,250,248,0.9)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      color: "var(--lime)",
      fontSize: "var(--fs-mono)",
      flexShrink: 0
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("span", null, it)))), /*#__PURE__*/React.createElement("button", {
    onClick: onCta,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--coral)",
      color: "var(--on-accent)",
      border: "none",
      borderRadius: "var(--r-pill)",
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "var(--fs-lead)",
      padding: "18px 28px",
      cursor: "pointer",
      letterSpacing: "-0.01em",
      transition: "transform var(--dur-fast) var(--ease-out)"
    },
    onMouseDown: e => e.currentTarget.style.transform = "scale(0.97)",
    onMouseUp: e => e.currentTarget.style.transform = "",
    onMouseLeave: e => e.currentTarget.style.transform = ""
  }, ctaLabel), note && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-mono-sm)",
      letterSpacing: "var(--ls-mono)",
      color: "rgba(250,250,248,0.5)",
      textAlign: "center"
    }
  }, note));
}
Object.assign(__ds_scope, { OfferCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/OfferCard.jsx", error: String((e && e.message) || e) }); }

// components/core/TiltCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * TiltCard — карточка-контейнер с лёгким наклоном ±0.5–1° на ховере (съёмка с рук).
 * Небольшое скругление (var(--r-card)). Уважает prefers-reduced-motion через CSS.
 * Используйте только для по-настоящему параллельных равнозначных элементов.
 */
function TiltCard({
  children,
  tone = "sand",
  tilt = "var(--tilt)",
  style,
  className = "",
  ...rest
}) {
  const tones = {
    sand: {
      background: "var(--bg-card)",
      color: "var(--ink)"
    },
    paper: {
      background: "var(--bg)",
      color: "var(--ink)",
      border: "1px solid var(--hairline)"
    },
    ink: {
      background: "var(--ink)",
      color: "var(--paper)"
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `tiltcard ${className}`,
    style: {
      borderRadius: "var(--r-card)",
      padding: "var(--sp-5)",
      boxShadow: "var(--shadow-card)",
      transition: "transform var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out)",
      ["--tc-tilt"]: tilt,
      ...tones[tone],
      ...style
    }
  }, rest), children, /*#__PURE__*/React.createElement("style", null, `
        .tiltcard:hover { transform: rotate(var(--tc-tilt)) translateY(-2px); box-shadow: var(--shadow-lift); }
        @media (prefers-reduced-motion: reduce){ .tiltcard:hover { transform: none; } }
      `));
}
Object.assign(__ds_scope, { TiltCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TiltCard.jsx", error: String((e && e.message) || e) }); }

// components/signature/HighlightMark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * HighlightMark — лайм-маркер под словом, будто закрашено хайлайтером на лету.
 * Неровный, чуть съехавший блок — не аккуратная разметка дизайнера.
 */
function HighlightMark({
  children,
  tilt = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("mark", _extends({
    style: {
      background: "transparent",
      color: "inherit",
      position: "relative",
      display: "inline",
      boxDecorationBreak: "clone",
      WebkitBoxDecorationBreak: "clone",
      padding: "0.02em 0.12em",
      backgroundImage: "linear-gradient(var(--marker), var(--marker))",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 0.62em",
      backgroundPosition: "0 88%",
      transform: tilt ? "rotate(-0.6deg)" : "none",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { HighlightMark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/signature/HighlightMark.jsx", error: String((e && e.message) || e) }); }

// components/signature/RecIndicator.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * RecIndicator — чёрная таблетка с пульсирующей красной точкой и моно-таймером,
 * как индикатор записи экрана. Кладётся поверх любого блока.
 */
function RecIndicator({
  time = "00:00",
  label = "REC",
  live = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "status",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      padding: "6px 12px",
      background: "var(--rec-pill)",
      color: "var(--on-rec)",
      borderRadius: "var(--r-pill)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-timecode)",
      fontWeight: 600,
      letterSpacing: "var(--ls-mono-wide)",
      lineHeight: 1,
      boxShadow: "var(--shadow-pill)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: "8px",
      height: "8px",
      borderRadius: "999px",
      background: "var(--coral)",
      boxShadow: "0 0 0 0 rgba(255,77,61,0.6)",
      animation: live ? "rec-blink 1.4s var(--ease-in-out) infinite" : "none"
    }
  }), /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.55
    }
  }, time), /*#__PURE__*/React.createElement("style", null, `@keyframes rec-blink{0%,100%{opacity:1}50%{opacity:0.25}}
        @media (prefers-reduced-motion: reduce){[role=status] span{animation:none!important}}`));
}
Object.assign(__ds_scope, { RecIndicator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/signature/RecIndicator.jsx", error: String((e && e.message) || e) }); }

// components/signature/SubtitleQuote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SubtitleQuote — цитата как автосубтитр видео: тёмная таблетка на светлом фоне,
 * моно-таймкод. НЕ типографский пул-квоут.
 */
function SubtitleQuote({
  children,
  time = "00:07",
  author,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "10px",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      background: "var(--rec-pill)",
      color: "var(--on-rec)",
      padding: "14px 18px",
      borderRadius: "8px",
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: "var(--fs-lead)",
      lineHeight: 1.35,
      maxWidth: "40ch",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-mono-sm)",
      letterSpacing: "var(--ls-mono-wide)",
      color: "var(--coral)",
      display: "block",
      marginBottom: "6px"
    }
  }, "\u25CF ", time), children), author && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-mono)",
      letterSpacing: "var(--ls-mono)",
      color: "var(--text-muted)",
      paddingLeft: "4px"
    }
  }, author));
}
Object.assign(__ds_scope, { SubtitleQuote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/signature/SubtitleQuote.jsx", error: String((e && e.message) || e) }); }

// components/signature/Timecode.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Timecode — моноширинная метка данных: таймкод, счётчик просмотров, любая
 * метаинформация видео. Стилизовано как метаданные, не как текст.
 */
function Timecode({
  children,
  dot = false,
  muted = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-mono)",
      letterSpacing: "var(--ls-mono)",
      fontWeight: 500,
      color: muted ? "var(--text-faint)" : "var(--text-muted)",
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: "var(--coral)",
      flexShrink: 0
    }
  }), children);
}
Object.assign(__ds_scope, { Timecode });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/signature/Timecode.jsx", error: String((e && e.message) || e) }); }

// components/signature/Timeline.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Timeline — сквозная вертикальная дорожка-скраббер (как таймлайн видеоредактора)
 * вместо обычной нумерации. Таймкоды 00:00, 00:14 и т.д. Использовать ТОЛЬКО там,
 * где есть реальная хронология (дни интенсива).
 *
 * items: [{ time, title, body }]
 */
function Timeline({
  items = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("ol", _extends({
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      position: "relative",
      display: "flex",
      flexDirection: "column",
      ...style
    }
  }, rest), items.map((it, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        position: "relative",
        display: "grid",
        gridTemplateColumns: "64px 1fr",
        gap: "20px",
        paddingBottom: last ? 0 : "var(--sp-7)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "var(--fs-timecode)",
        letterSpacing: "var(--ls-mono)",
        color: "var(--text-muted)",
        fontWeight: 600,
        marginBottom: "8px"
      }
    }, it.time), /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        width: "13px",
        height: "13px",
        borderRadius: "999px",
        background: "var(--coral)",
        outline: "3px solid var(--bg)",
        zIndex: 1,
        flexShrink: 0
      }
    }), !last && /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        width: "2px",
        flex: 1,
        marginTop: "4px",
        background: "repeating-linear-gradient(var(--hairline-strong) 0 6px, transparent 6px 12px)"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        paddingTop: "22px"
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: "0 0 8px",
        fontSize: "var(--fs-h3)"
      }
    }, it.title), it.body && /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        color: "var(--text-muted)",
        maxWidth: "46ch"
      }
    }, it.body)));
  }));
}
Object.assign(__ds_scope, { Timeline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/signature/Timeline.jsx", error: String((e && e.message) || e) }); }

// components/signature/Viewfinder.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Viewfinder — рамка-«видоискатель»: четыре острых уголка как при фокусировке
 * камеры. Оборачивает скриншот/фото. Углы ОСТРЫЕ (radius 0) — сигнатурный элемент,
 * смягчать нельзя.
 */
function Viewfinder({
  children,
  color = "var(--ink)",
  rec = false,
  recTime = "00:00",
  style,
  ...rest
}) {
  const corner = pos => {
    const isTop = pos.includes("top");
    const isLeft = pos.includes("left");
    return {
      position: "absolute",
      [isTop ? "top" : "bottom"]: "0",
      [isLeft ? "left" : "right"]: "0",
      width: "var(--vf-corner)",
      height: "var(--vf-corner)",
      [isTop ? "borderTop" : "borderBottom"]: `var(--vf-weight) solid ${color}`,
      [isLeft ? "borderLeft" : "borderRight"]: `var(--vf-weight) solid ${color}`,
      pointerEvents: "none"
    };
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      display: "block",
      padding: "var(--vf-inset)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--ink-08)"
    }
  }, children), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: corner("top-left")
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: corner("top-right")
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: corner("bottom-left")
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: corner("bottom-right")
  }), rec && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: "18px",
      left: "18px",
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      padding: "5px 10px",
      background: "var(--rec-pill)",
      color: "var(--on-rec)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-mono-sm)",
      fontWeight: 600,
      letterSpacing: "var(--ls-mono-wide)",
      borderRadius: "var(--r-pill)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: "var(--coral)"
    }
  }), "REC ", recTime));
}
Object.assign(__ds_scope, { Viewfinder });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/signature/Viewfinder.jsx", error: String((e && e.message) || e) }); }

// ui_kits/razminka/RazminkaLanding.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React */
// Разминка — лендинг (mobile-first). Финальный утверждённый текст — дословно, без правок.
// Вёрстка на компонентах дизайн-системы. Палитра из брифа; оформление коллаж/сигнатура.
// Фото рилсов и Карины — пользовательские <image-slot>.
const NS = window.DesignSystem_9e127e;
const {
  RecIndicator,
  Viewfinder,
  HighlightMark,
  SubtitleQuote,
  Timecode
} = NS;
const {
  Button,
  TiltCard,
  Accordion
} = NS;
const {
  ScriptNote,
  HandCircle,
  TornEdge,
  TapedPhoto,
  StatCard
} = NS;
function Section({
  children,
  style,
  inner,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      padding: "var(--section-y) var(--gutter)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      ...inner
    }
  }, children));
}

// Крупный CTA — по центру, максимально кликабельный
function Cta({
  light
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#offer",
    className: "cta-big",
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 14,
      background: "var(--coral)",
      color: "var(--on-accent)",
      textDecoration: "none",
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      letterSpacing: "-0.01em",
      fontSize: "clamp(1.25rem, 3.4vw, 1.6rem)",
      lineHeight: 1,
      padding: "26px 56px",
      borderRadius: "var(--r-pill)",
      border: "none",
      boxShadow: "0 12px 30px -10px rgba(255,77,61,0.7)"
    }
  }, "\u041F\u0440\u0438\u043D\u044F\u0442\u044C \u0443\u0447\u0430\u0441\u0442\u0438\u0435", /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    className: "cta-arrow",
    style: {
      display: "inline-block",
      fontFamily: "var(--font-body)"
    }
  }, "\u2192")));
}

// Инфо-строка «старт / длительность»
function Pill({
  label,
  value,
  accent
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      padding: "12px 20px",
      borderRadius: "var(--r-pill)",
      background: accent ? "var(--coral)" : "rgba(250,250,248,0.12)",
      color: accent ? "var(--on-accent)" : "var(--paper)",
      backdropFilter: "blur(4px)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-mono-sm)",
      letterSpacing: "var(--ls-mono-wide)",
      opacity: accent ? 0.85 : 0.7,
      whiteSpace: "nowrap"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "var(--fs-h3)",
      lineHeight: 1,
      whiteSpace: "nowrap"
    }
  }, value));
}

// Карточка дня. hero=true — выделенный День 4 (эфир)
function DayCard({
  n,
  date,
  tag,
  headline,
  lead,
  bullets,
  hero
}) {
  const bg = hero ? "var(--ink)" : "var(--paper)";
  const fg = hero ? "var(--paper)" : "var(--ink)";
  const muted = hero ? "rgba(250,250,248,0.8)" : "var(--ink-70)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      color: fg,
      borderRadius: "var(--r-card)",
      border: hero ? "none" : "1px solid var(--hairline)",
      boxShadow: hero ? "var(--shadow-lift)" : "var(--shadow-card)",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12,
      padding: "18px 22px",
      background: hero ? "var(--lime)" : "var(--sand)",
      color: "var(--ink)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-mono)",
      letterSpacing: "var(--ls-mono-wide)",
      fontWeight: 700,
      textTransform: "uppercase"
    }
  }, "\u0414\u0435\u043D\u044C ", n)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      flexWrap: "wrap"
    }
  }, tag && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-mono-sm)",
      letterSpacing: "var(--ls-mono-wide)",
      fontWeight: 700,
      background: "var(--ink)",
      color: "var(--lime)",
      padding: "6px 12px",
      borderRadius: "var(--r-pill)"
    }
  }, tag), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "var(--fs-h3)",
      lineHeight: 0.95,
      letterSpacing: "-0.01em"
    }
  }, date))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "24px 24px 28px"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "0 0 14px",
      fontSize: "var(--fs-h3)",
      lineHeight: 1.15,
      color: hero ? "var(--lime)" : "var(--ink)"
    }
  }, headline), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: bullets ? "0 0 18px" : 0,
      color: muted,
      fontSize: "var(--fs-lead)",
      lineHeight: 1.45,
      maxWidth: "54ch"
    }
  }, lead), bullets && /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, bullets.map((b, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: "flex",
      gap: 12,
      alignItems: "baseline",
      color: muted,
      fontSize: "var(--fs-body)",
      lineHeight: 1.5,
      maxWidth: "60ch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--coral)",
      fontFamily: "var(--font-mono)",
      flexShrink: 0,
      fontWeight: 700
    }
  }, "\u2014"), /*#__PURE__*/React.createElement("span", null, b))))));
}
function RazminkaLanding() {
  const pains = ["Снимаешь, а никто не смотрит, и руки опускаются.", "Или не снимаешь вообще, потому что страшно, что осудят.", "Или переснимаешь по десять раз, а потом решаешь, что опять не то, и удаляешь."];
  const bonuses = [{
    t: "100 разговорных тем для рилсов.",
    b: "Тебе не придётся больше сидеть перед камерой с мыслью «Мне вообще не о чем снять сегодня». Открываешь документ, выбираешь тему и снимаешь."
  }, {
    t: "50 цепляющих первых фраз.",
    b: "Получишь готовые хуки, с которых хочется досмотреть видео до конца. Просто адаптируй их под свою мысль и начинай говорить."
  }, {
    t: "Карта контента на 30 дней.",
    b: "Проверяешь по нему своё видео, прежде чем винить алгоритм."
  }, {
    t: "Карина лично разберёт 10 лучших рилсов Разминки.",
    b: ""
  }];
  const faq = [{
    q: "Я уже пробовала курсы, не сработало. Почему тут по-другому?",
    a: "Здесь тоже есть уроки, но всего два дня. На третий ты уже снимаешь своё видео и получаешь на него разбор, а не остаёшься один на один с бесконечными лекциями."
  }, {
    q: "У меня обычная жизнь, мне не о чем снимать.",
    a: "На первом дне как раз находим твою фишку и тему, про что тебе снять первое видео. Даже если сейчас кажется, что рассказывать нечего."
  }, {
    q: "Боюсь, что меня осудят.",
    a: "Обратную связь даём без осуждения, спокойно и по делу. Первые видео у всех выходят кривыми, это нормально."
  }, {
    q: "Нужно снимать каждый день?",
    a: "Нет. Это четыре дня и одно первое видео. Дальше снимаешь в своём темпе."
  }, {
    q: "А вдруг у меня не получится?",
    a: "Метод как раз для тех, у кого раньше не получалось. Идёшь по шагам, снимаешь одно видео и получаешь обратную связь, что поправить. С первого раза идеально не выходит ни у кого, для того и обратная связь."
  }, {
    q: "Карина правда посмотрит моё видео?",
    a: "Я смотрю сама то, что успеваю лично. Остальные видео разбирает команда по тому же методу, которому я их учу. В любом случае без осуждения."
  }];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("style", null, `
        .cta-big { transition: transform var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out); }
        .cta-big:hover { transform: translateY(-3px); box-shadow: 0 18px 40px -10px rgba(255,77,61,0.85); }
        .cta-big:active { transform: scale(0.97); }
        .cta-big .cta-arrow { transition: transform var(--dur) var(--ease-out); }
        .cta-big:hover .cta-arrow { transform: translateX(6px); }
        @media (prefers-reduced-motion: no-preference){
          .cta-big { animation: cta-pulse 2.6s var(--ease-in-out) infinite; }
          @keyframes cta-pulse { 0%,100%{ box-shadow: 0 12px 30px -10px rgba(255,77,61,0.7);} 50%{ box-shadow: 0 12px 40px -6px rgba(255,77,61,0.95);} }
        }
        @media (max-width: 560px){ .cta-big { width: 100%; } }
        .reels-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
        @media (max-width: 640px){ .reels-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; } }
        .info-strip { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
        .pain-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        @media (max-width: 720px){ .pain-grid { grid-template-columns: repeat(2, 1fr); } .pain-grid > :nth-child(3){ grid-column: 1 / -1; } }
      `), /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: "var(--gutter)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      zIndex: 0
    }
  }, React.createElement("image-slot", {
    id: "hero-bg",
    shape: "rect",
    placeholder: "фон — фото / кадр из рилса",
    style: {
      width: "100%",
      height: "100%"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      zIndex: 1,
      background: "linear-gradient(180deg, rgba(20,20,15,0.55), rgba(20,20,15,0.35) 38%, rgba(20,20,15,0.85))",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 2,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(RecIndicator, {
    time: "00:00"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: "clamp(2.25rem, 11vw, 7rem)",
      lineHeight: 0.86,
      letterSpacing: "-0.03em",
      color: "var(--paper)",
      textTransform: "uppercase",
      overflowWrap: "anywhere",
      maxWidth: "100%"
    }
  }, "\u0420\u0430\u0437\u043C\u0438\u043D\u043A\u0430"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      display: "inline-block",
      background: "var(--lime)",
      color: "var(--ink)",
      padding: "6px 16px",
      borderRadius: "var(--r-pill)",
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "clamp(0.95rem, 3.4vw, 1.6rem)",
      transform: "rotate(-1deg)",
      whiteSpace: "nowrap"
    }
  }, "\u043B\u0451\u0433\u043A\u0438\u0439 \u0441\u0442\u0430\u0440\u0442 \u0432 \u0440\u0438\u043B\u0441")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      flexWrap: "wrap",
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    label: "\u0421\u0422\u0410\u0420\u0422",
    value: "29 \u0438\u044E\u043B\u044F",
    accent: true
  }), /*#__PURE__*/React.createElement(Pill, {
    label: "\u0414\u041B\u0418\u0422\u0421\u042F",
    value: "4 \u0434\u043D\u044F"
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "clamp(1.5rem, 6.2vw, 3.5rem)",
      lineHeight: 1.08,
      margin: "0 0 20px",
      color: "var(--paper)",
      fontWeight: 800
    }
  }, "\u0417\u0430 4 \u0434\u043D\u044F \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u043D\u0435\u0448\u044C ", /*#__PURE__*/React.createElement(HighlightMark, {
    tilt: false
  }, "\u0431\u043E\u044F\u0442\u044C\u0441\u044F \u043A\u0430\u043C\u0435\u0440\u044B"), " \u0438 \u0441\u043D\u0438\u043C\u0435\u0448\u044C \u043F\u0435\u0440\u0432\u044B\u0439 \u0440\u0438\u043B\u0441, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0437\u0430\u0445\u043E\u0447\u0435\u0442\u0441\u044F \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u0442\u044C"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 32px",
      color: "rgba(250,250,248,0.85)",
      fontSize: "var(--fs-lead)",
      fontWeight: 500,
      maxWidth: "48ch"
    }
  }, "\u041D\u0430 \u0440\u0430\u0437\u043C\u0438\u043D\u043A\u0435 \u0442\u044B \u0441\u043D\u0438\u043C\u0435\u0448\u044C \u0441\u0432\u043E\u0439 \u043F\u0435\u0440\u0432\u044B\u0439 \u0440\u0438\u043B\u0441 \u043F\u043E \u043C\u0435\u0442\u043E\u0434\u0443, \u043A\u043E\u0442\u043E\u0440\u044B\u043C \u044F \u043D\u0430\u0431\u0440\u0430\u043B\u0430 2,5 \u043C\u0438\u043B\u043B\u0438\u043E\u043D\u0430 \u043F\u043E\u0434\u043F\u0438\u0441\u0447\u0438\u043A\u043E\u0432 \u0432 Instagram, YouTube \u0438 TikTok"), /*#__PURE__*/React.createElement(Cta, {
    light: true
  }))), /*#__PURE__*/React.createElement(Section, {
    style: {
      background: "var(--sand)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--fs-h1)",
      margin: "0 0 32px",
      maxWidth: "20ch"
    }
  }, "\u0425\u043E\u0447\u0435\u0448\u044C \u0432\u0435\u0441\u0442\u0438 \u0431\u043B\u043E\u0433, \u043D\u043E \u043A\u0430\u0436\u0434\u044B\u0439 \u0440\u0430\u0437 \u0447\u0442\u043E-\u0442\u043E ", /*#__PURE__*/React.createElement(HandCircle, null, "\u043E\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u0442"), "."), /*#__PURE__*/React.createElement("div", {
    className: "pain-grid",
    style: {
      marginBottom: 36
    }
  }, pains.map((p, i) => /*#__PURE__*/React.createElement(TiltCard, {
    key: i,
    tone: "paper",
    tilt: i % 2 ? "var(--tilt-alt)" : "var(--tilt)"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-mono-sm)",
      letterSpacing: "var(--ls-mono-wide)",
      color: "var(--coral)",
      display: "block",
      marginBottom: 12
    }
  }, "0", i + 1), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--fs-lead)",
      fontWeight: 600,
      color: "var(--ink)"
    }
  }, p)))), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: "var(--measure)",
      margin: "0 0 32px",
      fontSize: "var(--fs-lead)",
      color: "var(--ink)",
      fontWeight: 500
    }
  }, "\u042F \u0434\u0430\u043C \u0442\u0435\u0431\u0435 \u043C\u0435\u0442\u043E\u0434, \u043F\u043E \u043A\u043E\u0442\u043E\u0440\u043E\u043C\u0443 \u0442\u044B \u0441\u043C\u043E\u0436\u0435\u0448\u044C \u043B\u0435\u0433\u043A\u043E \u0438 \u0431\u044B\u0441\u0442\u0440\u043E \u0441\u043D\u0438\u043C\u0430\u0442\u044C \u043A\u043E\u043D\u0442\u0435\u043D\u0442, \u0438 \u0447\u0442\u043E\u0431\u044B \u043E\u043D \u0435\u0449\u0435 \u043D\u0430\u0431\u0438\u0440\u0430\u043B \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u044B \u0438 \u043D\u0430 \u0442\u0435\u0431\u044F \u043F\u043E\u0434\u043F\u0438\u0441\u044B\u0432\u0430\u043B\u0438\u0441\u044C \u0442\u0432\u043E\u0438 \u043B\u044E\u0434\u0438"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement(SubtitleQuote, {
    time: "00:12",
    author: "\u041A\u0430\u0440\u0438\u043D\u0430"
  }, "\u041B\u0443\u0447\u0448\u0438\u0439 \u0440\u0438\u043B\u0441 \u044D\u0442\u043E \u0442\u043E\u0442, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0442\u044B \u043D\u0435 \u043F\u043E\u0431\u043E\u044F\u043B\u0430\u0441\u044C \u0432\u044B\u043B\u043E\u0436\u0438\u0442\u044C.")), /*#__PURE__*/React.createElement(Cta, null)), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--fs-h1)",
      margin: "0 0 24px",
      textTransform: "uppercase"
    }
  }, "\u042D\u0442\u043E \u043D\u0435 \u043E\u0447\u0435\u0440\u0435\u0434\u043D\u043E\u0439 \u043A\u0443\u0440\u0441"), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--measure)",
      display: "flex",
      flexDirection: "column",
      gap: 18,
      fontSize: "var(--fs-body)",
      color: "var(--ink-70)",
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--ink)",
      fontWeight: 600,
      fontSize: "var(--fs-lead)"
    }
  }, "\u0421\u043A\u043E\u0440\u0435\u0435 \u0432\u0441\u0435\u0433\u043E, \u0442\u044B \u0443\u0436\u0435 \u043F\u043E\u043A\u0443\u043F\u0430\u043B\u0430 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435 \u043F\u043E \u0431\u043B\u043E\u0433\u0443 \u0438\u043B\u0438 \u043F\u0440\u043E\u0431\u043E\u0432\u0430\u043B\u0430 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0435."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "\u0422\u044B \u043F\u0440\u043E\u0445\u043E\u0434\u0438\u043B\u0430 \u0443\u0436\u0435 \u0434\u0435\u0441\u044F\u0442\u043A\u0438 \u0443\u0440\u043E\u043A\u043E\u0432, \u0432\u043E\u0434\u0443, \u043A\u0440\u0430\u0441\u0438\u0432\u044B\u0435 \u0441\u043B\u043E\u0432\u0430 \u043D\u0438 \u043E \u0447\u0451\u043C. \u0414\u043E\u0441\u043C\u0430\u0442\u0440\u0438\u0432\u0430\u0435\u0448\u044C \u0434\u043E \u043F\u043E\u043B\u043E\u0432\u0438\u043D\u044B \u0438 \u0431\u0440\u043E\u0441\u0430\u0435\u0448\u044C, \u0430 \u0431\u043B\u043E\u0433 \u0442\u0430\u043A \u0438 \u043D\u0435 \u0441\u0434\u0432\u0438\u0433\u0430\u0435\u0442\u0441\u044F \u0441 \u043C\u0435\u0441\u0442\u0430."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--ink)",
      fontWeight: 600,
      fontSize: "var(--fs-lead)"
    }
  }, "\u041D\u0430 \u0420\u0430\u0437\u043C\u0438\u043D\u043A\u0435 \u0442\u044B \u0443\u0436\u0435 \u043D\u0430 \u0442\u0440\u0435\u0442\u0438\u0439 \u0434\u0435\u043D\u044C \u0441\u043D\u0438\u043C\u0435\u0448\u044C \u0441\u0432\u043E\u0439 \u043F\u0435\u0440\u0432\u044B\u0439 \u0440\u0430\u0437\u0433\u043E\u0432\u043E\u0440\u043D\u044B\u0439 \u0440\u0438\u043B\u0441 \u0438 \u0441\u0440\u0430\u0437\u0443 \u043F\u043E\u043B\u0443\u0447\u0438\u0448\u044C \u043D\u0430 \u043D\u0435\u0433\u043E \u043E\u0431\u0440\u0430\u0442\u043D\u0443\u044E \u0441\u0432\u044F\u0437\u044C")), /*#__PURE__*/React.createElement(Cta, null)), /*#__PURE__*/React.createElement(TornEdge, {
    side: "top",
    color: "var(--ink)",
    height: 38,
    style: {
      background: "var(--paper)"
    }
  }), /*#__PURE__*/React.createElement(Section, {
    style: {
      background: "var(--ink)",
      color: "var(--paper)",
      paddingTop: "var(--sp-8)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--fs-h1)",
      margin: "0 0 40px",
      color: "var(--paper)"
    }
  }, "\u041A\u0442\u043E \u0432\u0435\u0434\u0451\u0442 \u0440\u0430\u0437\u043C\u0438\u043D\u043A\u0443"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: 40,
      alignItems: "start",
      marginBottom: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(TapedPhoto, {
    rotate: -2,
    caption: "\u041A\u0430\u0440\u0438\u043D\u0430 \xB7 \u0441\u043D\u044F\u0442\u043E \u043D\u0430 \u0442\u0435\u043B\u0435\u0444\u043E\u043D",
    style: {
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      aspectRatio: "4/5"
    }
  }, React.createElement("image-slot", {
    id: "karina-photo",
    shape: "rect",
    placeholder: "фото Карины",
    style: {
      width: "100%",
      height: "100%"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: -6,
      bottom: 24,
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    label: "\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F",
    value: "2,5 \u043C\u043B\u043D",
    delta: "Instagram \xB7 YouTube \xB7 TikTok",
    deltaPositive: true
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18,
      paddingTop: 4
    }
  }, [{
    lead: "Меня зовут Карина, в блогинге я больше ",
    em: "6 лет",
    tail: "."
  }, {
    lead: "Меня смотрят ",
    em: "2,5 миллиона человек",
    tail: " в Instagram, YouTube и TikTok."
  }, {
    lead: "Снимаю ",
    em: "сама, на телефон",
    tail: ", без сценаристов и продюсеров. Ровно этому и учу."
  }].map((row, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      gap: 14,
      alignItems: "baseline"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--lime)",
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      fontSize: "var(--fs-body)",
      flexShrink: 0
    }
  }, "0", i + 1), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--fs-lead)",
      lineHeight: 1.4,
      color: "var(--paper)",
      fontWeight: 500
    }
  }, row.lead, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--lime)",
      fontWeight: 800
    }
  }, row.em), row.tail))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      borderLeft: "3px solid var(--lime)",
      paddingLeft: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-mono-sm)",
      letterSpacing: "var(--ls-mono-wide)",
      color: "var(--coral)",
      marginBottom: 8
    }
  }, "\u25CF \u041A\u0410\u0420\u0418\u041D\u0410"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-lead)",
      fontWeight: 600,
      lineHeight: 1.4,
      color: "var(--paper)"
    }
  }, "\u042F \u043D\u0438\u043A\u043E\u0433\u0434\u0430 \u043D\u0435 \u0443\u0447\u0438\u043B\u0430\u0441\u044C \u0431\u043B\u043E\u0433\u0438\u043D\u0433\u0443. \u0412\u0441\u0451, \u0447\u0435\u043C\u0443 \u0443\u0447\u0443, \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u043B\u0430 \u043D\u0430 \u0441\u0432\u043E\u0451\u043C \u0431\u043B\u043E\u0433\u0435 \u0437\u0430 \u044D\u0442\u0438 \u0433\u043E\u0434\u044B. \u041C\u0435\u0442\u043E\u0434 \u042F\u043F\u043F\u0438\u043D\u0433\u0430 \u044F \u043D\u0435 \u043F\u0440\u0438\u0434\u0443\u043C\u0430\u043B\u0430 \u0437\u0430 \u0441\u0442\u043E\u043B\u043E\u043C \u2014 \u0442\u0430\u043A \u044F \u0441\u0430\u043C\u0430 \u0441\u043D\u0438\u043C\u0430\u044E \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043B\u0435\u0442.")))), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--fs-h2)",
      margin: "0 0 28px",
      color: "var(--paper)",
      textAlign: "center"
    }
  }, "\u042D\u0442\u0438 \u0440\u043E\u043B\u0438\u043A\u0438 \u0441\u043D\u044F\u0442\u044B \u043F\u043E \u043C\u0435\u0442\u043E\u0434\u0443 \u042F\u043F\u043F\u0438\u043D\u0433\u0430"), /*#__PURE__*/React.createElement("div", {
    className: "reels-grid",
    style: {
      marginBottom: 40
    }
  }, Array.from({
    length: 8
  }).map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(Viewfinder, {
    color: "var(--paper)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "9/16",
      width: "100%"
    }
  }, React.createElement("image-slot", {
    id: `reel-${i + 1}`,
    shape: "rect",
    placeholder: "рилс 1M+",
    style: {
      width: "100%",
      height: "100%"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 14,
      bottom: 14,
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      background: "var(--ink)",
      color: "var(--paper)",
      padding: "4px 9px",
      borderRadius: "var(--r-pill)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-mono-sm)",
      letterSpacing: "var(--ls-mono)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--lime)"
    }
  }, "\u25B8"), " 1M+"))))), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: "var(--measure)",
      margin: "0 0 12px",
      color: "rgba(250,250,248,0.82)",
      fontSize: "var(--fs-body)"
    }
  }, "\u041D\u0438 \u043E\u0434\u0438\u043D \u0438\u0437 \u044D\u0442\u0438\u0445 \u0440\u0438\u043B\u0441\u043E\u0432 \u043D\u0435 \u0441\u043D\u0438\u043C\u0430\u043B\u0441\u044F \u043F\u043E \u0448\u0430\u0431\u043B\u043E\u043D\u0443. \u0412\u0441\u0435 \u043D\u0430\u0447\u0438\u043D\u0430\u043B\u0438\u0441\u044C \u0441 \u043E\u0431\u044B\u0447\u043D\u043E\u0433\u043E \u0440\u0430\u0437\u0433\u043E\u0432\u043E\u0440\u0430."), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: "var(--measure)",
      margin: "0 0 36px",
      color: "var(--lime)",
      fontSize: "var(--fs-lead)",
      fontWeight: 600
    }
  }, "\u0423 \u0442\u0435\u0431\u044F \u043D\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0438\u0434\u0435\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0431\u043B\u043E\u0433\u0430. \u0423 \u0442\u0435\u0431\u044F \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u0436\u0438\u0432\u043E\u0439 \u0431\u043B\u043E\u0433."), /*#__PURE__*/React.createElement(Cta, null)), /*#__PURE__*/React.createElement(TornEdge, {
    side: "bottom",
    color: "var(--ink)",
    height: 38,
    style: {
      background: "var(--paper)"
    }
  }), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--fs-h1)",
      margin: "0 0 40px",
      textAlign: "center"
    }
  }, "\u041A\u0430\u043A \u043F\u0440\u043E\u0445\u043E\u0434\u044F\u0442 4 \u0434\u043D\u044F"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(DayCard, {
    n: "1",
    date: "29 \u0438\u044E\u043B\u044F",
    headline: "\u041D\u0430\u0439\u0434\u0451\u0448\u044C, \u043E \u0447\u0451\u043C \u0433\u043E\u0432\u043E\u0440\u0438\u0442\u044C.",
    lead: "\u0422\u044B \u043F\u043E\u0439\u043C\u0451\u0448\u044C, \u0432 \u0447\u0451\u043C \u0442\u0432\u043E\u044F \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0430\u044F \u0442\u0435\u043C\u0430, \u0438 \u0443\u0439\u0434\u0451\u0448\u044C \u0441 \u0433\u043E\u0442\u043E\u0432\u044B\u043C \u043F\u043B\u0430\u043D\u043E\u043C \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u0430 \u0438 \u043F\u0435\u0440\u0432\u044B\u043C\u0438 \u0438\u0434\u0435\u044F\u043C\u0438 \u0438 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u044F\u043C\u0438 \u0434\u043B\u044F \u0440\u0438\u043B\u0441\u043E\u0432",
    bullets: ["Разберёмся, почему ты годами ищешь тему, хотя она уже давно рядом", "Покажу, как находить идеи для контента в своей обычной жизни, без недель самокопания в поисках «своей темы»", "Разберём 3 формата разговорных рилсов, которые легко сможет снять даже новичок благодаря методу Яппинг"]
  }), /*#__PURE__*/React.createElement(DayCard, {
    n: "2",
    date: "30 \u0438\u044E\u043B\u044F",
    headline: "\u041E\u0441\u0432\u0430\u0438\u0432\u0430\u0435\u0448\u044C \u043C\u0435\u0442\u043E\u0434 \u0441\u044A\u0451\u043C\u043A\u0438.",
    lead: "\u0420\u0430\u0437\u0431\u0438\u0440\u0430\u0435\u0448\u044C \u043C\u0435\u0442\u043E\u0434 \u042F\u043F\u043F\u0438\u043D\u0433\u0430 \u0438 \u0433\u043E\u0442\u043E\u0432\u0438\u0448\u044C\u0441\u044F \u0441\u043D\u044F\u0442\u044C \u0441\u0432\u043E\u0451 \u043F\u0435\u0440\u0432\u043E\u0435 \u0432\u0438\u0434\u0435\u043E",
    bullets: ["Научишься говорить на камеру естественно, без ощущения кринжа и зажатости.", "Освоишь технику, которая помогает снять рилс за 15 минут, а не мучиться над ним весь день.", "Разберёмся, как перестать удалять свои видео и справляться со стыдом перед публикацией.", "Уйдёшь с готовым планом — о чём говорить и какие смыслы доносить через свой контент, чтобы завтра просто включить камеру и снять"]
  }), /*#__PURE__*/React.createElement(DayCard, {
    n: "3",
    date: "31 \u0438\u044E\u043B\u044F",
    headline: "\u0414\u0435\u043D\u044C \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0438.",
    lead: "\u0421\u043D\u0438\u043C\u0430\u0435\u0448\u044C \u0442\u043E \u0441\u0430\u043C\u043E\u0435 \u0432\u0438\u0434\u0435\u043E, \u043A \u043A\u043E\u0442\u043E\u0440\u043E\u043C\u0443 \u0433\u043E\u0442\u043E\u0432\u0438\u043B\u0441\u044F(-\u043B\u0430\u0441\u044C) \u043D\u0430 \u0432\u0442\u043E\u0440\u043E\u0439 \u0434\u0435\u043D\u044C, \u0438 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u0448\u044C \u0435\u0433\u043E \u0432 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438. \u041F\u043E\u043B\u0443\u0447\u0430\u0435\u0448\u044C \u043E\u0431\u0440\u0430\u0442\u043D\u0443\u044E \u0441\u0432\u044F\u0437\u044C \u043E\u0442 \u043A\u043E\u043C\u0430\u043D\u0434\u044B."
  }), /*#__PURE__*/React.createElement(DayCard, {
    n: "4",
    date: "1 \u0430\u0432\u0433\u0443\u0441\u0442\u0430",
    tag: "\u0413\u041B\u0410\u0412\u041D\u042B\u0419 \u042D\u0424\u0418\u0420",
    hero: true,
    headline: "\u0411\u043E\u043B\u044C\u0448\u0430\u044F \u0418\u0433\u0440\u0430.",
    lead: "\u041A\u0430\u043A \u043F\u0440\u0435\u0432\u0440\u0430\u0442\u0438\u0442\u044C \u0431\u043B\u043E\u0433 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0443, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u043F\u0440\u0438\u0432\u043E\u0434\u0438\u0442 \u043B\u044E\u0434\u0435\u0439, \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u043D\u044C\u0433\u0438",
    bullets: ["Узнаешь, как построить систему ведения блога, чтобы не выгорать и не бросать через месяц.", "Поймёшь, как превратить разговорные рилсы в блог, который собирает вокруг тебя своих людей, привлекает клиентов, открывает сотрудничества с брендами и новые возможности", "Получишь специальные условия на участие в моей флагманской 40-дневной программе «Большая Игра»."]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 44
    }
  }, /*#__PURE__*/React.createElement(Cta, null))), /*#__PURE__*/React.createElement(Section, {
    id: "offer",
    style: {
      background: "var(--sand)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--fs-h1)",
      margin: "0 0 12px",
      textAlign: "center"
    }
  }, "\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u044D\u0442\u043E \u0441\u0442\u043E\u0438\u0442"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 auto 28px",
      fontFamily: "var(--font-script)",
      fontSize: "var(--fs-script-lg)",
      color: "var(--coral)",
      lineHeight: 1,
      textAlign: "center"
    }
  }, "\u0421\u0442\u0430\u0440\u0442\u043E\u0432\u044B\u0439 \u043D\u0430\u0431\u043E\u0440 \u0438\u0433\u0440\u043E\u043A\u0430 \u0434\u043B\u044F \u043F\u0435\u0440\u0432\u044B\u0445 50 \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: 18,
      marginBottom: 40
    }
  }, bonuses.map((x, i) => /*#__PURE__*/React.createElement(TiltCard, {
    key: i,
    tone: "paper",
    tilt: i % 2 ? "var(--tilt-alt)" : "var(--tilt)",
    style: {
      padding: "28px 26px 30px"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: x.b ? "0 0 14px" : 0,
      fontFamily: "var(--font-body)",
      fontWeight: 800,
      fontSize: "var(--fs-lead)",
      lineHeight: 1.25,
      letterSpacing: "-0.01em",
      color: "var(--ink)"
    }
  }, x.t), x.b && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--ink-70)",
      fontSize: "var(--fs-body)",
      lineHeight: 1.55
    }
  }, x.b)))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--ink)",
      color: "var(--paper)",
      borderRadius: "var(--r-card)",
      padding: "clamp(24px, 6vw, 44px)",
      display: "flex",
      flexDirection: "column",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(RecIndicator, {
    time: "00:00"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "baseline",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: "var(--fs-hero)",
      lineHeight: 0.9,
      color: "var(--lime)"
    }
  }, "990 \u20BD"))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "rgba(250,250,248,0.85)",
      fontSize: "var(--fs-body)",
      maxWidth: "56ch"
    }
  }, "\u0423\u0447\u0430\u0441\u0442\u0438\u0435 \u0432 \u0440\u0430\u0437\u043C\u0438\u043D\u043A\u0435 \u0441\u0442\u043E\u0438\u0442 990 \u20BD. \u042D\u0442\u043E \u0434\u0435\u0448\u0435\u0432\u043B\u0435, \u0447\u0435\u043C \u043E\u0434\u043D\u0430 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044F \u043F\u043E \u0431\u043B\u043E\u0433\u0443. \u041D\u043E \u0437\u0430 \u0447\u0435\u0442\u044B\u0440\u0435 \u0434\u043D\u044F \u0442\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u0448\u044C \u0442\u0435\u043C\u0443, \u0441\u043D\u0438\u043C\u0435\u0448\u044C \u043F\u0435\u0440\u0432\u044B\u0439 \u0440\u0438\u043B\u0441 \u0438 \u043F\u043E\u0439\u043C\u0451\u0448\u044C, \u043A\u0430\u043A \u0432\u0435\u0441\u0442\u0438 \u0431\u043B\u043E\u0433 \u0434\u0430\u043B\u044C\u0448\u0435."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--paper)",
      fontSize: "var(--fs-lead)",
      fontWeight: 600,
      maxWidth: "56ch"
    }
  }, "\u0412\u043D\u0443\u0442\u0440\u0438 \u0447\u0435\u0442\u044B\u0440\u0435 \u0434\u043D\u044F, \u043C\u0435\u0442\u043E\u0434, \u0442\u0432\u043E\u0451 \u043F\u0435\u0440\u0432\u043E\u0435 \u0432\u0438\u0434\u0435\u043E, \u043E\u0431\u0440\u0430\u0442\u043D\u0430\u044F \u0441\u0432\u044F\u0437\u044C \u043E\u0442 \u043C\u0435\u043D\u044F \u0441 \u043A\u043E\u043C\u0430\u043D\u0434\u043E\u0439 \u0438 \u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u0436\u0438\u0432\u043E\u0439 \u044D\u0444\u0438\u0440."), /*#__PURE__*/React.createElement("div", {
    className: "info-strip",
    style: {
      paddingTop: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      padding: "16px 22px",
      borderRadius: "var(--r-card)",
      background: "rgba(250,250,248,0.1)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-mono-sm)",
      letterSpacing: "var(--ls-mono-wide)",
      color: "rgba(250,250,248,0.6)"
    }
  }, "\u0421\u0422\u0410\u0420\u0422"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "var(--fs-h3)",
      lineHeight: 1,
      color: "var(--paper)"
    }
  }, "29 \u0438\u044E\u043B\u044F")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      padding: "16px 22px",
      borderRadius: "var(--r-card)",
      background: "var(--coral)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-mono-sm)",
      letterSpacing: "var(--ls-mono-wide)",
      color: "rgba(250,250,248,0.85)"
    }
  }, "\u0417\u0410\u041D\u042F\u0422\u041E"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "var(--fs-h3)",
      lineHeight: 1,
      color: "var(--on-accent)"
    }
  }, "30/500 \u043C\u0435\u0441\u0442"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Cta, null)))), /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingTop: "var(--sp-8)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--fs-h1)",
      margin: "0 0 32px",
      textAlign: "center"
    }
  }, "\u0427\u0430\u0441\u0442\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B"), /*#__PURE__*/React.createElement(Accordion, {
    items: faq
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(Cta, null))), /*#__PURE__*/React.createElement(TornEdge, {
    side: "top",
    color: "var(--sand)",
    height: 34,
    style: {
      background: "var(--paper)"
    }
  }), /*#__PURE__*/React.createElement(Section, {
    style: {
      background: "var(--sand)",
      paddingTop: "var(--sp-8)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--fs-h1)",
      margin: "0 0 28px",
      textAlign: "center"
    }
  }, "\u0414\u0430\u043B\u044C\u0448\u0435 \u0440\u0435\u0448\u0430\u0435\u0448\u044C ", /*#__PURE__*/React.createElement(HandCircle, {
    color: "var(--coral)"
  }, "\u0442\u044B")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--measure)",
      margin: "0 auto 36px",
      display: "flex",
      flexDirection: "column",
      gap: 18,
      fontSize: "var(--fs-lead)",
      color: "var(--ink)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "\u042F \u043D\u0435 \u043E\u0431\u0435\u0449\u0430\u044E, \u0447\u0442\u043E \u043F\u043E\u0441\u043B\u0435 \u044D\u0442\u043E\u0433\u043E \u0442\u044B \u0441\u0442\u0430\u043D\u0435\u0448\u044C \u0431\u043B\u043E\u0433\u0435\u0440\u043E\u043C \u0441 \u043C\u0438\u043B\u043B\u0438\u043E\u043D\u043E\u043C \u043F\u043E\u0434\u043F\u0438\u0441\u0447\u0438\u043A\u043E\u0432. \u041E\u0431\u0435\u0449\u0430\u044E, \u0447\u0442\u043E \u0447\u0435\u0440\u0435\u0437 \u0447\u0435\u0442\u044B\u0440\u0435 \u0434\u043D\u044F \u0443 \u0442\u0435\u0431\u044F \u0431\u0443\u0434\u0435\u0442 \u0442\u043E \u0432\u0438\u0434\u0435\u043E, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u0442\u044B \u043E\u0442\u043A\u043B\u0430\u0434\u044B\u0432\u0430\u043B\u0430 \u043C\u0435\u0441\u044F\u0446\u0430\u043C\u0438, \u0438 \u043C\u0435\u0442\u043E\u0434, \u0447\u0442\u043E\u0431\u044B \u0441\u043D\u0438\u043C\u0430\u0442\u044C \u0434\u0430\u043B\u044C\u0448\u0435."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 600
    }
  }, "\u0427\u0435\u0440\u0435\u0437 \u0447\u0435\u0442\u044B\u0440\u0435 \u0434\u043D\u044F \u0442\u044B \u043D\u0435 \u0441\u0442\u0430\u043D\u0435\u0448\u044C \u0434\u0440\u0443\u0433\u0438\u043C \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u043E\u043C. \u041D\u043E \u0441\u0442\u0430\u043D\u0435\u0448\u044C \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u043E\u043C, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u043E\u0442\u043A\u043B\u0430\u0434\u044B\u0432\u0430\u0435\u0442 \u043A\u043D\u043E\u043F\u043A\u0443 \xAB\u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u0442\u044C\xBB. \u0418\u043D\u043E\u0433\u0434\u0430 \u0438\u043C\u0435\u043D\u043D\u043E \u0441 \u043E\u0434\u043D\u043E\u0433\u043E \u0440\u0438\u043B\u0441\u0430 \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442\u0441\u044F \u0441\u043E\u0432\u0441\u0435\u043C \u0434\u0440\u0443\u0433\u0430\u044F \u0436\u0438\u0437\u043D\u044C.")), /*#__PURE__*/React.createElement(Cta, null)), /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: "var(--sp-8) var(--gutter)",
      borderTop: "1px solid var(--hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 16,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "var(--fs-h3)"
    }
  }, "\u0420\u0430\u0437\u043C\u0438\u043D\u043A\u0430"), /*#__PURE__*/React.createElement(Timecode, {
    muted: true
  }, "\xA9 \u041A\u0430\u0440\u0438\u043D\u0430 \u041A\u0430\u0442\u0430\u043B\u0435\u0435\u0432\u0430 \xB7 \u0435\u0434\u0438\u043D\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0447\u0435\u0441\u0442\u043D\u044B\u0439 \u0431\u043B\u043E\u0433\u0435\u0440"))));
}
window.RazminkaLanding = RazminkaLanding;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/razminka/RazminkaLanding.jsx", error: String((e && e.message) || e) }); }

// ui_kits/razminka/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever a design needs an image.
 * You control the slot's shape; it sizes to its container by default. When the search_stock_photos tool
 * is available, prefill the slot by default — write the photo's URL into
 * src (with credit/credit-href); the user can still fill or replace it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The sidecar is a SIBLING of the HTML file that uses this component: the
 * read is a document-relative fetch, and the host resolves the bridge's
 * sidecar writes into the previewed file's directory to match (same
 * contract as design_canvas.jsx). Pages in the same directory share one
 * sidecar; keep slot ids distinct across them.
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          Initial framing baseline: cover | contain.   (default 'cover')
 *                cover starts the image filling the frame (overflow cropped);
 *                contain starts it fully visible (letterboxed). Either way the
 *                user can always pan/scale from there — double-click, or the
 *                Edit control, enters reframe mode (drag to move, scroll or
 *                corner-handles to scale; Escape / click-out commits). The
 *                crop persists alongside the image in the sidecar.
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. Prefill it with a real
 *                photo via search_stock_photos when that tool is available
 *                (set credit/credit-href from the result). A user drop
 *                overrides it; clearing the drop reveals src again.
 *   credit       Attribution text shown as a small overlay at the
 *                bottom-left of the filled slot. REQUIRED whenever src
 *                points at any Unsplash host (images.unsplash.com,
 *                plus.unsplash.com, …): an Unsplash src with no credit
 *                renders an error tile INSTEAD of the photo (Unsplash
 *                terms forbid showing their photos unattributed). Use the
 *                exact form 'Photo by {photographer name} on Unsplash' —
 *                the overlay then links the name to credit-href and
 *                'Unsplash' to the Unsplash homepage, and links back to
 *                unsplash.com automatically get the required utm referral
 *                params appended at render time. The credit belongs to
 *                the src image, so it only shows while src is what's
 *                displayed — a user-dropped image hides it.
 *   credit-href  Link for the photographer's name in the credit overlay
 *                (their Unsplash profile URL from the stock-photo search
 *                results). http(s) URLs only — anything else renders the
 *                name as plain text.
 *
 * Sizing: the slot fills its container by default (width/height 100%).
 * Put it in a sized wrapper — absolutely positioned, a grid cell, a fixed
 * frame — and it takes exactly that box. When the parent's height is
 * indefinite (ordinary flow), it falls back to full width at a 3:2 aspect
 * ratio instead of collapsing. In a shrink-to-fit parent (a float,
 * width:max-content, an unsized absolute wrapper), percentages have
 * nothing to resolve against — size the slot or its wrapper explicitly
 * there. For a fixed-size slot, set
 * width/height on the element itself (inline style), which overrides the
 * default. When
 * layering content above a slot (full-bleed layouts), make the overlay
 * click-through — pointer-events: none on scrims/text plates, re-enabled
 * on interactive children — so the slot's hover controls stay reachable.
 * Keep the slot's bottom-left corner visually clear as well: the credit
 * overlay renders there, and a dark fade or text plate covering it hides
 * the attribution Unsplash's terms require — end the fade above that
 * corner, or keep it nearly transparent where the credit sits.
 *
 * Usage:
 *   <div style="position:relative;width:100%;height:100%">      <!-- full-bleed: -->
 *     <image-slot id="bg" shape="rect"></image-slot>            <!-- fills the wrapper -->
 *   </div>
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';

  // Unsplash terms require visible attribution wherever their photos
  // display, and every link back to unsplash.com must carry utm referral
  // params. Two render-time rules enforce that here:
  //  - an Unsplash-src slot with NO credit attribute renders an error
  //    tile INSTEAD of the photo (an uncredited Unsplash photo on screen
  //    is itself the terms violation, so it never renders bare);
  //  - rendered credit links pointing at unsplash.com get the referral
  //    params appended when absent (credit-href values live in page
  //    content that can't be edited after the fact).
  // Keep the utm_source value in sync with UTM_SOURCE in
  // platform/web-agent/unsplash.ts — this file is a project-local
  // artifact and cannot import it (equality is pinned by tests).
  const UNSPLASH_HOMEPAGE_HREF = 'https://unsplash.com/?utm_source=claude_design&utm_medium=referral';
  // Host rule mirrors the hotlink validator that admits Unsplash srcs into
  // pages in the first place (cdn$ in unsplash.ts: apex or any subdomain)
  // — Unsplash+ results serve from plus.unsplash.com, not just images.*,
  // and an admitted-but-uncredited photo must error whatever unsplash
  // host it rides on.
  // Trailing-dot FQDNs (images.unsplash.com.) are the same host to the
  // browser but would miss the regex — strip one dot so the check fails
  // CLOSED (unrecognized-but-real Unsplash srcs must error, not render).
  const isUnsplashHost = u => {
    try {
      return /(^|\.)unsplash\.com$/.test(new URL(u, document.baseURI).hostname.replace(/\.$/, ''));
    } catch {
      return false;
    }
  };
  // Render-time referral normalization for links back to Unsplash:
  // appends utm_source/utm_medium when absent, preserves every existing
  // query param, never overwrites an existing utm_source, and passes
  // non-Unsplash URLs through untouched. Input is an ABSOLUTE validated
  // http(s) URL (the credit render funnel resolves + validates first).
  const withReferral = href => {
    try {
      const u = new URL(href);
      if (!/(^|\.)unsplash\.com$/.test(u.hostname.replace(/\.$/, ''))) {
        return href;
      }
      if (!u.searchParams.has('utm_source')) {
        u.searchParams.set('utm_source', 'claude_design');
      }
      if (!u.searchParams.has('utm_medium')) {
        u.searchParams.set('utm_medium', 'referral');
      }
      return u.toString();
    } catch (e) {
      return href;
    }
  };
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  // Unload-time flush: save()'s serialization defers a mid-RTT re-fire to a
  // .then that never runs in an unloading document, silently dropping a
  // pagehide commit. Post the current slots immediately instead — content
  // is a superset snapshot of any in-flight save's, the write is a
  // whole-file last-writer-wins replace, and postMessage FIFO delivers it
  // to the host after the in-flight one, so a backend-side reorder at
  // worst reproduces the dropped-commit outcome this flush improves on.
  // Guarded on the initial sidecar read: pre-hydration slots can miss
  // other slots' persisted entries, and flushing it would clobber them —
  // that narrow case stays best-effort (the in-memory merge in load()
  // cannot happen in an unloading document anyway).
  function flushNow() {
    if (!loaded) return;
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    try {
      Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {});
    } catch (e) {}
  }
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet =
  // Fill the container by default: slots are usually placed inside a
  // sized wrapper (a hero frame, a grid cell, an inset:0 layer) and are
  // expected to take that box — a fixed intrinsic size would render as
  // a small tile in the corner of a full-bleed wrapper instead.
  // aspect-ratio is the companion fallback that keeps a bare slot
  // visible when the parent's height is indefinite: height:100%
  // resolves to auto there, and the ratio then derives height from
  // width instead of letting the slot collapse to zero height.
  // Explicit width/height on the element override all of this.
  ':host{display:block;position:relative;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;color:rgba(0,0,0,.55);' + '  width:100%;height:100%;aspect-ratio:3/2}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(0,0,0,.04)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  // popover=manual promotes the spill to the top layer on reframe, so it is
  // not clipped by any overflow:hidden / clip-path / scroll-container
  // ancestor (a plain z-index can't escape overflow clipping). UA popover
  // defaults (inset:0;margin:auto) are reset; _applyView sets viewport px.
  '.spill{position:fixed;margin:0;inset:auto;border:0;padding:0;background:transparent;' + '  overflow:visible;transform:translate(-50%,-50%);z-index:1;cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px;text-decoration-color:rgba(0,0,0,.25)}' + '.empty:hover .sub u{color:rgba(0,0,0,.75);text-decoration-color:currentColor}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed rgba(0,0,0,.25);' + '  transition:border-color .12s}' + ':host([data-over]) .ring{border-color:#c96442}' + ':host([data-filled]) .ring{display:none}' +
  // Controls overlay INSIDE the frame, pinned to the top-right corner, so
  // a full-bleed slot in an overflow:hidden container still shows them
  // (the old below-mask placement got clipped). Credit sits bottom-left,
  // so top-right avoids collision. The blurred pill background keeps them
  // legible over the image.
  // The UA [popover] base rule styles the element in EVERY state (only
  // display:none is gated on :not(:popover-open), and the display:flex
  // below overrides that) — so the UA resets live HERE, like .spill's,
  // or the ordinary hover-state strip renders as a bordered Canvas box
  // centered by margin:auto. inset:auto precedes top/right (shorthand).
  '.ctl{position:absolute;inset:auto;top:8px;right:8px;margin:0;border:0;padding:0;' + '  background:transparent;overflow:visible;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' +
  // While reframing, the spill owns the top layer and would swallow every
  // click on the in-frame controls. Promoting .ctl into the top layer
  // ABOVE the spill (shown after it — later popovers stack higher) keeps
  // Edit-as-toggle and Replace clickable mid-reframe. _applyView pins it
  // to the frame's top-right in viewport px (translateX(-100%)
  // right-aligns against the computed left edge); inset:auto clears the
  // base rule's top/right so the inline left/top position it alone.
  '.ctl:popover-open{position:fixed;inset:auto;transform:translateX(-100%)}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}' +
  // Replacement in flight: after a src swap the browser keeps painting
  // the PREVIOUS image until the new one decodes, so a Replace would
  // flash the old photo and then pop. Hide the stale frame (visibility,
  // not display — _applyView geometry still applies) and spin until the
  // new image reports in (load/error clears data-swapping).
  ':host([data-swapping]) .frame img{visibility:hidden}' + '.loading{position:absolute;inset:0;display:none;align-items:center;' + '  justify-content:center;pointer-events:none}' + ':host([data-swapping]) .loading{display:flex}' + '.loading::after{content:"";width:22px;height:22px;border-radius:50%;' + '  border:2px solid rgba(0,0,0,.12);border-top-color:rgba(0,0,0,.45);' + '  animation:om-slot-spin .7s linear infinite}' + '@keyframes om-slot-spin{to{transform:rotate(360deg)}}' +
  // Reduced motion: the static two-tone ring still reads as "working".
  '@media (prefers-reduced-motion:reduce){.loading::after{animation:none}}' + '.credit{position:absolute;left:6px;bottom:6px;max-width:calc(100% - 12px);display:none;' + '  padding:3px 7px;border-radius:5px;background:rgba(0,0,0,.55);color:#fff;' + '  font:10px/1.2 system-ui,-apple-system,sans-serif;text-decoration:none;' + '  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;backdrop-filter:blur(6px)}' +
  // The credit is a SPAN holding one or two <a>s (Unsplash's prescribed
  // form links the photographer AND Unsplash) — anchors style inline so
  // the overlay reads as one line of text.
  '.credit a{color:inherit;text-decoration:none}' + '.credit a:hover,.credit a:focus-visible{text-decoration:underline}' + ':host([data-filled][data-credit]) .credit{display:block}' +
  // Exports must ship JUST the image — no hover controls, no credit chip
  // (the host marks <html data-om-exporting> for the capture window; the
  // page-level hide script can't reach shadow DOM, this rule can).
  ':host-context([data-om-exporting]) .ctl,' + ':host-context([data-om-exporting]) .credit{display:none !important}' +
  // No export-window mask rules here on purpose: the export capture
  // releases the replacement mask by REMOVING data-swapping (the
  // shadow-root pass in pages/export/shared.ts HIDE_EXPORT_CHROME_SCRIPT)
  // — attribute removal works in every engine (:host-context is
  // Chromium-only), is scoped by construction to slots actually
  // mid-swap, and hides the spinner through the same gate. A masked img
  // would otherwise be silently dropped from PPTX decks (the capture
  // walk skips visibility:hidden imgs).
  // Attribution error tile: REPLACES the photo when an Unsplash src has
  // no credit attribute — rendering the photo uncredited is the terms
  // violation, so the photo must not appear at all.
  // Calm and neutral on purpose (review feedback): the tile informs the
  // user; the fix instructions are machine-facing (usage docblock, tool
  // description, and the turn-end scan's bounce copy name the attributes
  // for the agent).
  '.attr-error{position:absolute;inset:0;display:none;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  background:#f2f1ef;color:#6e6c66;user-select:none;' + '  font:13px/1.45 system-ui,-apple-system,sans-serif}' + '.attr-error svg{opacity:.55}' + '.attr-error .cap{max-width:92%;font-weight:500;letter-spacing:.01em}' + ':host([data-attribution-error]) .attr-error{display:flex}' + ':host([data-attribution-error]) .ring{display:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  const warnIcon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>' + '<path d="M12 9v4"/><path d="M12 17h.01"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'placeholder', 'src', 'id', 'credit', 'credit-href'];
    }

    /** Duplicate-slide hook (called by deck-stage, see its
     *  _remintDuplicateIds): copy this id's stored image, if any, under a
     *  freshly minted key and return that key — so a duplicated slide's
     *  slot keeps its dropped photo instead of reverting to the
     *  placeholder. 'isFree' is the caller's uniqueness check (document
     *  ids); candidates must ALSO be unused in the sidecar, which can
     *  hold keys from other pages sharing the project root. (An EMPTY
     *  slot on another page leaves no sidecar entry, so its id is not
     *  detectable here — a minted key can collide with it and that slot
     *  would show this photo. Same blast radius as two pages reusing an
     *  id by hand, which the shared sidecar already permits.) Returns null
     *  when no id could be minted (caller strips the id, today's
     *  behavior). */
    static cloneSlot(fromId, isFree) {
      if (typeof fromId !== 'string' || !fromId) return null;
      // Pre-hydration the store can't veto candidates or source the copy
      // — degrade to the strip (today's behavior) rather than mint
      // against keys we can't see yet. Any rendered (= droppable) slot
      // means load() has already settled.
      if (!loaded) return null;
      const stem = fromId.replace(/-\d+$/, '') || fromId;
      for (let n = 2; n < 100; n++) {
        const toId = stem + '-' + n;
        if (toId === fromId) continue;
        if (slots[toId] !== undefined) {
          // Reuse a key holding this exact value (bytes AND crop) if no
          // live element here owns it — a duplicate op the host refused
          // after minting leaves such a key behind, and reusing keeps
          // refused retries from accumulating one orphaned copy per
          // attempt. Full equality (not just bytes) so a byte-identical
          // key another PAGE owns with its own crop is stepped past, not
          // adopted or rewritten. (Entries without .u never match.)
          const prev = getSlot(toId);
          const cur = getSlot(fromId);
          if (!(prev && cur && prev.u && prev.u === cur.u && prev.s === cur.s && prev.x === cur.x && prev.y === cur.y && (typeof isFree !== 'function' || isFree(toId)))) continue;
          return toId;
        }
        if (typeof isFree === 'function' && !isFree(toId)) continue;
        const v = getSlot(fromId);
        if (v) setSlot(toId, Object.assign({}, v));
        return toId;
      }
      return null;
    }
    constructor() {
      super();
      // clonable: rail thumbnails deep-clone slides and carry this shadow
      // along; reuse an already-cloned root so upgrade-after-clone works.
      // (Deliberately NOT serializable — a getHTML consumer would embed
      // multi-MB sidecar data-URLs into serialized page HTML.)
      const root = this.shadowRoot || this.attachShadow({
        mode: 'open',
        clonable: true
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="attr-error" part="attribution-error">' + warnIcon + '    <div class="cap">This photo needs attribution</div></div>' + '  <div class="loading" part="loading"></div>' + '  <div class="ring" part="ring"></div>' + '</div>' +
      // Outside .frame, like .spill/.ctl — the frame's overflow:hidden +
      // border-radius/clip-path would cut the credit off on circle/pill/mask.
      // A SPAN, not an <a>: the prescribed Unsplash credit holds two links
      // (photographer + Unsplash), built per-render in _render().
      '<span class="credit" part="credit"></span>' + '<div class="spill" popover="manual" data-dc-edit-transparent>' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' +
      // data-dc-edit-transparent: the DC editor's edit-mode picker lets
      // clicks through for chrome marked with it (EDIT_TRANSPARENT_SEL)
      // — without it, Replace/Edit clicks in Edit mode are swallowed by
      // element selection and the controls look dead.
      '<div class="ctl" popover="manual" data-dc-edit-transparent><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="edit" title="Reframe image">Edit</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ctl = root.querySelector('.ctl');
      this._credit = root.querySelector('.credit');
      this._attrError = root.querySelector('.attr-error');
      // Credit clicks open the link, not browse/reframe.
      this._credit.addEventListener('click', e => e.stopPropagation());
      this._credit.addEventListener('dblclick', e => e.stopPropagation());
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      // Encode-in-flight marker (the owning _ingest generation): while set,
      // the same-src "nothing in flight" clear in _render must not fire —
      // the stored value still points at the OLD image until the encode
      // lands, so that clear would unmask the stale image mid-replace.
      this._swapGen = 0;
      // Render-owned swap in flight: set when _render assigns a new src,
      // cleared only by the img's own load/error (or the empty branch).
      // img.complete CANNOT stand in for this — setting src only QUEUES
      // the current-request swap (a microtask), so synchronously after an
      // assignment, complete still reports the OLD settled request. The
      // pick path does exactly that: the host sets src, credit, and
      // credit-href back-to-back in one task, and renders #2/#3 would
      // read the stale complete === true and drop the mask one render
      // after it was set.
      this._loadPending = false;
      // See _render's empty branch: a transient attribution-error wipe of a
      // showing image must make the follow-up render a replacement (spinner),
      // not a first fill (blank frame).
      this._hidShowing = false;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        // The hidden controls are opacity-0 but still tabbable — without
        // this gate a keyboard user could drive them on a read-only share
        // link (mirrors the dblclick handler's editable gate).
        if (!this.hasAttribute('data-editable')) return;
        if (act === 'replace') {
          this._exitReframe(true);
          // Host-owned picker (Unsplash modal; it also offers local import).
          this.dispatchEvent(new CustomEvent('image-slot:pick', {
            bubbles: true,
            composed: true,
            detail: {
              id: this.id || null
            }
          }));
        }
        if (act === 'edit') {
          if (!this._reframes()) return;
          if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      // load/error also release the replacement-in-flight mask (via the
      // single discipline in _releaseMask): the swap is only revealed once
      // the new image can actually paint (on error the frame shows its
      // background, same as a fresh slot with a broken src).
      this._img.addEventListener('load', () => {
        this._loadPending = false;
        this._releaseMask(true);
        this._applyView();
      });
      this._img.addEventListener('error', () => {
        this._loadPending = false;
        this._releaseMask(true);
      });
      // Gated only on editable — any filled slot can be repositioned/scaled,
      // regardless of fit. Share links (no writeFile) stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
          const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // The host may inject window.omelette.writeFile AFTER the first render;
      // re-render on hover so the editable-gated controls reliably appear.
      this.addEventListener('pointerenter', this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('pointerenter', this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      // commit=false: a disconnect is not a user intent — committing here
      // would persist whatever half-finished drag a React remount or DOM
      // splice happened to interrupt. Deliberate exits commit on their own
      // paths (Escape/click-out/toggle), and unloads commit via pagehide.
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._signalReframe(true);
      // Best-effort commit when the document unloads mid-reframe (a host
      // navigation racing the enter signal, a manual reload, tab close):
      // the sidecar write rides the host bridge, which outlives this
      // document, so the crop survives even though the mode dies with the
      // DOM. Held on the instance so _exitReframe detaches exactly what
      // was attached.
      this._pagehide = () => {
        this._exitReframe(true);
        flushNow();
      };
      window.addEventListener('pagehide', this._pagehide);
      // Promote spill to the top layer, then keep it pinned over the frame:
      // scroll/resize cover the common cases, and a per-frame rect check
      // catches layout shifts that fire neither (an image above finishing
      // load, streamed DOM pushing the slot down, an ancestor transform
      // change) so the overlay can't detach from the frame.
      try {
        this._spill.showPopover();
      } catch {}
      // After the spill, so the controls stack above it in the top layer.
      try {
        this._ctl.showPopover();
      } catch {}
      this._reposition = () => {
        if (this.hasAttribute('data-reframe')) this._applyView();
      };
      window.addEventListener('scroll', this._reposition, true);
      window.addEventListener('resize', this._reposition);
      this._lastRect = '';
      this._watch = () => {
        if (!this.hasAttribute('data-reframe')) return;
        const r = this.getBoundingClientRect();
        const key = r.left + ',' + r.top + ',' + r.width + ',' + r.height;
        if (key !== this._lastRect) {
          this._lastRect = key;
          this._applyView();
        }
        this._watchId = requestAnimationFrame(this._watch);
      };
      this._watchId = requestAnimationFrame(this._watch);
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (this._reposition) {
        window.removeEventListener('scroll', this._reposition, true);
        window.removeEventListener('resize', this._reposition);
        this._reposition = null;
      }
      if (this._watchId) {
        cancelAnimationFrame(this._watchId);
        this._watchId = 0;
      }
      if (this._pagehide) {
        window.removeEventListener('pagehide', this._pagehide);
        this._pagehide = null;
      }
      try {
        this._spill.hidePopover();
      } catch {}
      try {
        this._ctl.hidePopover();
      } catch {}
      this._ctl.style.left = '';
      this._ctl.style.top = '';
      if (commit) this._commitView();
      this._signalReframe(false);
    }

    // Reframe state lives only in this DOM until commit, invisible to the
    // host's dirty signals — announce enter/exit so the host can hold
    // auto-reloads for exactly the gesture (the guest bundle forwards
    // image-slot:reframe to the host as imageSlotReframe). Dispatched on
    // the element (composed, so it escapes shadow roots) while connected;
    // a disconnected exit (disconnectedCallback) falls back to document so
    // the host still hears it.
    _signalReframe(active) {
      const target = this.isConnected ? this : document;
      target.dispatchEvent(new CustomEvent('image-slot:reframe', {
        bubbles: true,
        composed: true,
        detail: {
          active: active,
          id: this.id || null
        }
      }));
    }

    // Public: host's "Import from computer" calls this to run local browse.
    openFilePicker() {
      this._exitReframe(true);
      this._input.click();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      // Replacing a shown image: surface the swap through the encode too,
      // not just the decode — otherwise the old photo sits there with no
      // feedback while the canvas re-encode runs. An empty slot keeps its
      // placeholder (no spinner) until the encode lands, as before.
      // _swapGen guards the mask against re-renders DURING the encode
      // (pointerenter, ResizeObserver, another slot's store write): the
      // stored value still resolves to the old image there, so _render's
      // same-src clear would otherwise unmask it mid-replace.
      if (this.hasAttribute('data-filled')) {
        this.setAttribute('data-swapping', '');
        this._swapGen = gen;
      }
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        // Clear BEFORE setSlot: its synchronous re-render must see no
        // pending encode, so a byte-identical re-upload (same data URL, no
        // load event coming) still clears the mask via the complete branch.
        this._swapGen = 0;
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._swapGen = 0;
        // Reveal the kept old image — unless another replacement (a
        // remote pick's src swap) is still in flight, in which case the
        // mask stays until THAT image settles (its load/error releases).
        this._releaseMask();
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is available on any filled slot — the user can
    // always reposition/scale. `fit` only sets the initial baseline (see
    // _geom): contain starts fully-visible, cover starts frame-filling.
    _reframes() {
      return this.hasAttribute('data-filled');
    }

    // The single release discipline for the replacement-in-flight mask
    // (data-swapping). The mask comes off only when BOTH hold:
    //  - no encode is pending (_swapGen) — mid-encode the stored value
    //    still resolves to the old image, so any reveal paints it;
    //  - the frame img has settled on its current src — an unsettled src
    //    means some replacement is still in flight (e.g. a remote pick),
    //    whoever started it, and revealing would paint the previous
    //    frame. The load/error listeners pass settled=true (the event IS
    //    the settlement signal, per spec complete is true by then);
    //    other callers rely on the complete flag (covers loaded AND
    //    failed).
    // Every release path funnels through here EXCEPT _render's empty
    // branch (the img is being cleared — nothing will ever settle).
    _releaseMask(settled) {
      if (!this._swapGen && !this._loadPending && (settled || this._img.complete)) {
        this.removeAttribute('data-swapping');
      }
    }

    // Baseline geometry, shared by clamp/apply/resize. `base` is the scale at
    // view-scale s=1: cover = fill the frame (overflow on the looser axis),
    // contain = fit fully inside (letterboxed). Zooming a contain image past
    // s where it overflows naturally becomes a crop. Null until the img has
    // loaded (naturalWidth is 0 before that) or when the slot has no layout
    // box — ResizeObserver fires with a 0×0 rect under display:none, and
    // clamping against a degenerate 1×1 frame would silently pull the stored
    // pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
      const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
      return {
        iw,
        ih,
        fw,
        fh,
        base
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      // Top-layer controls: pin to the frame's top-right in viewport px
      // (the same 8px inset as the in-frame layout; unscaled — top-layer UI
      // reads as chrome, not page content). BEFORE the geometry branch:
      // placement needs only the frame rect, and a not-yet-loaded or broken
      // src must not leave the promoted strip floating unpositioned. Gated
      // on the popover actually being open: without the Popover API,
      // showPopover() threw (swallowed in _enterReframe), .ctl stays in
      // its in-frame absolute layout, and viewport-px coordinates would
      // shove it off-frame — and matches(':popover-open') itself throws
      // there (unknown pseudo-class), hence the try/catch.
      if (this.hasAttribute('data-reframe')) {
        let onTop = false;
        try {
          onTop = this._ctl.matches(':popover-open');
        } catch {}
        if (onTop) {
          const r = this.getBoundingClientRect();
          this._ctl.style.left = r.right - 8 + 'px';
          this._ctl.style.top = r.top + 8 + 'px';
        }
      }
      if (!g) {
        // Dimensions not known yet (before img load) — centered fit so there
        // is no flash of an unpositioned image before the geometry lands.
        const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = contain ? 'contain' : 'cover';
        return;
      }
      // Baseline (cover-fill or contain-fit) × view scale. Width/height and
      // left/top are all frame-% — depends only on the frame aspect ratio, so
      // a responsive resize keeps the same crop. The spill layer mirrors the
      // same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      if (this.hasAttribute('data-reframe')) {
        // Top-layer spill: position in viewport px over the frame. The top
        // layer escapes ancestor transforms entirely, so EVERY term must be
        // in viewport units: getBoundingClientRect gives the frame's scaled
        // origin AND size, and the rect/layout ratio rescales the ghost —
        // sizing from layout px alone renders it 1/scale too large under a
        // scaled deck slide. Inner ghost + handles stay box-relative.
        const r = this.getBoundingClientRect();
        const sx = g.fw ? r.width / g.fw : 1;
        const sy = g.fh ? r.height / g.fh : 1;
        this._spill.style.width = g.iw * k * sx + 'px';
        this._spill.style.height = g.ih * k * sy + 'px';
        this._spill.style.left = r.left + (50 + this._view.x) / 100 * r.width + 'px';
        this._spill.style.top = r.top + (50 + this._view.y) / 100 * r.height + 'px';
      }
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      // An Unsplash src with no credit attribute must NOT render — showing
      // the photo uncredited is the Unsplash-terms violation itself. The
      // error tile replaces the photo until the credit is written. A
      // user-dropped image is the user's own content and always renders.
      // Trimmed: credit is agent/user-editable content, and a whitespace-
      // only value must count as missing — otherwise it would suppress the
      // error tile AND render an empty credit box (no text, no links),
      // exactly the unattributed state this gate exists to prevent.
      const credit = (this.getAttribute('credit') || '').trim();
      const attrError = !!(!credit && !this._userUrl && srcAttr && isUnsplashHost(srcAttr));
      this.toggleAttribute('data-attribution-error', attrError);
      if (url && !attrError) {
        const prev = this._img.getAttribute('src');
        if (prev !== url) {
          // Replacing an already-shown image: mark the swap BEFORE setting
          // src so the stale frame is never revealed (see the data-swapping
          // stylesheet rules). First fill (prev empty) keeps the existing
          // placeholder-until-load behavior — no spinner. _hidShowing
          // covers the pick path's transient attribution-error wipe: prev
          // is gone, but an image WAS showing, so this is a replacement.
          if (prev || this._hidShowing) this.setAttribute('data-swapping', '');
          // Mark the swap BEFORE assigning src: complete keeps reporting
          // the old settled request until the browser's
          // update-the-image-data microtask runs, so same-task re-renders
          // (the pick path's credit/credit-href setAttributes) need this
          // flag, not complete, to know a load is in flight.
          this._loadPending = true;
          this._img.src = url;
          this._ghost.src = url;
        } else {
          // Same-src re-render — release if settled, so an ingest-set
          // spinner can't stick after a byte-identical re-upload (same
          // data URL, no further load event ever fires).
          this._releaseMask();
        }
        this._hidShowing = false;
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this.removeAttribute('data-swapping');
        // The src is being removed — no load/error will ever fire for it.
        this._loadPending = false;
        // A transient attribution-error wipe of a showing image happens on
        // the pick path: the host sets src one setAttribute before credit,
        // so render N hides the old image (attrError) and render N+1
        // restores a URL. Remember the wipe so that restore renders as a
        // replacement (spinner), not a first fill (blank frame).
        this._hidShowing = attrError && !!this._img.getAttribute('src');
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        // The error tile owns the blocked-photo state; .empty stays for
        // the genuinely-empty slot.
        this._empty.style.display = attrError ? 'none' : 'flex';
        this.removeAttribute('data-filled');
      }

      // Credit belongs to the author src, so a user drop hides it.
      // textContent + the http(s)-only funnel keep external strings inert.
      const showCredit = !!(url && credit && !this._userUrl && !attrError);
      this._credit.textContent = '';
      if (showCredit) {
        // Validate once (resolved against the document, http(s) only),
        // then append the terms-required utm referral params to links
        // that point back at unsplash.com.
        let href = '';
        const rawHref = this.getAttribute('credit-href') || '';
        if (rawHref) {
          try {
            const u = new URL(rawHref, document.baseURI);
            if (u.protocol === 'http:' || u.protocol === 'https:') {
              href = withReferral(u.href);
            }
          } catch {}
        }
        const mkLink = (text, linkHref) => {
          const a = document.createElement('a');
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener noreferrer');
          a.setAttribute('href', linkHref);
          a.textContent = text;
          return a;
        };
        // Unsplash's prescribed credit is TWO links — the photographer's
        // name to their profile (credit-href) and 'Unsplash' to the
        // homepage. Render that split whenever the text has the canonical
        // shape; other text keeps the legacy single-link rendering.
        const m = /^Photo by (.+) on Unsplash$/.exec(credit);
        if (m) {
          this._credit.appendChild(document.createTextNode('Photo by '));
          this._credit.appendChild(href ? mkLink(m[1], href) : document.createTextNode(m[1]));
          this._credit.appendChild(document.createTextNode(' on '));
          this._credit.appendChild(mkLink('Unsplash', UNSPLASH_HOMEPAGE_HREF));
        } else if (href) {
          this._credit.appendChild(mkLink(credit, href));
        } else {
          this._credit.textContent = credit;
        }
      }
      this.toggleAttribute('data-credit', showCredit);
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/razminka/image-slot.js", error: String((e && e.message) || e) }); }

__ds_ns.HandCircle = __ds_scope.HandCircle;

__ds_ns.ScriptNote = __ds_scope.ScriptNote;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.TapedPhoto = __ds_scope.TapedPhoto;

__ds_ns.TornEdge = __ds_scope.TornEdge;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.OfferCard = __ds_scope.OfferCard;

__ds_ns.TiltCard = __ds_scope.TiltCard;

__ds_ns.HighlightMark = __ds_scope.HighlightMark;

__ds_ns.RecIndicator = __ds_scope.RecIndicator;

__ds_ns.SubtitleQuote = __ds_scope.SubtitleQuote;

__ds_ns.Timecode = __ds_scope.Timecode;

__ds_ns.Timeline = __ds_scope.Timeline;

__ds_ns.Viewfinder = __ds_scope.Viewfinder;

})();
