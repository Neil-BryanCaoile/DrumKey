// 1. Select the buttons
// .addEventListener

/*
  The Document method querySelector() 
  returns the first Element within the 
  document that matches the specified selector, 
  or group of selectors. If no matches 
  are found, null is returned.
*/

const btns = document.querySelectorAll("button");

// Events For Buttons
addEventButton(0);
addEventButton(1);
addEventButton(2);
addEventButton(3);
addEventButton(4);
addEventButton(5);
addEventButton(6);

//Event For Key Press
addEventListener("keypress", function (event) {
  switch (event.key) {
    case "1":
      //ANIMATION
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      animationClick(0);
      break;
    case "2":
      var tom1 = new Audio("sounds/tom-2.mp3");
      tom1.play();
      animationClick(1);
      break;
    case "3":
      var tom1 = new Audio("sounds/hithat-closed.mp3");
      tom1.play();
      animationSymbals1();
      animationClick(2);
      break;
    case "4":
      var tom1 = new Audio("sounds/tom-4.mp3");
      tom1.play();
      animationClick(3);
      break;
    case "5":
      var tom1 = new Audio("sounds/crash.mp3");
      tom1.play();
      animationClick(4);
      break;
    case "6":
      var tom1 = new Audio("sounds/snare.mp3");
      tom1.play();
      animationClick(5);
      break;
    case "7":
      var tom1 = new Audio("sounds/kick-bass.mp3");
      tom1.play();
      animationClick(6);
      break;
  }
});

// Functions *********************
function addEventButton(x) {
  btns[x].addEventListener("click", function () {
    animationClick(x);
  });
}

function animationClick(x) {
  const pressed = document.querySelectorAll(".pressed-img");

  if (pressed[x].classList.contains("animation-pressed")) {
    pressed[x].classList.remove("animation-pressed");
    pressed[x].classList.add("animation-pressed2");
  } else {
    pressed[x].classList.remove("animation-pressed2");
    pressed[x].classList.add("animation-pressed");
  }
}

function animationSymbals1() {
  const symbal = document.querySelector("#symbals1");

  if (symbal.classList.contains("animation-symbals1")) {
    symbal.classList.remove("animation-symbals1");
    symbal.classList.add("animation-symbals2");
  } else {
    symbal.classList.remove("animation-symbals2");
    symbal.classList.add("animation-symbals1");
  }
}
