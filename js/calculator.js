// const display = document.getElementById("display");

// function appendToDisplay(input) {
//   display.value += input;
// }

// function clearDisplay() {
//   display.value = "";
// }

// function calculate() {
//   try {
//     display.value = eval(display.value);
//   } catch (error) {
//     display.value = "Error";
//   }
// }

const display = document.getElementById("display");

const appendToDisplay = (input) => {
  display.value += input;
  updateDisplayView();
};

const clearDisplay = () => (display.value = display.value.slice(0, -1));
const allClearDisplay = () => (display.value = "");
const calculate = () => {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
};
const buttons = [...document.querySelectorAll("button")];

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.style.transform = "scale(0.85)";
    setTimeout(() => (button.style.transform = "scale(1)"), 100);
  });
});

const updateDisplayView = () => {
  setTimeout(() => {
    display.setSelectionRange(display.value.length, display.value.length);
  }, 10);
};
