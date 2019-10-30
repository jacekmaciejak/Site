//Clock
const deg = 6;
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");

setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;
  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;
});

//Clock move after clicked
const div = document.querySelector(".clock");
let divX = 30;
let divY = 30;
div.style.left = `${divX}px`;
div.style.top = `${divY}px`;

let drawActive = false;

let insertDivX;
let insertDivY;

div.addEventListener("mousedown", e => {
  div.style.backgroundColor = "#c2682f";
  drawActive = true;
  insertDivX = e.offsetX;
  insertDivY = e.offsetY;
});
div.addEventListener("mousemove", e => {
  if (drawActive) {
    divX = e.clientX - insertDivX;
    divY = e.clientY - insertDivY;
    div.style.left = `${divX}px`;
    div.style.top = `${divY}px`;
  }
});
div.addEventListener("mouseup", () => {
  div.style.backgroundColor = "white";
  drawActive = false;
});
