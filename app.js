// Getting interactive elements
const counter = document.getElementById("counter");

//array of all the buttons
const buttons = document.querySelectorAll(".btn");

// set initial count
var count = 0;

buttons.forEach((element) => {
  element.addEventListener("click", function () {
    // console.log(`clicked on ${element.id}`);
    switch (element.id) {
      case "dec":
        count -= 1;
        break;
      case "res":
        count = 0;
        break;
      case "inc":
        count += 1;
        break;
    }
    if (count == -1) {
      counter.style.color = "var(--red)";
    }
    if (count == 1) {
      counter.style.color = "var(--green)";
    }
    if (count == 0) {
      counter.style.color = "black";
    }
    // console.log(count);
    counter.textContent = count;
  });
});
