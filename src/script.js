const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    const result = Function("return " + display.value)();
    if (result === undefined || isNaN(result)) {
      throw new Error("Invalid");
    }
    display.value = result;
  } catch {
    display.value = "Error";
  }
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    if (btn.classList.contains("clear")) {
      clearDisplay();
    } else if (btn.classList.contains("delete")) {
      deleteLast();
    } else if (btn.classList.contains("equal")) {
      calculate();
    } else {
      appendValue(value);
    }
  });
});
