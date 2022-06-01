import "./styles.css";

var box = document.getElementById("box");
var txt = document.getElementById("txt");
var btn = document.getElementById("btn");

var min = 0;
var max = 255;

btn.addEventListener("click", colorPicker, false);

function colorPicker() {
  var i = 0;
  var colorArray = [];

  while (i < 3) {
    var num = Math.floor(Math.random() * (max + 1 - min)) + min;
    colorArray.push(num);
    i++;
  }
  txt.textContent = "Current Color : rgb(" + colorArray + ")";
  box.style.background = "rgb(" + colorArray + ")";
}

const canvas = document.querySelector("#draw-area");
const context = canvas.getContext("2d");

canvas.addEventListener("mousemove", (event) => {
  draw(event.layerX, event.layerY);
});
canvas.addEventListener("touchmove", (event) => {
  draw(event.layerX, event.layerY);
});

canvas.addEventListener("mousedown", () => {
  context.beginPath();
  isDrag = true;
});

canvas.addEventListener("mouseup", () => {
  context.closePath();
  isDrag = false;
});
canvas.addEventListener("touchstart", () => {
  context.beginPath();
  isDrag = true;
});
canvas.addEventListener("touched", () => {
  context.closePath();
  isDrag = false;
});

const clearButton = document.querySelector("#clear-button");
clearButton.addEventListener("click", () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
});
let isDrag = false;
function draw(x, y) {
  if (!isDrag) {
    return;
  }
  context.lineWidth = 5;
  context.lineTo(x, y);
  context.strokeStyle = "#FF0000";
  context.stroke();
}
