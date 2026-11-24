const display = document.getElementById("display");

function appendVal(val) {
  display.value += val;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = Function('"use strict"; return (' + display.value + ')')();
  } catch {
    display.value = "Error";
  }
}
