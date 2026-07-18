/* global React, ReactDOM */
(function(){
const useState = React.useState, useEffect = React.useEffect, useRef = React.useRef;

// TODO: заменить на реальный Google Apps Script Web App URL (см. docs/leads-setup.md)
const LEADS_WEBHOOK_URL = "https://script.google.com/macros/s/REPLACE_WITH_SCRIPT_ID/exec";
// TODO: заменить на реальный адрес, куда вести человека после отправки формы
const REDIRECT_URL = "https://example.com/thank-you";

const COUNTRIES = [
  { code: "RU", dial: "7", name: "Россия", len: 10 },
  { code: "KZ", dial: "7", name: "Казахстан", len: 10 },
  { code: "UA", dial: "380", name: "Украина", len: 9 },
  { code: "BY", dial: "375", name: "Беларусь", len: 9 },
  { code: "US", dial: "1", name: "США", len: 10 },
  { code: "CA", dial: "1", name: "Канада", len: 10 },
  { code: "GB", dial: "44", name: "Великобритания", len: 10 },
  { code: "DE", dial: "49", name: "Германия", len: 10 },
  { code: "FR", dial: "33", name: "Франция", len: 9 },
  { code: "ES", dial: "34", name: "Испания", len: 9 },
  { code: "IT", dial: "39", name: "Италия", len: 10 },
  { code: "PL", dial: "48", name: "Польша", len: 9 },
  { code: "TR", dial: "90", name: "Турция", len: 10 },
  { code: "AE", dial: "971", name: "ОАЭ", len: 9 },
  { code: "IL", dial: "972", name: "Израиль", len: 9 },
  { code: "GE", dial: "995", name: "Грузия", len: 9 },
  { code: "AM", dial: "374", name: "Армения", len: 8 },
  { code: "AZ", dial: "994", name: "Азербайджан", len: 9 },
  { code: "UZ", dial: "998", name: "Узбекистан", len: 9 },
  { code: "KG", dial: "996", name: "Киргизия", len: 9 },
  { code: "LV", dial: "371", name: "Латвия", len: 8 },
  { code: "LT", dial: "370", name: "Литва", len: 8 },
  { code: "EE", dial: "372", name: "Эстония", len: 8 },
  { code: "MD", dial: "373", name: "Молдова", len: 8 },
  { code: "CY", dial: "357", name: "Кипр", len: 8 },
  { code: "TH", dial: "66", name: "Таиланд", len: 9 },
  { code: "CN", dial: "86", name: "Китай", len: 11 },
  { code: "IN", dial: "91", name: "Индия", len: 10 },
  { code: "BR", dial: "55", name: "Бразилия", len: 11 },
  { code: "AU", dial: "61", name: "Австралия", len: 9 }
];

function formatPhone(digits) {
  const groups = [];
  let rest = digits;
  const sizes = [3, 3, 2, 2];
  for (const s of sizes) {
    if (!rest.length) break;
    groups.push(rest.slice(0, s));
    rest = rest.slice(s);
  }
  if (rest.length) groups.push(rest);
  return groups.join(" ");
}

function detectCountryFromDigits(raw) {
  const digits = raw.replace(/\D/g, "");
  if (!digits) return null;
  const sorted = [...COUNTRIES].sort((a, b) => b.dial.length - a.dial.length);
  return sorted.find(c => digits.startsWith(c.dial)) || null;
}

function CountrySelect({ country, setCountry }) {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const ref = useRef(null);
  useEffect(() => {
    function onDoc(e) { if (ref.current && !ref.current.contains(e.target)) setOpen(false); }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);
  const filtered = COUNTRIES.filter(c => c.name.toLowerCase().includes(q.toLowerCase()) || c.dial.includes(q));
  return React.createElement("div", { ref, style: { position: "relative", flexShrink: 0 } },
    React.createElement("button", { type: "button", onClick: () => setOpen(o => !o), style: { display: "flex", alignItems: "center", gap: 6, height: "100%", padding: "0 12px", background: "var(--sand)", border: "1px solid var(--hairline)", borderRight: "none", borderRadius: "var(--r-input) 0 0 var(--r-input)", fontFamily: "var(--font-mono)", fontSize: "var(--fs-sm)", color: "var(--ink)", cursor: "pointer" } },
      React.createElement("span", { style: { fontWeight: 700 } }, country.code),
      React.createElement("span", { style: { color: "var(--ink-55)" } }, "+" + country.dial),
      React.createElement("span", { style: { fontSize: "0.7rem", color: "var(--ink-38)" } }, "▾")
    ),
    open && React.createElement("div", { style: { position: "absolute", top: "calc(100% + 6px)", left: 0, width: "260px", maxHeight: "260px", overflowY: "auto", background: "var(--paper)", border: "1px solid var(--hairline)", borderRadius: "var(--r-card)", boxShadow: "var(--shadow-lift)", zIndex: 20 } },
      React.createElement("div", { style: { padding: "8px" } },
        React.createElement("input", { autoFocus: true, value: q, onChange: e => setQ(e.target.value), placeholder: "Поиск страны", style: { width: "100%", boxSizing: "border-box", padding: "8px 10px", border: "1px solid var(--hairline)", borderRadius: "var(--r-input)", fontFamily: "var(--font-body)", fontSize: "var(--fs-sm)" } })
      ),
      filtered.map(c => React.createElement("div", { key: c.code, onClick: () => { setCountry(c); setOpen(false); setQ(""); }, style: { display: "flex", justifyContent: "space-between", gap: 10, padding: "9px 14px", cursor: "pointer", fontSize: "var(--fs-sm)" }, onMouseEnter: e => e.currentTarget.style.background = "var(--sand)", onMouseLeave: e => e.currentTarget.style.background = "transparent" },
        React.createElement("span", null, c.name),
        React.createElement("span", { style: { fontFamily: "var(--font-mono)", color: "var(--ink-55)" } }, "+" + c.dial)
      )),
      filtered.length === 0 && React.createElement("div", { style: { padding: "14px", fontSize: "var(--fs-sm)", color: "var(--ink-55)" } }, "Ничего не найдено")
    )
  );
}

function Field({ label, error, children }) {
  return React.createElement("label", { style: { display: "block" } },
    React.createElement("span", { style: { display: "block", marginBottom: 8, fontFamily: "var(--font-mono)", fontSize: "var(--fs-mono-sm)", letterSpacing: "var(--ls-mono-wide)", color: "var(--ink-55)", textTransform: "uppercase" } }, label),
    children,
    error && React.createElement("span", { style: { display: "block", marginTop: 6, fontSize: "var(--fs-sm)", color: "var(--coral)" } }, error)
  );
}

function LeadModal() {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneDigits, setPhoneDigits] = useState("");
  const [country, setCountry] = useState(COUNTRIES[0]);
  const [consent, setConsent] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [touched, setTouched] = useState({});

  useEffect(() => {
    window.__openLeadModal = () => { setOpen(true); setSubmitting(false); };
    const ac = new AbortController();
    const t = setTimeout(() => ac.abort(), 2500);
    fetch("https://ipapi.co/json/", { signal: ac.signal })
      .then(r => r.json())
      .then(d => {
        clearTimeout(t);
        const match = COUNTRIES.find(c => c.code === d.country_code);
        if (match) setCountry(match);
      })
      .catch(() => {});
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!open) return;
    function onKey(e) { if (e.key === "Escape") setOpen(false); }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open]);

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const phoneValid = phoneDigits.length === country.len;
  const canSubmit = name.trim().length > 1 && emailValid && phoneValid && consent;

  function handlePhoneChange(e) {
    const raw = e.target.value;
    if (raw.trim().startsWith("+")) {
      const detected = detectCountryFromDigits(raw);
      if (detected) {
        setCountry(detected);
        setPhoneDigits(raw.replace(/\D/g, "").slice(detected.dial.length));
        return;
      }
    }
    setPhoneDigits(raw.replace(/\D/g, "").slice(0, country.len));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTouched({ name: true, email: true, phone: true, consent: true });
    if (!canSubmit || submitting) return;
    setSubmitting(true);

    const payload = JSON.stringify({
      name: name.trim(),
      email,
      phone: "+" + country.dial + " " + formatPhone(phoneDigits),
      marketing,
      source: "razminka-landing",
      ts: new Date().toISOString()
    });

    // sendBeacon доставляет запрос надёжно даже при немедленном переходе на другую страницу
    if (navigator.sendBeacon) {
      navigator.sendBeacon(LEADS_WEBHOOK_URL, payload);
    } else {
      fetch(LEADS_WEBHOOK_URL, { method: "POST", mode: "no-cors", keepalive: true, body: payload }).catch(() => {});
    }

    // если сайт встроен в iframe (GetCourse) — уводим всю страницу, а не только фрейм
    try { window.top.location.href = REDIRECT_URL; }
    catch (e) { window.location.href = REDIRECT_URL; }
  }

  if (!open) return null;

  const inputStyle = { flex: 1, minWidth: 0, width: "100%", boxSizing: "border-box", padding: "13px 14px", border: "1px solid var(--hairline)", borderRadius: "var(--r-input)", fontFamily: "var(--font-body)", fontSize: "var(--fs-body)", color: "var(--ink)", outline: "none" };
  const inputStyleFull = { ...inputStyle, width: "100%", borderRadius: "var(--r-input)" };

  return React.createElement("div", { style: { position: "fixed", inset: 0, zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(20,20,15,0.6)", padding: "20px" }, onClick: () => setOpen(false) },
    React.createElement("div", { onClick: e => e.stopPropagation(), style: { position: "relative", width: "100%", maxWidth: "560px", maxHeight: "92vh", overflowY: "auto", background: "var(--paper)", borderRadius: "var(--r-card)", padding: "clamp(24px, 6vw, 44px)", boxShadow: "var(--shadow-lift)" } },
      React.createElement("button", { type: "button", onClick: () => setOpen(false), "aria-label": "Закрыть", style: { position: "absolute", top: "18px", right: "18px", width: "32px", height: "32px", border: "none", background: "var(--sand)", borderRadius: "999px", fontSize: "1.1rem", color: "var(--ink)", cursor: "pointer", lineHeight: 1 } }, "✕"),

      React.createElement(React.Fragment, null,
        React.createElement("h2", { style: { margin: "0 0 8px", fontSize: "var(--fs-h2)", lineHeight: 1.15, paddingRight: "36px" } }, "Занимаешь место на Разминке"),
        React.createElement("p", { style: { margin: "0 0 28px", fontFamily: "var(--font-mono)", fontSize: "var(--fs-mono)", letterSpacing: "var(--ls-mono-wide)", color: "var(--coral)" } }, "29 июля · 4 дня · 990 ₽"),

        React.createElement("form", { onSubmit: handleSubmit, style: { display: "flex", flexDirection: "column", gap: 18 } },
          React.createElement(Field, { label: "Имя", error: touched.name && name.trim().length < 2 ? "Введи имя" : null },
            React.createElement("input", { style: inputStyleFull, value: name, onChange: e => setName(e.target.value), onBlur: () => setTouched(t => ({ ...t, name: true })), placeholder: "Как к тебе обращаться" })
          ),
          React.createElement(Field, { label: "Почта (на неё придёт доступ к Разминке)", error: touched.email && !emailValid ? "Проверь формат почты" : null },
            React.createElement("input", { type: "email", style: inputStyleFull, value: email, onChange: e => setEmail(e.target.value), onBlur: () => setTouched(t => ({ ...t, email: true })), placeholder: "you@mail.com" })
          ),
          React.createElement(Field, { label: "Телефон", error: touched.phone && !phoneValid ? "Проверь номер для " + country.name : null },
            React.createElement("div", { style: { display: "flex" } },
              React.createElement(CountrySelect, { country, setCountry }),
              React.createElement("input", { style: { ...inputStyle, borderRadius: "0 var(--r-input) var(--r-input) 0" }, value: formatPhone(phoneDigits), onChange: handlePhoneChange, onBlur: () => setTouched(t => ({ ...t, phone: true })), placeholder: "Номер телефона", inputMode: "tel" })
            )
          ),

          React.createElement("label", { style: { display: "flex", gap: 10, alignItems: "flex-start", fontSize: "var(--fs-sm)", lineHeight: 1.45, color: "var(--ink-70)", cursor: "pointer" } },
            React.createElement("input", { type: "checkbox", checked: consent, onChange: e => setConsent(e.target.checked), style: { marginTop: 3, width: 16, height: 16, flexShrink: 0, accentColor: "var(--coral)" } }),
            React.createElement("span", null, "Я даю ", React.createElement("a", { href: "#", onClick: e => e.stopPropagation() }, "согласие"), " на обработку моих персональных данных. С ", React.createElement("a", { href: "#", onClick: e => e.stopPropagation() }, "политикой обработки персональных данных"), " ознакомлена")
          ),
          touched.consent && !consent && React.createElement("span", { style: { marginTop: "-10px", fontSize: "var(--fs-sm)", color: "var(--coral)" } }, "Нужно согласие на обработку данных"),

          React.createElement("label", { style: { display: "flex", gap: 10, alignItems: "flex-start", fontSize: "var(--fs-sm)", lineHeight: 1.45, color: "var(--ink-70)", cursor: "pointer" } },
            React.createElement("input", { type: "checkbox", checked: marketing, onChange: e => setMarketing(e.target.checked), style: { marginTop: 3, width: 16, height: 16, flexShrink: 0, accentColor: "var(--coral)" } }),
            React.createElement("span", null, "Хочу получать письма с материалами и новостями от Карины")
          ),

          React.createElement("p", { style: { margin: "4px 0 0", fontSize: "var(--fs-mono-sm)", color: "var(--ink-38)" } }, "Нажимая «Занять место», ты принимаешь условия оферты"),

          React.createElement("button", { type: "submit", disabled: !canSubmit || submitting, style: { marginTop: 6, padding: "17px 20px", border: "none", borderRadius: "var(--r-pill)", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.05rem", color: "var(--on-accent)", background: canSubmit && !submitting ? "var(--coral)" : "var(--ink-14)", cursor: canSubmit && !submitting ? "pointer" : "not-allowed", transition: "background var(--dur) var(--ease-out)" } }, submitting ? "Отправляем…" : "Занять место")
        )
      )
    )
  );
}

ReactDOM.createRoot(document.getElementById("lead-modal-root")).render(React.createElement(LeadModal));
})();
