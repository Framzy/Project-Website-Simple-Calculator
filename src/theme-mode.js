const body = document.body;
const toggleBtn = document.getElementById("toggle-dark");
let theme = localStorage.getItem("theme");

let isCooldown = false;
const cooldownTime = 1000; // 1 detik cooldown

console.log("Theme right now: " + theme);

// Default ikut localStorage atau OS preference
if (
  localStorage.getItem("theme") === "dark" ||
  (!localStorage.getItem("theme") &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  body.classList.add("dark");
  toggleBtn.textContent = "Light Mode";
} else {
  toggleBtn.textContent = "Dark Mode";
}

// Toggle manual
toggleBtn.addEventListener("click", () => {
  if (isCooldown) return; // cegah spam klik
  isCooldown = true;

  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    toggleBtn.textContent = "Light Mode";
    localStorage.setItem("theme", "dark");
  } else {
    toggleBtn.textContent = "Dark Mode";
    localStorage.setItem("theme", "light");
  }

  // Tambahkan efek cooldown (tombol abu-abu)
  toggleBtn.classList.add("cooldown");

  setTimeout(() => {
    isCooldown = false;
    toggleBtn.classList.remove("cooldown");
    console.log("Theme right now: " + localStorage.getItem("theme"));
  }, cooldownTime);
});
