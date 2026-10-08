const store = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch {} }
};
const root = document.documentElement;

// ===== Språk (sv / en / tr) =====
// All text has three versions in index.html (data-l="sv|en|tr"); CSS shows only the active one.
function setLang(lang) {
  if (!["sv", "en", "tr"].includes(lang)) lang = "sv";
  root.lang = lang;
  document.querySelectorAll(".lang-btn").forEach(b => b.classList.toggle("active", b.dataset.lang === lang));
  store.set("lang", lang);
}
document.querySelectorAll(".lang-btn").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));
setLang(store.get("lang") || "sv");

// ===== Tema (mörkt / ljust) =====
const savedTheme = store.get("theme") ||
  (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
const themeBtn = document.getElementById("themeToggle");
function applyTheme(t) {
  root.dataset.theme = t;
  themeBtn.textContent = t === "dark" ? "☀️" : "🌙";
}
applyTheme(savedTheme);
themeBtn.addEventListener("click", () => {
  applyTheme(root.dataset.theme === "dark" ? "light" : "dark");
  store.set("theme", root.dataset.theme);
});

// ===== Mobilmeny =====
const navLinks = document.getElementById("navLinks");
document.getElementById("menuBtn").addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => navLinks.classList.remove("open")));

// ===== Språknivå-prickar =====
document.querySelectorAll(".dots").forEach(el => {
  const lvl = Number(el.dataset.level || 0);
  el.textContent = "●".repeat(lvl) + "○".repeat(5 - lvl);
});

// ===== Aktiv menylänk =====
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navLinks.querySelectorAll("a").forEach(a =>
        a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id));
    }
  });
}, { rootMargin: "-40% 0px -55% 0px" });
document.querySelectorAll("main section").forEach(s => observer.observe(s));

document.getElementById("year").textContent = new Date().getFullYear();
