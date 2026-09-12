const root = document.documentElement;
const themeButton = document.querySelector("#themeButton");

const setThemeLabel = () => {
  const isDark = root.dataset.theme === "dark";
  const isRussian = root.lang === "ru";
  themeButton.setAttribute(
    "aria-label",
    isRussian
      ? isDark
        ? "Включить светлую тему"
        : "Включить тёмную тему"
      : isDark
        ? "Use light theme"
        : "Use dark theme"
  );
};

themeButton.addEventListener("click", () => {
  const isDark = root.dataset.theme === "dark";
  if (isDark) {
    delete root.dataset.theme;
    localStorage.setItem("theme", "light");
  } else {
    root.dataset.theme = "dark";
    localStorage.setItem("theme", "dark");
  }
  setThemeLabel();
});

document.querySelector("#year").textContent = new Date().getFullYear();
setThemeLabel();
