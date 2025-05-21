let count = 0;

const value = document.getElementById("value");
const btnIncrease = document.getElementById("increase");
const btnDecrease = document.getElementById("decrease");
const btnReset = document.getElementById("reset");

btnIncrease.addEventListener("click", () => {
  count++;
  updateDisplay();
});

btnDecrease.addEventListener("click", () => {
  count--;
  updateDisplay();
});

btnReset.addEventListener("click", () => {
  count = 0;
  updateDisplay();
});

function updateDisplay() {
  value.textContent = count;
}
