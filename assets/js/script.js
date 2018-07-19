// slider

var rightToggle = document.querySelector(".slider-arrow-right-bg");
var leftToggle = document.querySelector(".slider-arrow-left-bg");
var title = document.querySelectorAll(".slider-title");
var text = document.querySelectorAll(".slider-text");
var control = document.querySelectorAll(".slider-control-item");

var i = 0;

rightToggle.addEventListener("click", pushRightToggle);

function pushRightToggle() {
  title[i].classList.remove("slider-title-active");
  text[i].classList.remove("slider-text-active");
  control[i].classList.remove("slider-control-item-active");
  i++;
  if (i >= title.length) {
    i=0;
  }
  title[i].classList.add("slider-title-active");
  text[i].classList.add("slider-text-active");
  control[i].classList.add("slider-control-item-active");
}

leftToggle.addEventListener("click", pushLeftToggle);

function pushLeftToggle() {
  title[i].classList.remove("slider-title-active");
  text[i].classList.remove("slider-text-active");
  control[i].classList.remove("slider-control-item-active");
  i--;
  if (i < 0) {
    i = title.length - 1;
  }
  title[i].classList.add("slider-title-active");
  text[i].classList.add("slider-text-active");
  control[i].classList.add("slider-control-item-active");
}

// setInterval(pushRightToggle, 8000);
