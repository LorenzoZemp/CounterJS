// Getting interactive elements
const counter = document.getElementById("counter");
const decBtn = document.getElementById("dec");
const resBtn = document.getElementById("res");
const incBtn = document.getElementById("inc");

const buttons = [decBtn, resBtn, incBtn];

buttons.forEach((element) => {
  element.addEventListener("click", function () {
    console.log(`clicked on ${element.id}`);
  });
});
