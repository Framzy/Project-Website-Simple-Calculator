const body = document.body;
const toggleBtn = document.getElementById("toggle-dark");
const theme = localStorage.getItem("theme");

// Default: ikut OS preference
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  body.classList.add("dark");
  toggleBtn.textContent = "Light Mode";
} else {
  body.classList.remove("dark");
  toggleBtn.textContent = "Dark Mode";
}

// Toggle manual
toggleBtn.addEventListener("click", () => {
  setTimeout(() => {
    body.classList.toggle("dark");
    body.classList.contains("dark")
      ? (toggleBtn.textContent = "Light Mode") &&
        localStorage.setItem("theme", "dark")
      : (toggleBtn.textContent = "Dark Mode") &&
        localStorage.setItem("theme", "light");
  }, 500);
});
