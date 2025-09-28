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
    } else if (value === "C") {
      display.textContent = "";
    } else {
      display.textContent += value;
    }
  });
});

const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", () => {
  display.textContent = "";
});

const percentButton = document.querySelector(".btn");
percentButton.addEventListener("click", () => {
  display.textContent = eval(display.textContent) / 100;
});

const plusMinusButton = document.querySelector(".btn");
plusMinusButton.addEventListener("click", () => {
  display.textContent = eval(display.textContent) * -1;
});
