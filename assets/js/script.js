// slider //////////////////////////////////////////////////////

var rightToggle = document.querySelector(".slider-arrow-right-bg");
var leftToggle = document.querySelector(".slider-arrow-left-bg");
var title = document.querySelectorAll(".slider-title");
var text = document.querySelectorAll(".slider-text");
var control = document.querySelectorAll(".slider-control-item");

var i = 0;

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

if (rightToggle === true) {
  rightToggle.addEventListener("click", pushRightToggle);
  leftToggle.addEventListener("click", pushLeftToggle);
  setInterval(pushRightToggle, 8000);
}


// free audit or layout ////////////////////////////////////
var circleAudit = document.querySelector(".free-audit-circle");
var circleLayout = document.querySelector(".free-layout-circle");
var labelAudit = document.querySelector(".free-audit-title");
var labelLayout = document.querySelector(".free-layout-title");
var formRadioAudit = document.querySelector("#free-audit");
var formRadioLayout = document.querySelector("#free-layout");

if ((formRadioAudit === true) && (formRadioAudit.checked)) {
  circleAudit.classList.add("free-circle-active");
} else if ((formRadioLayout === true) && (formRadioLayout.checked)) {
    circleLayout.classList.add("free-circle-active");
}

if (labelAudit === true) {
  labelAudit.addEventListener("click", function() {
    circleLayout.classList.remove("free-circle-active");
    circleAudit.classList.add("free-circle-active");
  })

  labelLayout.addEventListener("click", function() {
    circleAudit.classList.remove("free-circle-active");
    circleLayout.classList.add("free-circle-active");
  })
}


//polygraphy.html section operational-polygraphy  //////////////////

var operationalPolygraphyItems = document.querySelectorAll(".operational-polygraphy-services-item");
var indicatorCircle = document.querySelectorAll(".operational-polygraphy-item-circle");
var buttonNext = document.querySelector(".operational-polygraphy-next");
var questionNumber = "question1";
var operationalPolygraphyServiceNumber = document.querySelector(".operational-polygraphy-service-number");
var operationalPolygraphyChooseServices = document.querySelector(".operational-polygraphy-service-name");
var operationalPolygraphyItemsName = document.querySelectorAll(".operational-polygraphy-item-name");
var operationalPolygraphyQuestion1 = "";
var operationalPolygraphyAnswer1 = "";
var operationalPolygraphyQuestion2 = "";
var operationalPolygraphyAnswer2 = "";
var operationalPolygraphyQuestion3 = "";
var operationalPolygraphyAnswer3 = "";
var operationalPolygraphyQuestion4 = "";
var operationalPolygraphyAnswer4 = "";

function removeCircleActive() {
  for (var i = 0; i < indicatorCircle.length; i++) {
    indicatorCircle[i].dataset.checked = false;
  }
}

operationalPolygraphyItems[0].addEventListener("click", function() {
  removeCircleActive();
  indicatorCircle[0].dataset.checked = true;
});
operationalPolygraphyItems[1].addEventListener("click", function() {
  removeCircleActive();
  indicatorCircle[1].dataset.checked = true;
});
operationalPolygraphyItems[2].addEventListener("click", function() {
  removeCircleActive();
  indicatorCircle[2].dataset.checked = true;
});
operationalPolygraphyItems[3].addEventListener("click", function() {
  removeCircleActive();
  indicatorCircle[3].dataset.checked = true;
});
operationalPolygraphyItems[4].addEventListener("click", function() {
  removeCircleActive();
  indicatorCircle[4].dataset.checked = true;
});
operationalPolygraphyItems[5].addEventListener("click", function() {
  removeCircleActive();
  indicatorCircle[5].dataset.checked = true;
});
operationalPolygraphyItems[6].addEventListener("click", function() {
  removeCircleActive();
  indicatorCircle[6].dataset.checked = true;
});

function changeContentOperationalPolygraphy() {
  if (questionNumber === "question1") {
    operationalPolygraphyQuestion1 = operationalPolygraphyChooseServices.innerHTML;
    operationalPolygraphyServiceNumber.innerHTML = "2"
    operationalPolygraphyChooseServices.innerHTML = "Описание готового изделия";
    operationalPolygraphyItemsName[0].innerHTML = "Высота";
    operationalPolygraphyItemsName[1].innerHTML = "Длина";
    operationalPolygraphyItemsName[2].innerHTML = "Количество полос";
    operationalPolygraphyItemsName[3].innerHTML = "Тираж";
    operationalPolygraphyItems[4].innerHTML = "";
    operationalPolygraphyItems[5].innerHTML = "";
    operationalPolygraphyItems[6].innerHTML = "";
    questionNumber = "question2";
  } else if (questionNumber === "question2") {
    operationalPolygraphyServiceNumber.innerHTML = "3"
    operationalPolygraphyChooseServices.innerHTML = "Есть ли макет (тиф, корел, фотошоп)";
    operationalPolygraphyItemsName[0].innerHTML = "Да";
    operationalPolygraphyItemsName[1].innerHTML = "Нет";
    operationalPolygraphyItems[2].innerHTML = "";
    operationalPolygraphyItems[3].innerHTML = "";
    operationalPolygraphyItems[4].innerHTML = "";
    operationalPolygraphyItems[5].innerHTML = "";
    operationalPolygraphyItems[6].innerHTML = "";
    questionNumber = "question3";
  } else if (questionNumber === "question3") {
    operationalPolygraphyServiceNumber.innerHTML = "4"
    operationalPolygraphyChooseServices.innerHTML = "Нужна ли доставка заказа";
    operationalPolygraphyItemsName[0].innerHTML = "Самовывоз ул. Селезнева 4/10";
    operationalPolygraphyItemsName[1].innerHTML = "Доставка (указать адрес)";
    operationalPolygraphyItems[2].innerHTML = "";
    operationalPolygraphyItems[3].innerHTML = "";
    operationalPolygraphyItems[4].innerHTML = "";
    operationalPolygraphyItems[5].innerHTML = "";
    operationalPolygraphyItems[6].innerHTML = "";
    questionNumber = "question3";
  }
}

buttonNext.addEventListener("click", changeContentOperationalPolygraphy);

















//
