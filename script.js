const btn = document.querySelectorAll(".btn");
const display = document.getElementById("display");

btn.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;
    if (value === "=") {
      try {
        display.textContent = eval(display.textContent);
      } catch (error) {
        display.textContent = "Error";
      }
    } else {
      display.textContent += value;
    }
  });
});

const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", () => {
  display.textContent = "";
});
