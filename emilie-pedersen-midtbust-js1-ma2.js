//Question 1
const myFunctionExpression = function() {
  console.log("Emilie");
};

//Question 2
const inputClick = document.querySelector(".btn");

function respondToClick() {
  console.log("I was clicked");
}

inputClick.addEventListener("click", respondToClick);

//Question 3
const keydownInput = document.querySelector("#firstName");

function keydownEvent(event) {
  //Info on the button pressed:
  console.log(event);

  //Logs the value after next button is pressed:
  console.log("value: ", event.target.value);
}

keydownInput.addEventListener("keydown", keydownEvent);

//Question 4
const htmlButtonTag = document.querySelector("button");

function hoverFunction() {
  htmlButtonTag.classList.add("hover");
}

htmlButtonTag.addEventListener("mouseover", hoverFunction);

//Question 5
const buttonByDataAttribute = document.querySelector("[data-animal='dog']");

function removeClass() {
  buttonByDataAttribute.classList.remove("hover");
}

buttonByDataAttribute.addEventListener("mouseout", removeClass);

//Question 6
const allLiTags = document.querySelectorAll("li");

function addMouseover() {
  console.dir(event.target.dataset.animal);
}

for (let i = 0; i < allLiTags.length; i++) {
  allLiTags[i].addEventListener("mouseover", addMouseover);
}

//Question 7
const animal = "cow";

switch (animal) {
  case "cat":
    console.log("Meow");
    break;

  case "cow":
    console.log("Moo");
    break;

  case "bird":
    console.log("Tweet");
    break;

  default:
    console.log("Harrumph");
}

//Question 8
const sheep = ["Malcolm", "Anders", "Marie"];

sheep.forEach(function(eachSheep) {
  console.log(eachSheep);
});

//Question 9
function logHello() {
  console.log("hello");
  if (counter === 5) {
    clearInterval(helloInterval);
  }
  counter++;
}

let counter = 0;

const helloInterval = setInterval(logHello, 500);

//Question 10
const htmlDiv = document.querySelector(".container");

function updatedHtmlDiv() {
  htmlDiv.innerHTML = "Text updated";
}

setTimeout(updatedHtmlDiv, 2000);
