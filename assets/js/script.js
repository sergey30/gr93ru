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

if (rightToggle !== null) {
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

if (labelAudit !== null) {
  labelAudit.addEventListener("click", function() {
    circleLayout.classList.remove("free-circle-active");
    circleAudit.classList.add("free-circle-active");
  })

  labelLayout.addEventListener("click", function() {
    circleAudit.classList.remove("free-circle-active");
    circleLayout.classList.add("free-circle-active");
  })
}



// polygraphy.html section operational-polygraphy  //////////////////

var operationalPolygraphyItems = document.querySelectorAll(".operational-polygraphy-services-item");
var operationalPolygraphyIndicatorCircle = document.querySelectorAll(".operational-polygraphy-item-circle");
var operationalPolygraphyButtonNext = document.querySelector(".operational-polygraphy-next");
var operationalPolygraphyQuestionNumber = "question1";
var operationalPolygraphyServiceNumber = document.querySelector(".operational-polygraphy-service-number");
var operationalPolygraphyChooseServices = document.querySelector(".operational-polygraphy-service-name");
var operationalPolygraphyItemsName = document.querySelectorAll(".operational-polygraphy-item-name");
var operationalPolygraphyQuestion1 = "";
var operationalPolygraphyAnswer1 = "";
var operationalPolygraphyQuestion2 = "";
var operationalPolygraphyAnswer2_1 = "";
var operationalPolygraphyAnswer2_2 = "";
var operationalPolygraphyAnswer2_3 = "";
var operationalPolygraphyAnswer2_4 = "";
var operationalPolygraphyQuestion3 = "";
var operationalPolygraphyAnswer3 = "";
var operationalPolygraphyQuestion4 = "";
var operationalPolygraphyAnswer4 = "";

function operationalPolygraphyRemoveIndicatorCircleActive() {
  for (var i = 0; i < operationalPolygraphyIndicatorCircle.length; i++) {
    operationalPolygraphyIndicatorCircle[i].dataset.checked = false;
  }
}

function operationalPolygraphyCheckIndicatorCircleActive() {
  for (var i = 0; i < operationalPolygraphyIndicatorCircle.length; i++) {
    if (operationalPolygraphyIndicatorCircle[i].dataset.checked === "true") {
      return i;
    }
  }
  alert("Выберите вариант ответа");
  return false;
}

if (operationalPolygraphyItems.length > 0) {
  operationalPolygraphyItems[0].addEventListener("click", function() {
    operationalPolygraphyRemoveIndicatorCircleActive();
    operationalPolygraphyIndicatorCircle[0].dataset.checked = true;
  });
  operationalPolygraphyItems[1].addEventListener("click", function() {
    operationalPolygraphyRemoveIndicatorCircleActive();
    operationalPolygraphyIndicatorCircle[1].dataset.checked = true;
  });
  operationalPolygraphyItems[2].addEventListener("click", function() {
    operationalPolygraphyRemoveIndicatorCircleActive();
    operationalPolygraphyIndicatorCircle[2].dataset.checked = true;
  });
  operationalPolygraphyItems[3].addEventListener("click", function() {
    operationalPolygraphyRemoveIndicatorCircleActive();
    operationalPolygraphyIndicatorCircle[3].dataset.checked = true;
  });
  operationalPolygraphyItems[4].addEventListener("click", function() {
    operationalPolygraphyRemoveIndicatorCircleActive();
    operationalPolygraphyIndicatorCircle[4].dataset.checked = true;
  });
  operationalPolygraphyItems[5].addEventListener("click", function() {
    operationalPolygraphyRemoveIndicatorCircleActive();
    operationalPolygraphyIndicatorCircle[5].dataset.checked = true;
  });
  operationalPolygraphyItems[6].addEventListener("click", function() {
    operationalPolygraphyRemoveIndicatorCircleActive();
    operationalPolygraphyIndicatorCircle[6].dataset.checked = true;
  });
}

function operationalPolygraphyChangeContent() {
  if (operationalPolygraphyQuestionNumber === "question1") {

    operationalPolygraphyQuestion1 = operationalPolygraphyChooseServices.innerHTML;
    if (operationalPolygraphyCheckIndicatorCircleActive() !== false) {
      operationalPolygraphyAnswer1 = operationalPolygraphyItemsName[operationalPolygraphyCheckIndicatorCircleActive()].innerHTML;
    } else {
      return;
    }
    operationalPolygraphyServiceNumber.innerHTML = "2";
    operationalPolygraphyChooseServices.innerHTML = "Описание готового изделия";
    operationalPolygraphyItemsName[0].innerHTML = '<input type="text" name="" value="" placeholder="Высота">';
    operationalPolygraphyItemsName[1].innerHTML = '<input type="text" name="" value="" placeholder="Длина">';
    operationalPolygraphyItemsName[2].innerHTML = '<input type="text" name="" value="" placeholder="Количество полос">';
    operationalPolygraphyItemsName[3].innerHTML = '<input type="text" name="" value="" placeholder="Тираж">';
    operationalPolygraphyItems[4].setAttribute("hidden", true);
    operationalPolygraphyItems[5].setAttribute("hidden", true);
    operationalPolygraphyItems[6].setAttribute("hidden", true);
    operationalPolygraphyIndicatorCircle[0].setAttribute("hidden", true);
    operationalPolygraphyIndicatorCircle[1].setAttribute("hidden", true);
    operationalPolygraphyIndicatorCircle[2].setAttribute("hidden", true);
    operationalPolygraphyIndicatorCircle[3].setAttribute("hidden", true);
    operationalPolygraphyQuestionNumber = "question2";
    operationalPolygraphyRemoveIndicatorCircleActive()

  } else if (operationalPolygraphyQuestionNumber === "question2") {

    operationalPolygraphyQuestion2 = operationalPolygraphyChooseServices.innerHTML;
    var operationalPolygraphyQuestion2Answers = document.querySelectorAll(".operational-polygraphy-item-name input[type='text']");
    if (operationalPolygraphyQuestion2Answers[0].value &&
        operationalPolygraphyQuestion2Answers[1].value &&
        operationalPolygraphyQuestion2Answers[2].value &&
        operationalPolygraphyQuestion2Answers[3].value) {
      operationalPolygraphyAnswer2_1 = operationalPolygraphyQuestion2Answers[0].value;
      operationalPolygraphyAnswer2_2 = operationalPolygraphyQuestion2Answers[1].value;
      operationalPolygraphyAnswer2_3 = operationalPolygraphyQuestion2Answers[2].value;
      operationalPolygraphyAnswer2_4 = operationalPolygraphyQuestion2Answers[3].value;
    } else {
      alert("Заполните данные");
      return;
    }
    operationalPolygraphyIndicatorCircle[0].removeAttribute("hidden");
    operationalPolygraphyIndicatorCircle[1].removeAttribute("hidden");
    operationalPolygraphyIndicatorCircle[2].removeAttribute("hidden");
    operationalPolygraphyIndicatorCircle[3].removeAttribute("hidden");
    operationalPolygraphyServiceNumber.innerHTML = "3";
    operationalPolygraphyChooseServices.innerHTML = "Есть ли макет (тиф, корел, фотошоп)";
    operationalPolygraphyItemsName[0].innerHTML = "Да";
    operationalPolygraphyItemsName[1].innerHTML = "Нет";
    operationalPolygraphyItems[2].innerHTML = "";
    operationalPolygraphyItems[3].innerHTML = "";
    operationalPolygraphyItems[4].innerHTML = "";
    operationalPolygraphyItems[5].innerHTML = "";
    operationalPolygraphyItems[6].innerHTML = "";
    operationalPolygraphyQuestionNumber = "question3";
    operationalPolygraphyRemoveIndicatorCircleActive()

  } else if (operationalPolygraphyQuestionNumber === "question3") {

    operationalPolygraphyQuestion3 = operationalPolygraphyChooseServices.innerHTML;
    if (operationalPolygraphyCheckIndicatorCircleActive() !== false) {
      operationalPolygraphyAnswer3 = operationalPolygraphyItemsName[operationalPolygraphyCheckIndicatorCircleActive()].innerHTML;
    } else {
      return;
    }
    operationalPolygraphyServiceNumber.innerHTML = "4";
    operationalPolygraphyChooseServices.innerHTML = "Нужна ли доставка заказа";
    operationalPolygraphyItemsName[0].innerHTML = "Самовывоз ул. Селезнева 4/10";
    operationalPolygraphyItemsName[1].innerHTML = 'Доставка<br><textarea name="" value="" placeholder="Указать адрес" cols="30"></textarea>';
    operationalPolygraphyItems[2].innerHTML = "";
    operationalPolygraphyItems[3].innerHTML = "";
    operationalPolygraphyItems[4].innerHTML = "";
    operationalPolygraphyItems[5].innerHTML = "";
    operationalPolygraphyItems[6].innerHTML = "";
    operationalPolygraphyQuestionNumber = "question4";
    operationalPolygraphyRemoveIndicatorCircleActive()

  } else if (operationalPolygraphyQuestionNumber === "question4") {

    operationalPolygraphyQuestion4 = operationalPolygraphyChooseServices.innerHTML;
    if ((operationalPolygraphyCheckIndicatorCircleActive() !== false) &&
        (document.querySelector(".operational-polygraphy-item-name textarea").value)) {
      if (operationalPolygraphyCheckIndicatorCircleActive() === 0) {
        operationalPolygraphyAnswer4 = operationalPolygraphyItemsName[operationalPolygraphyCheckIndicatorCircleActive()].innerHTML;
      } else if (operationalPolygraphyCheckIndicatorCircleActive() === 1) {
          operationalPolygraphyAnswer4 = document.querySelector(".operational-polygraphy-item-name textarea").value;
      }
    } else {
      alert("Заполните данные");
      return;
    }
    document.querySelector(".operational-polygraphy-choose-services").setAttribute("hidden", true);
    document.querySelector(".operational-polygraphy-services").setAttribute("hidden", true);
    document.querySelector(".operational-polygraphy-next").setAttribute("hidden", true);
    document.querySelector(".operational-polygraphy form").removeAttribute("hidden");
  }
}

if (operationalPolygraphyButtonNext !== null) {
  operationalPolygraphyButtonNext.addEventListener("click", operationalPolygraphyChangeContent);
}


// polygraphy.html section business-cards  //////////////////

var businessCardsItems = document.querySelectorAll(".business-cards-services-item");
var businessCardsIndicatorCircle = document.querySelectorAll(".business-cards-item-circle");
var businessCardsButtonNext = document.querySelector(".business-cards-next");
var businessCardsQuestionNumber = "question1";
var businessCardsServiceNumber = document.querySelector(".business-cards-service-number");
var businessCardsChooseServices = document.querySelector(".business-cards-service-name");
var businessCardsItemsName = document.querySelectorAll(".business-cards-item-name");
var businessCardsQuestion1 = "";
var businessCardsAnswer1 = "";
var businessCardsQuestion2 = "";
var businessCardsAnswer2 = "";
var businessCardsQuestion3 = "";
var businessCardsAnswer3 = "";
var businessCardsQuestion4 = "";
var businessCardsAnswer4 = "";
var businessCardsQuestion5 = "";
var businessCardsAnswer5 = "";

function businessCardsRemoveIndicatorCircleActive() {
  for (var i = 0; i < businessCardsIndicatorCircle.length; i++) {
    businessCardsIndicatorCircle[i].dataset.checked = false;
  }
}

function businessCardsCheckIndicatorCircleActive() {
  for (var i = 0; i < businessCardsIndicatorCircle.length; i++) {
    if (businessCardsIndicatorCircle[i].dataset.checked === "true") {
      return i;
    }
  }
  alert("Выберите вариант ответа");
  return false;
}

if (businessCardsItems.length > 0) {
  businessCardsItems[0].addEventListener("click", function() {
    businessCardsRemoveIndicatorCircleActive();
    businessCardsIndicatorCircle[0].dataset.checked = true;
  });
  businessCardsItems[1].addEventListener("click", function() {
    businessCardsRemoveIndicatorCircleActive();
    businessCardsIndicatorCircle[1].dataset.checked = true;
  });
  businessCardsItems[2].addEventListener("click", function() {
    businessCardsRemoveIndicatorCircleActive();
    businessCardsIndicatorCircle[2].dataset.checked = true;
  });
  businessCardsItems[3].addEventListener("click", function() {
    businessCardsRemoveIndicatorCircleActive();
    businessCardsIndicatorCircle[3].dataset.checked = true;
  });
  businessCardsItems[4].addEventListener("click", function() {
    businessCardsRemoveIndicatorCircleActive();
    businessCardsIndicatorCircle[4].dataset.checked = true;
  });
  businessCardsItems[5].addEventListener("click", function() {
    businessCardsRemoveIndicatorCircleActive();
    businessCardsIndicatorCircle[5].dataset.checked = true;
  });
  businessCardsItems[6].addEventListener("click", function() {
    businessCardsRemoveIndicatorCircleActive();
    businessCardsIndicatorCircle[6].dataset.checked = true;
  });
}

function businessCardsChangeContent() {
  if (businessCardsQuestionNumber === "question1") {

    businessCardsQuestion1 = businessCardsChooseServices.innerHTML;
    if (businessCardsCheckIndicatorCircleActive() !== false) {
      businessCardsAnswer1 = businessCardsItemsName[businessCardsCheckIndicatorCircleActive()].innerHTML;
    } else {
      return;
    }
    businessCardsServiceNumber.innerHTML = "2";
    businessCardsChooseServices.innerHTML = "Желаемый тираж и технология";
    businessCardsItemsName[0].innerHTML = 'Цифровая печать от 100 до 500 шт';
    businessCardsItemsName[1].innerHTML = 'Офсетная печать от 1000 шт';
    businessCardsItems[2].setAttribute("hidden", true);
    businessCardsQuestionNumber = "question2";
    businessCardsRemoveIndicatorCircleActive()

  } else if (businessCardsQuestionNumber === "question2") {

    businessCardsQuestion2 = businessCardsChooseServices.innerHTML;
    if (businessCardsCheckIndicatorCircleActive() !== false) {
      businessCardsAnswer2 = businessCardsItemsName[businessCardsCheckIndicatorCircleActive()].innerHTML;
    } else {
      return;
    }
    businessCardsServiceNumber.innerHTML = "3";
    businessCardsChooseServices.innerHTML = "Желаемый материал";

    businessCardsItemsName[0].innerHTML = "Картон стандартный 300гр";
    businessCardsItemsName[1].innerHTML = "Дизайнерский картон";
    businessCardsItemsName[2].innerHTML = "Пластик";
    businessCardsItemsName[3].innerHTML = "Не знаю, но что то необычное";
    businessCardsItems[2].removeAttribute("hidden");
    businessCardsItems[3].removeAttribute("hidden");
    businessCardsQuestionNumber = "question3";
    businessCardsRemoveIndicatorCircleActive()

  } else if (businessCardsQuestionNumber === "question3") {

    businessCardsQuestion3 = businessCardsChooseServices.innerHTML;
    if (businessCardsCheckIndicatorCircleActive() !== false) {
      businessCardsAnswer3 = businessCardsItemsName[businessCardsCheckIndicatorCircleActive()].innerHTML;
    } else {
      return;
    }
    businessCardsServiceNumber.innerHTML = "4";
    businessCardsChooseServices.innerHTML = "Есть ли макет (тиф, корел, фотошоп)?";
    businessCardsItemsName[0].innerHTML = "Да (приложите макет в конце опроса)";
    businessCardsItemsName[1].innerHTML = "Нет";
    businessCardsItems[2].setAttribute("hidden", true);
    businessCardsItems[3].setAttribute("hidden", true);
    businessCardsQuestionNumber = "question4";
    businessCardsRemoveIndicatorCircleActive()

  } else if (businessCardsQuestionNumber === "question4") {

    businessCardsQuestion4 = businessCardsChooseServices.innerHTML;
    if (businessCardsCheckIndicatorCircleActive() !== false) {
      businessCardsAnswer4 = businessCardsItemsName[businessCardsCheckIndicatorCircleActive()].innerHTML;
    } else {
      return;
    }
    businessCardsServiceNumber.innerHTML = "5";
    businessCardsChooseServices.innerHTML = "Нужна ли доставка заказа?";
    businessCardsItemsName[0].innerHTML = "Самовывоз ул. Селезнева 4/10";
    businessCardsItemsName[1].innerHTML = 'Доставка<br><textarea name="" value="" placeholder="Указать адрес" cols="30"></textarea>';
    businessCardsQuestionNumber = "question5";
    businessCardsRemoveIndicatorCircleActive()

  } else if (businessCardsQuestionNumber === "question5") {

    businessCardsQuestion5 = businessCardsChooseServices.innerHTML;
    if ((businessCardsCheckIndicatorCircleActive() !== false) &&
        (document.querySelector(".business-cards-item-name textarea").value)) {
      if (businessCardsCheckIndicatorCircleActive() === 0) {
        businessCardsAnswer5 = businessCardsItemsName[businessCardsCheckIndicatorCircleActive()].innerHTML;
      } else if (businessCardsCheckIndicatorCircleActive() === 1) {
          businessCardsAnswer5 = document.querySelector(".business-cards-item-name textarea").value;
      }
    } else {
      alert("Заполните данные");
      return;
    }
    document.querySelector(".business-cards-choose-services").setAttribute("hidden", true);
    document.querySelector(".business-cards-services").setAttribute("hidden", true);
    document.querySelector(".business-cards-next").setAttribute("hidden", true);
    document.querySelector(".business-cards form").removeAttribute("hidden");
  }
}

if (businessCardsButtonNext !== null) {
  businessCardsButtonNext.addEventListener("click", businessCardsChangeContent);
}


// polygraphy.html section plastic-cards  //////////////////

var plasticCardsItems = document.querySelectorAll(".plastic-cards-services-item");
var plasticCardsIndicatorCircle = document.querySelectorAll(".plastic-cards-item-circle");
var plasticCardsButtonNext = document.querySelector(".plastic-cards-next");
var plasticCardsQuestionNumber = "question1";
var plasticCardsServiceNumber = document.querySelector(".plastic-cards-service-number");
var plasticCardsChooseServices = document.querySelector(".plastic-cards-service-name");
var plasticCardsItemsName = document.querySelectorAll(".plastic-cards-item-name");
var plasticCardsQuestion1 = "";
var plasticCardsAnswer1 = "";
var plasticCardsQuestion2 = "";
var plasticCardsAnswer2 = "";
var plasticCardsQuestion3 = "";
var plasticCardsAnswer3 = "";
var plasticCardsQuestion4 = "";
var plasticCardsAnswer4 = "";
var plasticCardsQuestion5 = "";
var plasticCardsAnswer5 = "";

function plasticCardsRemoveIndicatorCircleActive() {
  for (var i = 0; i < plasticCardsIndicatorCircle.length; i++) {
    plasticCardsIndicatorCircle[i].dataset.checked = false;
  }
}

function plasticCardsCheckIndicatorCircleActive() {
  for (var i = 0; i < plasticCardsIndicatorCircle.length; i++) {
    if (plasticCardsIndicatorCircle[i].dataset.checked === "true") {
      return i;
    }
  }
  alert("Выберите вариант ответа");
  return false;
}

if (plasticCardsItems.length > 0) {
  plasticCardsItems[0].addEventListener("click", function() {
    plasticCardsRemoveIndicatorCircleActive();
    plasticCardsIndicatorCircle[0].dataset.checked = true;
  });
  plasticCardsItems[1].addEventListener("click", function() {
    plasticCardsRemoveIndicatorCircleActive();
    plasticCardsIndicatorCircle[1].dataset.checked = true;
  });
  plasticCardsItems[2].addEventListener("click", function() {
    plasticCardsRemoveIndicatorCircleActive();
    plasticCardsIndicatorCircle[2].dataset.checked = true;
  });
  plasticCardsItems[3].addEventListener("click", function() {
    plasticCardsRemoveIndicatorCircleActive();
    plasticCardsIndicatorCircle[3].dataset.checked = true;
  });
  plasticCardsItems[4].addEventListener("click", function() {
    plasticCardsRemoveIndicatorCircleActive();
    plasticCardsIndicatorCircle[4].dataset.checked = true;
  });
  plasticCardsItems[5].addEventListener("click", function() {
    plasticCardsRemoveIndicatorCircleActive();
    plasticCardsIndicatorCircle[5].dataset.checked = true;
  });
  plasticCardsItems[6].addEventListener("click", function() {
    plasticCardsRemoveIndicatorCircleActive();
    plasticCardsIndicatorCircle[6].dataset.checked = true;
  });
}

function plasticCardsChangeContent() {
  if (plasticCardsQuestionNumber === "question1") {

    plasticCardsQuestion1 = plasticCardsChooseServices.innerHTML;
    if (document.querySelector(".plastic-cards-item-name input[type='text']").value) {
      plasticCardsAnswer1 = document.querySelector(".plastic-cards-item-name input[type='text']").value;
    } else {
      alert("Заполните данные");
      return;
    }
    plasticCardsServiceNumber.innerHTML = "2";
    plasticCardsChooseServices.innerHTML = "Необходимо ли нанесение индивидуальной информации";
    plasticCardsIndicatorCircle[0].removeAttribute("hidden");
    document.querySelector(".plastic-cards-item-name input[type='text']").setAttribute("hidden", true);
    plasticCardsItems[1].removeAttribute("hidden");
    plasticCardsItems[2].removeAttribute("hidden");
    plasticCardsItems[3].removeAttribute("hidden");
    plasticCardsItemsName[0].innerHTML = "Штрих код";
    plasticCardsItemsName[1].innerHTML = "Нумерация";
    plasticCardsItemsName[2].innerHTML = "Магнитная полоса";
    plasticCardsItemsName[3].innerHTML = "Чип";
    plasticCardsQuestionNumber = "question2";
    plasticCardsRemoveIndicatorCircleActive()

  } else if (plasticCardsQuestionNumber === "question2") {

    plasticCardsQuestion2 = plasticCardsChooseServices.innerHTML;
    if (plasticCardsCheckIndicatorCircleActive() !== false) {
      plasticCardsAnswer2 = plasticCardsItemsName[plasticCardsCheckIndicatorCircleActive()].innerHTML;
    } else {
      return;
    }
    plasticCardsItems[2].setAttribute("hidden", true);
    plasticCardsItems[3].setAttribute("hidden", true);
    plasticCardsServiceNumber.innerHTML = "3";
    plasticCardsChooseServices.innerHTML = "Ламинация";
    plasticCardsItemsName[0].innerHTML = "Матовая";
    plasticCardsItemsName[1].innerHTML = "Глянцевая";
    plasticCardsQuestionNumber = "question3";
    plasticCardsRemoveIndicatorCircleActive()

  } else if (plasticCardsQuestionNumber === "question3") {

    plasticCardsQuestion3 = plasticCardsChooseServices.innerHTML;
    if (plasticCardsCheckIndicatorCircleActive() !== false) {
      plasticCardsAnswer3 = plasticCardsItemsName[plasticCardsCheckIndicatorCircleActive()].innerHTML;
    } else {
      return;
    }
    plasticCardsServiceNumber.innerHTML = "4";
    plasticCardsChooseServices.innerHTML = "Есть ли макет (тиф, корел, фотошоп)?";
    plasticCardsItemsName[0].innerHTML = "Да (приложите макет в конце опроса)";
    plasticCardsItemsName[1].innerHTML = "Нет";
    plasticCardsQuestionNumber = "question4";
    plasticCardsRemoveIndicatorCircleActive()

  } else if (plasticCardsQuestionNumber === "question4") {

    plasticCardsQuestion4 = plasticCardsChooseServices.innerHTML;
    if (plasticCardsCheckIndicatorCircleActive() !== false) {
      plasticCardsAnswer4 = plasticCardsItemsName[plasticCardsCheckIndicatorCircleActive()].innerHTML;
    } else {
      return;
    }
    plasticCardsServiceNumber.innerHTML = "5";
    plasticCardsChooseServices.innerHTML = "Нужна ли доставка заказа?";
    plasticCardsItemsName[0].innerHTML = "Самовывоз ул. Селезнева 4/10";
    plasticCardsItemsName[1].innerHTML = 'Доставка<br><textarea name="" value="" placeholder="Указать адрес" cols="30"></textarea>';
    plasticCardsQuestionNumber = "question5";
    plasticCardsRemoveIndicatorCircleActive()

  } else if (plasticCardsQuestionNumber === "question5") {

    plasticCardsQuestion5 = plasticCardsChooseServices.innerHTML;
    if ((plasticCardsCheckIndicatorCircleActive() !== false) &&
      (document.querySelector(".plastic-cards-item-name textarea").value)) {
      if (plasticCardsCheckIndicatorCircleActive() === 0) {
        plasticCardsAnswer5 = plasticCardsItemsName[plasticCardsCheckIndicatorCircleActive()].innerHTML;
      } else if (plasticCardsCheckIndicatorCircleActive() === 1) {
          plasticCardsAnswer5 = document.querySelector(".plastic-cards-item-name textarea").value;
      }
    } else {
      alert("Заполните данные");
      return;
    }
    document.querySelector(".plastic-cards-choose-services").setAttribute("hidden", true);
    document.querySelector(".plastic-cards-services").setAttribute("hidden", true);
    document.querySelector(".plastic-cards-next").setAttribute("hidden", true);
    document.querySelector(".plastic-cards form").removeAttribute("hidden");
  }
}

if (plasticCardsButtonNext !== null) {
  plasticCardsButtonNext.addEventListener("click", plasticCardsChangeContent);
}


// polygraphy.html section offset-printing  //////////////////

var offsetPrintingItems = document.querySelectorAll(".offset-printing-services-item");
var offsetPrintingIndicatorCircle = document.querySelectorAll(".offset-printing-item-circle");
var offsetPrintingButtonNext = document.querySelector(".offset-printing-next");
var offsetPrintingQuestionNumber = "question1";
var offsetPrintingServiceNumber = document.querySelector(".offset-printing-service-number");
var offsetPrintingChooseServices = document.querySelector(".offset-printing-service-name");
var offsetPrintingItemsName = document.querySelectorAll(".offset-printing-item-name");
var offsetPrintingQuestion1 = "";
var offsetPrintingAnswer1 = "";
var offsetPrintingQuestion2 = "";
var offsetPrintingAnswer2_1 = "";
var offsetPrintingAnswer2_2 = "";
var offsetPrintingAnswer2_3 = "";
var offsetPrintingAnswer2_4 = "";
var offsetPrintingQuestion3 = "";
var offsetPrintingAnswer3 = "";
var offsetPrintingQuestion4 = "";
var offsetPrintingAnswer4 = "";

function offsetPrintingRemoveIndicatorCircleActive() {
  for (var i = 0; i < offsetPrintingIndicatorCircle.length; i++) {
    offsetPrintingIndicatorCircle[i].dataset.checked = false;
  }
}

function offsetPrintingCheckIndicatorCircleActive() {
  for (var i = 0; i < offsetPrintingIndicatorCircle.length; i++) {
    if (offsetPrintingIndicatorCircle[i].dataset.checked === "true") {
      return i;
    }
  }
  alert("Выберите вариант ответа");
  return false;
}

if (offsetPrintingItems.length > 0) {
  offsetPrintingItems[0].addEventListener("click", function() {
    offsetPrintingRemoveIndicatorCircleActive();
    offsetPrintingIndicatorCircle[0].dataset.checked = true;
  });
  offsetPrintingItems[1].addEventListener("click", function() {
    offsetPrintingRemoveIndicatorCircleActive();
    offsetPrintingIndicatorCircle[1].dataset.checked = true;
  });
  offsetPrintingItems[2].addEventListener("click", function() {
    offsetPrintingRemoveIndicatorCircleActive();
    offsetPrintingIndicatorCircle[2].dataset.checked = true;
  });
  offsetPrintingItems[3].addEventListener("click", function() {
    offsetPrintingRemoveIndicatorCircleActive();
    offsetPrintingIndicatorCircle[3].dataset.checked = true;
  });
  offsetPrintingItems[4].addEventListener("click", function() {
    offsetPrintingRemoveIndicatorCircleActive();
    offsetPrintingIndicatorCircle[4].dataset.checked = true;
  });
  offsetPrintingItems[5].addEventListener("click", function() {
    offsetPrintingRemoveIndicatorCircleActive();
    offsetPrintingIndicatorCircle[5].dataset.checked = true;
  });
  offsetPrintingItems[6].addEventListener("click", function() {
    offsetPrintingRemoveIndicatorCircleActive();
    offsetPrintingIndicatorCircle[6].dataset.checked = true;
  });
}

function offsetPrintingChangeContent() {
  if (offsetPrintingQuestionNumber === "question1") {

    offsetPrintingQuestion1 = offsetPrintingChooseServices.innerHTML;
    if (offsetPrintingCheckIndicatorCircleActive() !== false) {
      offsetPrintingAnswer1 = offsetPrintingItemsName[offsetPrintingCheckIndicatorCircleActive()].innerHTML;
    } else {
      return;
    }
    offsetPrintingServiceNumber.innerHTML = "2";
    offsetPrintingChooseServices.innerHTML = "Описание готового изделия";
    offsetPrintingItemsName[0].innerHTML = '<input type="text" name="" value="" placeholder="Высота">';
    offsetPrintingItemsName[1].innerHTML = '<input type="text" name="" value="" placeholder="Длина">';
    offsetPrintingItemsName[2].innerHTML = '<input type="text" name="" value="" placeholder="Количество полос">';
    offsetPrintingItemsName[3].innerHTML = '<input type="text" name="" value="" placeholder="Тираж">';
    offsetPrintingItems[4].innerHTML = "";
    offsetPrintingItems[5].innerHTML = "";
    offsetPrintingItems[6].innerHTML = "";
    offsetPrintingIndicatorCircle[0].setAttribute("hidden", true);
    offsetPrintingIndicatorCircle[1].setAttribute("hidden", true);
    offsetPrintingIndicatorCircle[2].setAttribute("hidden", true);
    offsetPrintingIndicatorCircle[3].setAttribute("hidden", true);
    offsetPrintingQuestionNumber = "question2";
    offsetPrintingRemoveIndicatorCircleActive()

  } else if (offsetPrintingQuestionNumber === "question2") {

    offsetPrintingQuestion2 = offsetPrintingChooseServices.innerHTML;
    var offsetPrintingQuestion2Answers = document.querySelectorAll(".offset-printing-item-name input[type='text']");
    if (offsetPrintingQuestion2Answers[0].value &&
        offsetPrintingQuestion2Answers[1].value &&
        offsetPrintingQuestion2Answers[2].value &&
        offsetPrintingQuestion2Answers[3].value) {
      offsetPrintingAnswer2_1 = offsetPrintingQuestion2Answers[0].value;
      offsetPrintingAnswer2_2 = offsetPrintingQuestion2Answers[1].value;
      offsetPrintingAnswer2_3 = offsetPrintingQuestion2Answers[2].value;
      offsetPrintingAnswer2_4 = offsetPrintingQuestion2Answers[3].value;
    } else {
      alert("Заполните данные");
      return;
    }
    offsetPrintingIndicatorCircle[0].removeAttribute("hidden");
    offsetPrintingIndicatorCircle[1].removeAttribute("hidden");
    offsetPrintingIndicatorCircle[2].removeAttribute("hidden");
    offsetPrintingIndicatorCircle[3].removeAttribute("hidden");
    offsetPrintingServiceNumber.innerHTML = "3";
    offsetPrintingChooseServices.innerHTML = "Есть ли макет (тиф, корел, фотошоп)";
    offsetPrintingItemsName[0].innerHTML = "Да (приложите макет в конце опроса)";
    offsetPrintingItemsName[1].innerHTML = "Нет";
    offsetPrintingItems[2].innerHTML = "";
    offsetPrintingItems[3].innerHTML = "";
    offsetPrintingItems[4].innerHTML = "";
    offsetPrintingItems[5].innerHTML = "";
    offsetPrintingItems[6].innerHTML = "";
    offsetPrintingQuestionNumber = "question3";
    offsetPrintingRemoveIndicatorCircleActive()

  } else if (offsetPrintingQuestionNumber === "question3") {

    offsetPrintingQuestion3 = offsetPrintingChooseServices.innerHTML;
    if (offsetPrintingCheckIndicatorCircleActive() !== false) {
      offsetPrintingAnswer3 = offsetPrintingItemsName[offsetPrintingCheckIndicatorCircleActive()].innerHTML;
    } else {
      return;
    }
    offsetPrintingServiceNumber.innerHTML = "4";
    offsetPrintingChooseServices.innerHTML = "Нужна ли доставка заказа";
    offsetPrintingItemsName[0].innerHTML = "Самовывоз ул. Селезнева 4/10";
    offsetPrintingItemsName[1].innerHTML = 'Доставка<br><textarea name="" value="" placeholder="Указать адрес" cols="30"></textarea>';
    offsetPrintingItems[2].innerHTML = "";
    offsetPrintingItems[3].innerHTML = "";
    offsetPrintingItems[4].innerHTML = "";
    offsetPrintingItems[5].innerHTML = "";
    offsetPrintingItems[6].innerHTML = "";
    offsetPrintingQuestionNumber = "question4";
    offsetPrintingRemoveIndicatorCircleActive()

  } else if (offsetPrintingQuestionNumber === "question4") {

    offsetPrintingQuestion4 = offsetPrintingChooseServices.innerHTML;
    if ((offsetPrintingCheckIndicatorCircleActive() !== false) &&
        (document.querySelector(".offset-printing-item-name textarea").value)) {
      if (offsetPrintingCheckIndicatorCircleActive() === 0) {
        offsetPrintingAnswer4 = offsetPrintingItemsName[offsetPrintingCheckIndicatorCircleActive()].innerHTML;
      } else if (offsetPrintingCheckIndicatorCircleActive() === 1) {
        offsetPrintingAnswer4 = document.querySelector(".offset-printing-item-name textarea").value;
      }
    } else {
      alert("Заполните данные");
      return;
    }
    document.querySelector(".offset-printing-choose-services").setAttribute("hidden", true);
    document.querySelector(".offset-printing-services").setAttribute("hidden", true);
    document.querySelector(".offset-printing-next").setAttribute("hidden", true);
    document.querySelector(".offset-printing form").removeAttribute("hidden");
  }
}

if (offsetPrintingButtonNext !== null) {
  offsetPrintingButtonNext.addEventListener("click", offsetPrintingChangeContent);
}


// outdoor-advertising.html section sign-boards  //////////////////

var signBoardsItems = document.querySelectorAll(".sign-boards-services-item");
var signBoardsIndicatorCircle = document.querySelectorAll(".sign-boards-item-circle");
var signBoardsButtonNext = document.querySelector(".sign-boards-next");
var signBoardsQuestionNumber = "question1";
var signBoardsServiceNumber = document.querySelector(".sign-boards-service-number");
var signBoardsChooseServices = document.querySelector(".sign-boards-service-name");
var signBoardsItemsName = document.querySelectorAll(".sign-boards-item-name");
var signBoardsQuestion1 = "";
var signBoardsAnswer1 = "";
var signBoardsQuestion2 = "";
var signBoardsAnswer2 = "";
var signBoardsQuestion3 = "";
var signBoardsAnswer3 = "";
var signBoardsQuestion4 = "";
var signBoardsAnswer4 = "";
var signBoardsQuestion5 = "";
var signBoardsAnswer5 = "";

function signBoardsRemoveIndicatorCircleActive() {
  for (var i = 0; i < signBoardsIndicatorCircle.length; i++) {
    signBoardsIndicatorCircle[i].dataset.checked = false;
  }
}

function signBoardsCheckIndicatorCircleActive() {
  for (var i = 0; i < signBoardsIndicatorCircle.length; i++) {
    if (signBoardsIndicatorCircle[i].dataset.checked === "true") {
      return i;
    }
  }
  alert("Выберите вариант ответа");
  return false;
}

if (signBoardsItems.length > 0) {
  signBoardsItems[0].addEventListener("click", function() {
    signBoardsRemoveIndicatorCircleActive();
    signBoardsIndicatorCircle[0].dataset.checked = true;
  });
  signBoardsItems[1].addEventListener("click", function() {
    signBoardsRemoveIndicatorCircleActive();
    signBoardsIndicatorCircle[1].dataset.checked = true;
  });
  signBoardsItems[2].addEventListener("click", function() {
    signBoardsRemoveIndicatorCircleActive();
    signBoardsIndicatorCircle[2].dataset.checked = true;
  });
  signBoardsItems[3].addEventListener("click", function() {
    signBoardsRemoveIndicatorCircleActive();
    signBoardsIndicatorCircle[3].dataset.checked = true;
  });
  signBoardsItems[4].addEventListener("click", function() {
    signBoardsRemoveIndicatorCircleActive();
    signBoardsIndicatorCircle[4].dataset.checked = true;
  });
  signBoardsItems[5].addEventListener("click", function() {
    signBoardsRemoveIndicatorCircleActive();
    signBoardsIndicatorCircle[5].dataset.checked = true;
  });
  signBoardsItems[6].addEventListener("click", function() {
    signBoardsRemoveIndicatorCircleActive();
    signBoardsIndicatorCircle[6].dataset.checked = true;
  });
}

function signBoardsChangeContent() {
  if (signBoardsQuestionNumber === "question1") {

    signBoardsQuestion1 = signBoardsChooseServices.innerHTML;
    if (signBoardsCheckIndicatorCircleActive() !== false) {
      signBoardsAnswer1 = signBoardsItemsName[signBoardsCheckIndicatorCircleActive()].innerHTML;
    } else {
      return;
    }
    signBoardsServiceNumber.innerHTML = "2";
    signBoardsChooseServices.innerHTML = "Какую технологию изготовления хотели бы использовать?";
    signBoardsItemsName[0].innerHTML = "Объемные буквы";
    signBoardsItemsName[1].innerHTML = "Псевдо объёмные буквы";
    signBoardsItemsName[2].innerHTML = "Световой короб";
    signBoardsItemsName[3].innerHTML = "Панно";
    signBoardsItemsName[4].innerHTML = "Затрудняюсь ответить";
    signBoardsItems[5].setAttribute("hidden", true);
    signBoardsQuestionNumber = "question2";
    signBoardsRemoveIndicatorCircleActive()

  } else if (signBoardsQuestionNumber === "question2") {

    signBoardsQuestion2 = signBoardsChooseServices.innerHTML;
    if (signBoardsCheckIndicatorCircleActive() !== false) {
      signBoardsAnswer2 = signBoardsItemsName[signBoardsCheckIndicatorCircleActive()].innerHTML;
    } else {
      alert("Заполните данные");
      return;
    }
    signBoardsServiceNumber.innerHTML = "3";
    signBoardsChooseServices.innerHTML = "Есть ли макет или пример будущей вывески?";
    signBoardsItemsName[0].innerHTML = "Да (приложите макет в конце опроса)";
    signBoardsItemsName[1].innerHTML = "Нет";
    signBoardsItems[2].setAttribute("hidden", true);
    signBoardsItems[3].setAttribute("hidden", true);
    signBoardsItems[4].setAttribute("hidden", true);
    signBoardsQuestionNumber = "question3";
    signBoardsRemoveIndicatorCircleActive()

  } else if (signBoardsQuestionNumber === "question3") {

    signBoardsQuestion3 = signBoardsChooseServices.innerHTML;
    if (signBoardsCheckIndicatorCircleActive() !== false) {
      signBoardsAnswer3 = signBoardsItemsName[signBoardsCheckIndicatorCircleActive()].innerHTML;
    } else {
      return;
    }
    signBoardsServiceNumber.innerHTML = "4";
    signBoardsChooseServices.innerHTML = "Необходим ли выезд на замер конструкции";
    signBoardsItemsName[0].innerHTML = "Да (приложите макет в конце опроса)";
    signBoardsItemsName[1].innerHTML = "Нет";
    signBoardsQuestionNumber = "question4";
    signBoardsRemoveIndicatorCircleActive()

  } else if (signBoardsQuestionNumber === "question4") {

    signBoardsQuestion4 = signBoardsChooseServices.innerHTML;
    if (signBoardsCheckIndicatorCircleActive() !== false) {
      signBoardsAnswer4 = signBoardsItemsName[signBoardsCheckIndicatorCircleActive()].innerHTML;
    } else {
      return;
    }
    signBoardsServiceNumber.innerHTML = "5";
    signBoardsChooseServices.innerHTML = "Необходим ли монтаж будущей вывески или конструкции";
    signBoardsItemsName[0].innerHTML = "Да";
    signBoardsItemsName[1].innerHTML = "Нет";
    signBoardsQuestionNumber = "question5";
    signBoardsRemoveIndicatorCircleActive()

  } else if (signBoardsQuestionNumber === "question5") {

    signBoardsQuestion5 = signBoardsChooseServices.innerHTML;
    if (signBoardsCheckIndicatorCircleActive() !== false) {
      signBoardsAnswer5 = signBoardsItemsName[signBoardsCheckIndicatorCircleActive()].innerHTML;
    } else {
      return;
    }
    document.querySelector(".sign-boards-choose-services").setAttribute("hidden", true);
    document.querySelector(".sign-boards-services").setAttribute("hidden", true);
    document.querySelector(".sign-boards-next").setAttribute("hidden", true);
    document.querySelector(".sign-boards form").removeAttribute("hidden");
  }
}

if (signBoardsButtonNext !== null) {
  signBoardsButtonNext.addEventListener("click", signBoardsChangeContent);
}



// polygraphy.html section branding-cars  //////////////////

var brandingCarsItems = document.querySelectorAll(".branding-cars-services-item");
var brandingCarsIndicatorCircle = document.querySelectorAll(".branding-cars-item-circle");
var brandingCarsButtonNext = document.querySelector(".branding-cars-next");
var brandingCarsQuestionNumber = "question1";
var brandingCarsServiceNumber = document.querySelector(".branding-cars-service-number");
var brandingCarsChooseServices = document.querySelector(".branding-cars-service-name");
var brandingCarsItemsName = document.querySelectorAll(".branding-cars-item-name");
var brandingCarsQuestion1 = "";
var brandingCarsAnswer1 = "";
var brandingCarsQuestion2 = "";
var brandingCarsAnswer2 = "";
var brandingCarsQuestion3 = "";
var brandingCarsAnswer3 = "";
var brandingCarsQuestion4 = "";
var brandingCarsAnswer4 = "";
var brandingCarsQuestion5 = "";
var brandingCarsAnswer5 = "";

function brandingCarsRemoveIndicatorCircleActive() {
  for (var i = 0; i < brandingCarsIndicatorCircle.length; i++) {
    brandingCarsIndicatorCircle[i].dataset.checked = false;
  }
}

function brandingCarsCheckIndicatorCircleActive() {
  for (var i = 0; i < brandingCarsIndicatorCircle.length; i++) {
    if (brandingCarsIndicatorCircle[i].dataset.checked === "true") {
      return i;
    }
  }
  alert("Выберите вариант ответа");
  return false;
}

if (brandingCarsItems.length > 0) {
  brandingCarsItems[0].addEventListener("click", function() {
    brandingCarsRemoveIndicatorCircleActive();
    brandingCarsIndicatorCircle[0].dataset.checked = true;
  });
  brandingCarsItems[1].addEventListener("click", function() {
    brandingCarsRemoveIndicatorCircleActive();
    brandingCarsIndicatorCircle[1].dataset.checked = true;
  });
  brandingCarsItems[2].addEventListener("click", function() {
    brandingCarsRemoveIndicatorCircleActive();
    brandingCarsIndicatorCircle[2].dataset.checked = true;
  });
  brandingCarsItems[3].addEventListener("click", function() {
    brandingCarsRemoveIndicatorCircleActive();
    brandingCarsIndicatorCircle[3].dataset.checked = true;
  });
  brandingCarsItems[4].addEventListener("click", function() {
    brandingCarsRemoveIndicatorCircleActive();
    brandingCarsIndicatorCircle[4].dataset.checked = true;
  });
  brandingCarsItems[5].addEventListener("click", function() {
    brandingCarsRemoveIndicatorCircleActive();
    brandingCarsIndicatorCircle[5].dataset.checked = true;
  });
  brandingCarsItems[6].addEventListener("click", function() {
    brandingCarsRemoveIndicatorCircleActive();
    brandingCarsIndicatorCircle[6].dataset.checked = true;
  });
}

function brandingCarsChangeContent() {
  if (brandingCarsQuestionNumber === "question1") {

    brandingCarsQuestion1 = brandingCarsChooseServices.innerHTML;
    if (document.querySelector(".branding-cars-item-name input[type='text']").value) {
      brandingCarsAnswer1 = document.querySelector(".branding-cars-item-name input[type='text']").value;
    } else {
      alert("Заполните данные");
      return;
    }
    brandingCarsServiceNumber.innerHTML = "2";
    brandingCarsChooseServices.innerHTML = "Есть ли макет или пример будущей оклейки?";
    brandingCarsIndicatorCircle[0].removeAttribute("hidden");
    brandingCarsItems[1].removeAttribute("hidden");
    document.querySelector(".branding-cars-item-name input[type='text']").setAttribute("hidden", true);
    brandingCarsItemsName[0].innerHTML = "Да (приложите макет в конце опроса)";
    brandingCarsItemsName[1].innerHTML = "Нет";
    brandingCarsQuestionNumber = "question2";
    brandingCarsRemoveIndicatorCircleActive()

  } else if (brandingCarsQuestionNumber === "question2") {

    brandingCarsQuestion2 = brandingCarsChooseServices.innerHTML;

    var brandingCarsQuestion2Answers = document.querySelectorAll(".branding-cars-item-name input[type='text']");
    if (brandingCarsCheckIndicatorCircleActive() !== false) {
      brandingCarsAnswer2 = brandingCarsItemsName[brandingCarsCheckIndicatorCircleActive()].innerHTML;
    } else {
      return;
    }
    brandingCarsItems[2].removeAttribute("hidden");
    brandingCarsItems[3].removeAttribute("hidden");
    brandingCarsItems[4].removeAttribute("hidden");
    brandingCarsItems[5].removeAttribute("hidden");
    brandingCarsServiceNumber.innerHTML = "3";
    brandingCarsChooseServices.innerHTML = "Технология оклейки транспорта?";
    brandingCarsItemsName[0].innerHTML = "Сплошная оклейка кузова";
    brandingCarsItemsName[1].innerHTML = "Частичная оклейка плоттерной резкой";
    brandingCarsItemsName[2].innerHTML = "Частичная оклейка широкоформатной печатью";
    brandingCarsItemsName[3].innerHTML = "Оклейка только заднего стекла";
    brandingCarsItemsName[4].innerHTML = "Использование быстросъёмного магнитного винила";
    brandingCarsItemsName[5].innerHTML = "Затрудняюсь ответить";
    brandingCarsQuestionNumber = "question3";
    brandingCarsRemoveIndicatorCircleActive()

  } else if (brandingCarsQuestionNumber === "question3") {

    brandingCarsQuestion3 = brandingCarsChooseServices.innerHTML;
    if (brandingCarsCheckIndicatorCircleActive() !== false) {
      brandingCarsAnswer3 = brandingCarsItemsName[brandingCarsCheckIndicatorCircleActive()].innerHTML;
    } else {
      return;
    }
    brandingCarsServiceNumber.innerHTML = "4";
    brandingCarsChooseServices.innerHTML = "Какой пленкой хотели бы произвести оклейку?";
    brandingCarsItemsName[0].innerHTML = "Рекламная пленка Oracal или Orajet";
    brandingCarsItemsName[1].innerHTML = "Профессиональный авто винил KPMF";
    brandingCarsItems[2].setAttribute("hidden", true);
    brandingCarsItems[3].setAttribute("hidden", true);
    brandingCarsItems[4].setAttribute("hidden", true);
    brandingCarsItems[5].setAttribute("hidden", true);
    brandingCarsItems[6].setAttribute("hidden", true);
    brandingCarsQuestionNumber = "question4";
    brandingCarsRemoveIndicatorCircleActive()

  } else if (brandingCarsQuestionNumber === "question4") {

    brandingCarsQuestion4 = brandingCarsChooseServices.innerHTML;
    if (brandingCarsCheckIndicatorCircleActive() !== false) {
      brandingCarsAnswer4 = brandingCarsItemsName[brandingCarsCheckIndicatorCircleActive()].innerHTML;
    } else {
      return;
    }
    brandingCarsServiceNumber.innerHTML = "5";
    brandingCarsChooseServices.innerHTML = "Где будет осуществляться монтаж?";
    brandingCarsItemsName[0].innerHTML = "В нашем боксе по ул. Селезнева 4/10";
    brandingCarsItemsName[1].innerHTML = "На территории заказчика";
    brandingCarsItemsName[2].innerHTML = "Затрудняюсь ответить";
    brandingCarsItems[2].removeAttribute("hidden", true);
    brandingCarsQuestionNumber = "question5";
    brandingCarsRemoveIndicatorCircleActive()

  } else if (brandingCarsQuestionNumber === "question5") {

    brandingCarsQuestion5 = brandingCarsChooseServices.innerHTML;
    if (brandingCarsCheckIndicatorCircleActive() !== false) {
      brandingCarsAnswer5 = brandingCarsItemsName[brandingCarsCheckIndicatorCircleActive()].innerHTML;
    } else {
      return;
    }
    document.querySelector(".branding-cars-choose-services").setAttribute("hidden", true);
    document.querySelector(".branding-cars-services").setAttribute("hidden", true);
    document.querySelector(".branding-cars-next").setAttribute("hidden", true);
    document.querySelector(".branding-cars form").removeAttribute("hidden");
  }
}

if (brandingCarsButtonNext !== null) {
  brandingCarsButtonNext.addEventListener("click", brandingCarsChangeContent);
}


// outdoor-advertising.html  section format-printing  //////////////////


var formatPrintingItems = document.querySelectorAll(".format-printing-services-item");
var formatPrintingIndicatorCircle = document.querySelectorAll(".format-printing-item-circle");
var formatPrintingButtonNext = document.querySelector(".format-printing-next");
var formatPrintingQuestionNumber = "question1";
var formatPrintingServiceNumber = document.querySelector(".format-printing-service-number");
var formatPrintingChooseServices = document.querySelector(".format-printing-service-name");
var formatPrintingItemsName = document.querySelectorAll(".format-printing-item-name");
var formatPrintingQuestion1 = "";
var formatPrintingAnswer1_1 = "";
var formatPrintingAnswer1_2 = "";
var formatPrintingAnswer1_3 = "";
var formatPrintingQuestion2 = "";
var formatPrintingAnswer2 = "";
var formatPrintingQuestion3 = "";
var formatPrintingAnswer3 = "";
var formatPrintingQuestion4 = "";
var formatPrintingAnswer4 = "";
var formatPrintingQuestion5 = "";
var formatPrintingAnswer5 = "";

function formatPrintingRemoveIndicatorCircleActive() {
  for (var i = 0; i < formatPrintingIndicatorCircle.length; i++) {
    formatPrintingIndicatorCircle[i].dataset.checked = false;
  }
}

function formatPrintingCheckIndicatorCircleActive() {
  for (var i = 0; i < formatPrintingIndicatorCircle.length; i++) {
    if (formatPrintingIndicatorCircle[i].dataset.checked === "true") {
      return i;
    }
  }
  alert("Выберите вариант ответа");
  return false;
}

if (formatPrintingItems.length > 0) {
  formatPrintingItems[0].addEventListener("click", function() {
    formatPrintingRemoveIndicatorCircleActive();
    formatPrintingIndicatorCircle[0].dataset.checked = true;
  });
  formatPrintingItems[1].addEventListener("click", function() {
    formatPrintingRemoveIndicatorCircleActive();
    formatPrintingIndicatorCircle[1].dataset.checked = true;
  });
  formatPrintingItems[2].addEventListener("click", function() {
    formatPrintingRemoveIndicatorCircleActive();
    formatPrintingIndicatorCircle[2].dataset.checked = true;
  });
  formatPrintingItems[3].addEventListener("click", function() {
    formatPrintingRemoveIndicatorCircleActive();
    formatPrintingIndicatorCircle[3].dataset.checked = true;
  });
  formatPrintingItems[4].addEventListener("click", function() {
    formatPrintingRemoveIndicatorCircleActive();
    formatPrintingIndicatorCircle[4].dataset.checked = true;
  });
  formatPrintingItems[5].addEventListener("click", function() {
    formatPrintingRemoveIndicatorCircleActive();
    formatPrintingIndicatorCircle[5].dataset.checked = true;
  });
  formatPrintingItems[6].addEventListener("click", function() {
    formatPrintingRemoveIndicatorCircleActive();
    formatPrintingIndicatorCircle[6].dataset.checked = true;
  });
}

function formatPrintingChangeContent() {
  if (formatPrintingQuestionNumber === "question1") {

    formatPrintingQuestion1 = formatPrintingChooseServices.innerHTML;
    var formatPrintingQuestion1Answers = document.querySelectorAll(".format-printing-item-name input[type='text']")
    if (formatPrintingQuestion1Answers[0].value &&
        formatPrintingQuestion1Answers[1].value &&
        formatPrintingQuestion1Answers[2].value) {
      formatPrintingAnswer1_1 = formatPrintingQuestion1Answers[0].value;
      formatPrintingAnswer1_2 = formatPrintingQuestion1Answers[1].value;
      formatPrintingAnswer1_3 = formatPrintingQuestion1Answers[2].value;
    } else {
      alert("Заполните данные");
      return;
    }
    formatPrintingServiceNumber.innerHTML = "2";
    formatPrintingChooseServices.innerHTML = "Материал для печати";
    formatPrintingItemsName[0].innerHTML = "Баннер 330, 440, 520, транслюцентный";
    formatPrintingItemsName[1].innerHTML = "Пленка матовая, глянцева, прозрачная, транслюцентная";
    formatPrintingItemsName[2].innerHTML = "Бумага, холст, обои, другое";
    formatPrintingItemsName[3].innerHTML = "Ламинация";
    formatPrintingIndicatorCircle[0].removeAttribute("hidden");
    formatPrintingIndicatorCircle[1].removeAttribute("hidden");
    formatPrintingIndicatorCircle[2].removeAttribute("hidden");
    formatPrintingItems[3].removeAttribute("hidden");
    formatPrintingQuestionNumber = "question2";
    formatPrintingRemoveIndicatorCircleActive();

  } else if (formatPrintingQuestionNumber === "question2") {

    formatPrintingQuestion2 = formatPrintingChooseServices.innerHTML;

    if (formatPrintingCheckIndicatorCircleActive() !== false) {
      formatPrintingAnswer2 = formatPrintingItemsName[formatPrintingCheckIndicatorCircleActive()].innerHTML;
    } else {
      return;
    }
    formatPrintingServiceNumber.innerHTML = "3";
    formatPrintingChooseServices.innerHTML = "Качество печати";
    formatPrintingItemsName[0].innerHTML = "Широкоформатное 720 dpi";
    formatPrintingItemsName[1].innerHTML = "Интерьерное 1440 dpi";
    formatPrintingItemsName[2].innerHTML = "Интерьерное улучшенное 2880 dpi";
    formatPrintingItems[3].setAttribute("hidden", true);
    formatPrintingQuestionNumber = "question3";
    formatPrintingRemoveIndicatorCircleActive();

  } else if (formatPrintingQuestionNumber === "question3") {

    formatPrintingQuestion3 = formatPrintingChooseServices.innerHTML;
    if (formatPrintingCheckIndicatorCircleActive() !== false) {
      formatPrintingAnswer3 = formatPrintingItemsName[formatPrintingCheckIndicatorCircleActive()].innerHTML;
    } else {
      return;
    }
    formatPrintingServiceNumber.innerHTML = "4";
    formatPrintingChooseServices.innerHTML = "Есть ли макет (тиф, корел, фотошоп)?";
    formatPrintingItemsName[0].innerHTML = "Да (приложите макет в конце опроса)";
    formatPrintingItemsName[1].innerHTML = "Нет";
    formatPrintingItems[2].setAttribute("hidden", true);
    formatPrintingItems[3].setAttribute("hidden", true);
    formatPrintingQuestionNumber = "question4";
    formatPrintingRemoveIndicatorCircleActive();

  } else if (formatPrintingQuestionNumber === "question4") {

    formatPrintingQuestion4 = formatPrintingChooseServices.innerHTML;
    if (formatPrintingCheckIndicatorCircleActive() !== false) {
      formatPrintingAnswer4 = formatPrintingItemsName[formatPrintingCheckIndicatorCircleActive()].innerHTML;
    } else {
      return;
    }
    formatPrintingServiceNumber.innerHTML = "5";
    formatPrintingChooseServices.innerHTML = "Нужна ли доставка заказа";
    formatPrintingItemsName[0].innerHTML = "Самовывоз ул. Селезнева 4/10";
    formatPrintingItemsName[1].innerHTML = 'Доставка<br><textarea id="textarea1" name="" value="" placeholder="Указать адрес" cols="30"></textarea>';
    formatPrintingItemsName[2].innerHTML = 'Монтаж<br><textarea id="textarea2" name="" value="" placeholder="Указать адрес и желаемое время" cols="30"></textarea>';
    formatPrintingItems[2].removeAttribute("hidden");
    formatPrintingQuestionNumber = "question5";
    formatPrintingRemoveIndicatorCircleActive()

  } else if (formatPrintingQuestionNumber === "question5") {

    formatPrintingQuestion5 = formatPrintingChooseServices.innerHTML;
    if (formatPrintingCheckIndicatorCircleActive() !== false) {
      if (formatPrintingCheckIndicatorCircleActive() === 0) {
        formatPrintingAnswer5 =  formatPrintingItemsName[formatPrintingCheckIndicatorCircleActive()].innerHTML;
      } else if ((formatPrintingCheckIndicatorCircleActive() === 1) &&
                  (document.querySelector(".format-printing-item-name #textarea1").value)) {
          formatPrintingAnswer5 = "Доставка " + document.querySelector(".format-printing-item-name #textarea1").value;
      } else if ((formatPrintingCheckIndicatorCircleActive() === 2) &&
                  (document.querySelector(".format-printing-item-name #textarea2").value)) {
          formatPrintingAnswer5 = "Монтаж " + document.querySelector(".format-printing-item-name #textarea2").value;
      } else {
        alert("Заполните данные");
        return;
    }
  } else {
    return;
  }
  document.querySelector(".format-printing-choose-services").setAttribute("hidden", true);
  document.querySelector(".format-printing-services").setAttribute("hidden", true);
  document.querySelector(".format-printing-next").setAttribute("hidden", true);
  document.querySelector(".format-printing form").removeAttribute("hidden");
} }

if (formatPrintingButtonNext !== null) {
  formatPrintingButtonNext.addEventListener("click", formatPrintingChangeContent);
}


// polygraphy.html section services-tablets  //////////////////


var servicesTabletsItems = document.querySelectorAll(".services-tablets-services-item");
var servicesTabletsIndicatorCircle = document.querySelectorAll(".services-tablets-item-circle");
var servicesTabletsButtonNext = document.querySelector(".services-tablets-next");
var servicesTabletsQuestionNumber = "question1";
var servicesTabletsServiceNumber = document.querySelector(".services-tablets-service-number");
var servicesTabletsChooseServices = document.querySelector(".services-tablets-service-name");
var servicesTabletsItemsName = document.querySelectorAll(".services-tablets-item-name");
var servicesTabletsQuestion1 = "";
var servicesTabletsAnswer1_1 = "";
var servicesTabletsAnswer1_2 = "";
var servicesTabletsAnswer1_3 = "";
var servicesTabletsAnswer1_4 = "";
var servicesTabletsQuestion2 = "";
var servicesTabletsAnswer2 = "";
var servicesTabletsQuestion3 = "";
var servicesTabletsAnswer3 = "";
var servicesTabletsQuestion4 = "";
var servicesTabletsAnswer4 = "";

function servicesTabletsRemoveIndicatorCircleActive() {
  for (var i = 0; i < servicesTabletsIndicatorCircle.length; i++) {
    servicesTabletsIndicatorCircle[i].dataset.checked = false;
  }
}

function servicesTabletsCheckIndicatorCircleActive() {
  for (var i = 0; i < servicesTabletsIndicatorCircle.length; i++) {
    if (servicesTabletsIndicatorCircle[i].dataset.checked === "true") {
      return i;
    }
  }
  alert("Выберите вариант ответа");
  return false;
}

if (servicesTabletsItems.length > 0) {
  servicesTabletsItems[0].addEventListener("click", function() {
    servicesTabletsRemoveIndicatorCircleActive();
    servicesTabletsIndicatorCircle[0].dataset.checked = true;
  });
  servicesTabletsItems[1].addEventListener("click", function() {
    servicesTabletsRemoveIndicatorCircleActive();
    servicesTabletsIndicatorCircle[1].dataset.checked = true;
  });
  servicesTabletsItems[2].addEventListener("click", function() {
    servicesTabletsRemoveIndicatorCircleActive();
    servicesTabletsIndicatorCircle[2].dataset.checked = true;
  });
  servicesTabletsItems[3].addEventListener("click", function() {
    servicesTabletsRemoveIndicatorCircleActive();
    servicesTabletsIndicatorCircle[3].dataset.checked = true;
  });
  servicesTabletsItems[4].addEventListener("click", function() {
    servicesTabletsRemoveIndicatorCircleActive();
    servicesTabletsIndicatorCircle[4].dataset.checked = true;
  });
  servicesTabletsItems[5].addEventListener("click", function() {
    servicesTabletsRemoveIndicatorCircleActive();
    servicesTabletsIndicatorCircle[5].dataset.checked = true;
  });
  servicesTabletsItems[6].addEventListener("click", function() {
    servicesTabletsRemoveIndicatorCircleActive();
    servicesTabletsIndicatorCircle[6].dataset.checked = true;
  });
}

function servicesTabletsChangeContent() {
  if (servicesTabletsQuestionNumber === "question1") {

    servicesTabletsQuestion1 = servicesTabletsChooseServices.innerHTML;

    var servicesTabletsQuestion1Answers = document.querySelectorAll(".services-tablets-item-name input[type='text']");
    if (servicesTabletsQuestion1Answers[0].value &&
        servicesTabletsQuestion1Answers[1].value &&
        servicesTabletsQuestion1Answers[2].value &&
        servicesTabletsQuestion1Answers[3].value) {
      servicesTabletsAnswer1_1 = servicesTabletsQuestion1Answers[0].value;
      servicesTabletsAnswer1_2 = servicesTabletsQuestion1Answers[1].value;
      servicesTabletsAnswer1_3 = servicesTabletsQuestion1Answers[2].value;
      servicesTabletsAnswer1_4 = servicesTabletsQuestion1Answers[3].value;
    } else {
      alert("Заполните данные");
      return;
    }

    servicesTabletsServiceNumber.innerHTML = "2";
    servicesTabletsChooseServices.innerHTML = "Материал для изготовления основы";
    servicesTabletsItemsName[0].innerHTML = "Пластик";
    servicesTabletsItemsName[1].innerHTML = "Акрил";
    servicesTabletsItemsName[2].innerHTML = "Композит";
    servicesTabletsItemsName[3].innerHTML = "Цинк";
    servicesTabletsIndicatorCircle[0].removeAttribute("hidden", true);
    servicesTabletsIndicatorCircle[1].removeAttribute("hidden", true);
    servicesTabletsIndicatorCircle[2].removeAttribute("hidden", true);
    servicesTabletsIndicatorCircle[3].removeAttribute("hidden", true);
    servicesTabletsQuestionNumber = "question2";
    servicesTabletsRemoveIndicatorCircleActive();

  } else if (servicesTabletsQuestionNumber === "question2") {

    servicesTabletsQuestion2 = servicesTabletsChooseServices.innerHTML;
    if (servicesTabletsCheckIndicatorCircleActive() !== false) {
      servicesTabletsAnswer2 = servicesTabletsItemsName[servicesTabletsCheckIndicatorCircleActive()].innerHTML;
    } else {
      return;
    }
    servicesTabletsServiceNumber.innerHTML = "3";
    servicesTabletsChooseServices.innerHTML = "Качество изготовления";
    servicesTabletsItemsName[0].innerHTML = "Эконом";
    servicesTabletsItemsName[1].innerHTML = "Стандарт";
    servicesTabletsItemsName[2].innerHTML = "Вип";
    servicesTabletsItems[3].setAttribute("hidden", true);
    servicesTabletsQuestionNumber = "question3";
    servicesTabletsRemoveIndicatorCircleActive();

  } else if (servicesTabletsQuestionNumber === "question3") {

    servicesTabletsQuestion3 = servicesTabletsChooseServices.innerHTML;
    if (servicesTabletsCheckIndicatorCircleActive() !== false) {
      servicesTabletsAnswer3 = servicesTabletsItemsName[servicesTabletsCheckIndicatorCircleActive()].innerHTML;
    } else {
      return;
    }
    servicesTabletsServiceNumber.innerHTML = "4";
    servicesTabletsChooseServices.innerHTML = "Нужна ли доставка заказа";
    servicesTabletsItemsName[0].innerHTML = "Да (приложите макет в конце опроса)";
    servicesTabletsItemsName[1].innerHTML = "Нет";
    servicesTabletsItems[2].setAttribute("hidden", true);
    servicesTabletsQuestionNumber = "question4";
    servicesTabletsRemoveIndicatorCircleActive();

  } else if (servicesTabletsQuestionNumber === "question4") {

    servicesTabletsQuestion4 = servicesTabletsChooseServices.innerHTML;
    if (servicesTabletsCheckIndicatorCircleActive() !== false) {
      servicesTabletsAnswer4 = servicesTabletsItemsName[servicesTabletsCheckIndicatorCircleActive()].innerHTML;
    } else {
      return;
    }
    servicesTabletsServiceNumber.innerHTML = "5";
    servicesTabletsChooseServices.innerHTML = "Нужна ли доставка заказа и монтаж";
    servicesTabletsItemsName[0].innerHTML = "Самовывоз ул. Селезнева 4/10";
    servicesTabletsItemsName[1].innerHTML = 'Доставка<br><textarea id="textarea1" name="" value="" placeholder="Указать адрес" cols="30"></textarea>';
    servicesTabletsItemsName[2].innerHTML = 'Доставка<br><textarea id="textarea2" name="" value="" placeholder="Указать адрес" cols="30"></textarea>';
    servicesTabletsItems[2].removeAttribute("hidden");
    servicesTabletsQuestionNumber = "question5";
    servicesTabletsRemoveIndicatorCircleActive();
  } else if (servicesTabletsQuestionNumber === "question5") {

    servicesTabletsQuestion5 = servicesTabletsChooseServices.innerHTML;
    if (servicesTabletsCheckIndicatorCircleActive() !== false) {
      if (servicesTabletsCheckIndicatorCircleActive() === 0) {
        servicesTabletsAnswer5 = servicesTabletsItemsName[servicesTabletsCheckIndicatorCircleActive()].innerHTML;
      } else if ((servicesTabletsCheckIndicatorCircleActive() === 1) &&
                  document.querySelector(".services-tablets-item-name #textarea1").value ) {
          servicesTabletsAnswer5 = "Доставка " + document.querySelector(".services-tablets-item-name #textarea1").value;
      } else if ((servicesTabletsCheckIndicatorCircleActive() === 2) &&
                  document.querySelector(".services-tablets-item-name #textarea2").value ) {
          servicesTabletsAnswer5 = "Монтаж " + document.querySelector(".services-tablets-item-name #textarea2").value;
      } else {
        alert("Заполните данные");
        return;
    }
  } else {
    return;
    }
  document.querySelector(".services-tablets-choose-services").setAttribute("hidden", true);
  document.querySelector(".services-tablets-services").setAttribute("hidden", true);
  document.querySelector(".services-tablets-next").setAttribute("hidden", true);
  document.querySelector(".services-tablets form").removeAttribute("hidden");
  } }

if (servicesTabletsButtonNext !== null) {
  servicesTabletsButtonNext.addEventListener("click", servicesTabletsChangeContent);
}


// souvenirs.html section souvenirs-promo  //////////////////

var souvenirsPromoItems = document.querySelectorAll(".souvenirs-promo-services-item");
var souvenirsPromoIndicatorCircle = document.querySelectorAll(".souvenirs-promo-item-circle");
var souvenirsPromoButtonNext = document.querySelector(".souvenirs-promo-next");
var souvenirsPromoQuestionNumber = "question1";
var souvenirsPromoServiceNumber = document.querySelector(".souvenirs-promo-service-number");
var souvenirsPromoChooseServices = document.querySelector(".souvenirs-promo-service-name");
var souvenirsPromoItemsName = document.querySelectorAll(".souvenirs-promo-item-name");
var souvenirsPromoQuestion1 = "";
var souvenirsPromoAnswer1 = "";
var souvenirsPromoQuestion2 = "";
var souvenirsPromoAnswer2 = "";
var souvenirsPromoQuestion3 = "";
var souvenirsPromoAnswer3 = "";
var souvenirsPromoQuestion4 = "";
var souvenirsPromoAnswer4 = "";
var souvenirsPromoQuestion5 = "";
var souvenirsPromoAnswer5 = "";

function souvenirsPromoRemoveIndicatorCircleActive() {
  for (var i = 0; i < souvenirsPromoIndicatorCircle.length; i++) {
    souvenirsPromoIndicatorCircle[i].dataset.checked = false;
  }
}

function souvenirsPromoCheckIndicatorCircleActive() {
  for (var i = 0; i < souvenirsPromoIndicatorCircle.length; i++) {
    if (souvenirsPromoIndicatorCircle[i].dataset.checked === "true") {
      return i;
    }
  }
  alert("Выберите вариант ответа");
  return false;
}

if (souvenirsPromoItems.length > 0) {
  souvenirsPromoItems[0].addEventListener("click", function() {
    souvenirsPromoRemoveIndicatorCircleActive();
    souvenirsPromoIndicatorCircle[0].dataset.checked = true;
  });
  souvenirsPromoItems[1].addEventListener("click", function() {
    souvenirsPromoRemoveIndicatorCircleActive();
    souvenirsPromoIndicatorCircle[1].dataset.checked = true;
  });
  souvenirsPromoItems[2].addEventListener("click", function() {
    souvenirsPromoRemoveIndicatorCircleActive();
    souvenirsPromoIndicatorCircle[2].dataset.checked = true;
  });
  souvenirsPromoItems[3].addEventListener("click", function() {
    souvenirsPromoRemoveIndicatorCircleActive();
    souvenirsPromoIndicatorCircle[3].dataset.checked = true;
  });
  souvenirsPromoItems[4].addEventListener("click", function() {
    souvenirsPromoRemoveIndicatorCircleActive();
    souvenirsPromoIndicatorCircle[4].dataset.checked = true;
  });
  souvenirsPromoItems[5].addEventListener("click", function() {
    souvenirsPromoRemoveIndicatorCircleActive();
    souvenirsPromoIndicatorCircle[5].dataset.checked = true;
  });
  souvenirsPromoItems[6].addEventListener("click", function() {
    souvenirsPromoRemoveIndicatorCircleActive();
    souvenirsPromoIndicatorCircle[6].dataset.checked = true;
  });
}

function souvenirsPromoChangeContent() {
  if (souvenirsPromoQuestionNumber === "question1") {

    souvenirsPromoQuestion1 = souvenirsPromoChooseServices.innerHTML;
    if (souvenirsPromoCheckIndicatorCircleActive() !== false) {
      souvenirsPromoAnswer1 = souvenirsPromoItemsName[souvenirsPromoCheckIndicatorCircleActive()].innerHTML;
    } else {
      return;
    }
    souvenirsPromoServiceNumber.innerHTML = "2";
    souvenirsPromoChooseServices.innerHTML = "Предполагаемый тираж";
    souvenirsPromoItemsName[0].innerHTML = '<input type="text" name="" value="" placeholder="Укажите тираж" size="30px">'
    souvenirsPromoItems[1].setAttribute("hidden", true);
    souvenirsPromoItems[2].setAttribute("hidden", true);
    souvenirsPromoItems[3].setAttribute("hidden", true);
    souvenirsPromoItems[4].setAttribute("hidden", true);
    souvenirsPromoItems[5].setAttribute("hidden", true);
    souvenirsPromoItems[6].setAttribute("hidden", true);
    souvenirsPromoIndicatorCircle[0].setAttribute("hidden", true);
    souvenirsPromoQuestionNumber = "question2";
    souvenirsPromoRemoveIndicatorCircleActive();

  } else if (souvenirsPromoQuestionNumber === "question2") {

    souvenirsPromoQuestion2 = souvenirsPromoChooseServices.innerHTML;
    if (document.querySelector(".souvenirs-promo-item-name input[type='text']").value) {
      souvenirsPromoAnswer2 = document.querySelector(".souvenirs-promo-item-name input[type='text']").value;
    } else {
      alert("Заполните данные");
      return;
    }
    souvenirsPromoServiceNumber.innerHTML = "3";
    souvenirsPromoChooseServices.innerHTML = "Необходимо ли нанесение логотипа";
    souvenirsPromoItemsName[0].innerHTML = "Да";
    souvenirsPromoItemsName[1].innerHTML = "Нет";
    souvenirsPromoItemsName[2].innerHTML = "Не опредились";
    souvenirsPromoItems[1].removeAttribute("hidden");
    souvenirsPromoItems[2].removeAttribute("hidden");
    souvenirsPromoIndicatorCircle[0].removeAttribute("hidden");
    souvenirsPromoQuestionNumber = "question3";
    souvenirsPromoRemoveIndicatorCircleActive()

  } else if (souvenirsPromoQuestionNumber === "question3") {

    souvenirsPromoQuestion3 = souvenirsPromoChooseServices.innerHTML;
    if (souvenirsPromoCheckIndicatorCircleActive() !== false) {
      souvenirsPromoAnswer3 = souvenirsPromoItemsName[souvenirsPromoCheckIndicatorCircleActive()].innerHTML;
    } else {
      return;
    }
    souvenirsPromoServiceNumber.innerHTML = "4";
    souvenirsPromoChooseServices.innerHTML = "Есть ли макет (тиф, корел, фотошоп)?";
    souvenirsPromoItemsName[0].innerHTML = "Да (приложите макет в конце опроса)";
    souvenirsPromoItemsName[1].innerHTML = "Нет";
    souvenirsPromoItems[2].setAttribute("hidden", true);
    souvenirsPromoQuestionNumber = "question4";
    souvenirsPromoRemoveIndicatorCircleActive()

  } else if (souvenirsPromoQuestionNumber === "question4") {

    souvenirsPromoQuestion4 = souvenirsPromoChooseServices.innerHTML;
    if (souvenirsPromoCheckIndicatorCircleActive() !== false) {
      souvenirsPromoAnswer4 = souvenirsPromoItemsName[souvenirsPromoCheckIndicatorCircleActive()].innerHTML;
    } else {
      return;
    }
    souvenirsPromoServiceNumber.innerHTML = "5";
    souvenirsPromoChooseServices.innerHTML = "Нужна ли доставка заказа";
    souvenirsPromoItemsName[0].innerHTML = "Самовывоз ул. Селезнева 4/10";
    souvenirsPromoItemsName[1].innerHTML = 'Доставка<br><textarea name="" value="" placeholder="Указать адрес" cols="30"></textarea>';

    souvenirsPromoQuestionNumber = "question5";
    souvenirsPromoRemoveIndicatorCircleActive()

  } else if (souvenirsPromoQuestionNumber === "question5") {

    souvenirsPromoQuestion5 = souvenirsPromoChooseServices.innerHTML;
    if (souvenirsPromoCheckIndicatorCircleActive() !== false) {
      if (souvenirsPromoCheckIndicatorCircleActive() === 0) {
        souvenirsPromoAnswer5 = souvenirsPromoItemsName[souvenirsPromoCheckIndicatorCircleActive()].innerHTML;
      } else if ((souvenirsPromoCheckIndicatorCircleActive() === 1) &&
                (document.querySelector(".souvenirs-promo-item-name textarea").value)) {
          souvenirsPromoAnswer5 = document.querySelector(".souvenirs-promo-item-name textarea").value;
      } else {
        alert("Заполните данные");
        return;
    }
  } else {
    return;
  }
  document.querySelector(".souvenirs-promo-choose-services").setAttribute("hidden", true);
  document.querySelector(".souvenirs-promo-services").setAttribute("hidden", true);
  document.querySelector(".souvenirs-promo-next").setAttribute("hidden", true);
  document.querySelector(".souvenirs-promo form").removeAttribute("hidden");
}}

if (souvenirsPromoButtonNext !== null) {
  souvenirsPromoButtonNext.addEventListener("click", souvenirsPromoChangeContent);
}


// polygraphy.html section souvenirs-business  //////////////////

var souvenirsBusinessItems = document.querySelectorAll(".souvenirs-business-services-item");
var souvenirsBusinessIndicatorCircle = document.querySelectorAll(".souvenirs-business-item-circle");
var souvenirsBusinessButtonNext = document.querySelector(".souvenirs-business-next");
var souvenirsBusinessQuestionNumber = "question1";
var souvenirsBusinessServiceNumber = document.querySelector(".souvenirs-business-service-number");
var souvenirsBusinessChooseServices = document.querySelector(".souvenirs-business-service-name");
var souvenirsBusinessItemsName = document.querySelectorAll(".souvenirs-business-item-name");
var souvenirsBusinessQuestion1 = "";
var souvenirsBusinessAnswer1 = "";
var souvenirsBusinessQuestion2 = "";
var souvenirsBusinessAnswer2 = "";
var souvenirsBusinessQuestion3 = "";
var souvenirsBusinessAnswer3 = "";
var souvenirsBusinessQuestion4 = "";
var souvenirsBusinessAnswer4 = "";
var souvenirsBusinessQuestion5 = "";
var souvenirsBusinessAnswer5 = "";

function souvenirsBusinessRemoveIndicatorCircleActive() {
  for (var i = 0; i < souvenirsBusinessIndicatorCircle.length; i++) {
    souvenirsBusinessIndicatorCircle[i].dataset.checked = false;
  }
}

function souvenirsBusinessCheckIndicatorCircleActive() {
  for (var i = 0; i < souvenirsBusinessIndicatorCircle.length; i++) {
    if (souvenirsBusinessIndicatorCircle[i].dataset.checked === "true") {
      return i;
    }
  }
  alert("Выберите вариант ответа");
  return false;
}

if (souvenirsBusinessItems.length > 0) {
  souvenirsBusinessItems[0].addEventListener("click", function() {
    souvenirsBusinessRemoveIndicatorCircleActive();
    souvenirsBusinessIndicatorCircle[0].dataset.checked = true;
  });
  souvenirsBusinessItems[1].addEventListener("click", function() {
    souvenirsBusinessRemoveIndicatorCircleActive();
    souvenirsBusinessIndicatorCircle[1].dataset.checked = true;
  });
  souvenirsBusinessItems[2].addEventListener("click", function() {
    souvenirsBusinessRemoveIndicatorCircleActive();
    souvenirsBusinessIndicatorCircle[2].dataset.checked = true;
  });
  souvenirsBusinessItems[3].addEventListener("click", function() {
    souvenirsBusinessRemoveIndicatorCircleActive();
    souvenirsBusinessIndicatorCircle[3].dataset.checked = true;
  });
  souvenirsBusinessItems[4].addEventListener("click", function() {
    souvenirsBusinessRemoveIndicatorCircleActive();
    souvenirsBusinessIndicatorCircle[4].dataset.checked = true;
  });
  souvenirsBusinessItems[5].addEventListener("click", function() {
    souvenirsBusinessRemoveIndicatorCircleActive();
    souvenirsBusinessIndicatorCircle[5].dataset.checked = true;
  });
  souvenirsBusinessItems[6].addEventListener("click", function() {
    souvenirsBusinessRemoveIndicatorCircleActive();
    souvenirsBusinessIndicatorCircle[6].dataset.checked = true;
  });
  souvenirsBusinessItems[7].addEventListener("click", function() {
    souvenirsBusinessRemoveIndicatorCircleActive();
    souvenirsBusinessIndicatorCircle[7].dataset.checked = true;
  });
}

function souvenirsBusinessChangeContent() {
  if (souvenirsBusinessQuestionNumber === "question1") {

    souvenirsBusinessQuestion1 = souvenirsBusinessChooseServices.innerHTML;
    if (souvenirsBusinessCheckIndicatorCircleActive() !== false) {
      souvenirsBusinessAnswer1 = souvenirsBusinessItemsName[souvenirsBusinessCheckIndicatorCircleActive()].innerHTML;
    } else {
      return;
    }
    souvenirsBusinessServiceNumber.innerHTML = "2";
    souvenirsBusinessChooseServices.innerHTML = "Предполагаемый тираж";
    souvenirsBusinessItemsName[0].innerHTML = '<input type="text" name="" value="" placeholder="Укажите тираж" size="30px">'
    souvenirsBusinessItems[1].setAttribute("hidden", true);
    souvenirsBusinessItems[2].setAttribute("hidden", true);
    souvenirsBusinessItems[3].setAttribute("hidden", true);
    souvenirsBusinessItems[4].setAttribute("hidden", true);
    souvenirsBusinessItems[5].setAttribute("hidden", true);
    souvenirsBusinessItems[6].setAttribute("hidden", true);
    souvenirsBusinessItems[7].setAttribute("hidden", true);
    souvenirsBusinessIndicatorCircle[0].setAttribute("hidden", true);
    souvenirsBusinessQuestionNumber = "question2";
    souvenirsBusinessRemoveIndicatorCircleActive()

  } else if (souvenirsBusinessQuestionNumber === "question2") {
    souvenirsBusinessQuestion2 = souvenirsBusinessChooseServices.innerHTML;
    if (document.querySelector(".souvenirs-business-item-name input[type='text']").value) {
      souvenirsBusinessAnswer2 = document.querySelector(".souvenirs-business-item-name input[type='text']").value;
    } else {
      alert("Заполните данные");
      return;
    }
    souvenirsBusinessServiceNumber.innerHTML = "3";
    souvenirsBusinessChooseServices.innerHTML = "Необходимо ли нанесение логотипа";
    souvenirsBusinessItemsName[0].innerHTML = "Да";
    souvenirsBusinessItemsName[1].innerHTML = "Нет";
    souvenirsBusinessItemsName[2].innerHTML = "Не опредились";
    souvenirsBusinessItems[1].removeAttribute("hidden");
    souvenirsBusinessItems[2].removeAttribute("hidden");
    souvenirsBusinessIndicatorCircle[0].removeAttribute("hidden");
    souvenirsBusinessQuestionNumber = "question3";
    souvenirsBusinessRemoveIndicatorCircleActive()

  } else if (souvenirsBusinessQuestionNumber === "question3") {

    souvenirsBusinessQuestion3 = souvenirsBusinessChooseServices.innerHTML;
    if (souvenirsBusinessCheckIndicatorCircleActive() !== false) {
      souvenirsBusinessAnswer3 = souvenirsBusinessItemsName[souvenirsBusinessCheckIndicatorCircleActive()].innerHTML;
    } else {
      return;
    }
    souvenirsBusinessServiceNumber.innerHTML = "4";
    souvenirsBusinessChooseServices.innerHTML = "Есть ли макет (тиф, корел, фотошоп)?";
    souvenirsBusinessItemsName[0].innerHTML = "Да (приложите макет в конце опроса)";
    souvenirsBusinessItemsName[1].innerHTML = "Нет";
    souvenirsBusinessItems[2].setAttribute("hidden", true);
    souvenirsBusinessQuestionNumber = "question4";
    souvenirsBusinessRemoveIndicatorCircleActive()

  } else if (souvenirsBusinessQuestionNumber === "question4") {

    souvenirsBusinessQuestion4 = souvenirsBusinessChooseServices.innerHTML;
    if (souvenirsBusinessCheckIndicatorCircleActive() !== false) {
      souvenirsBusinessAnswer4 = souvenirsBusinessItemsName[souvenirsBusinessCheckIndicatorCircleActive()].innerHTML;
    } else {
      return;
    }
    souvenirsBusinessServiceNumber.innerHTML = "5";
    souvenirsBusinessChooseServices.innerHTML = "Нужна ли доставка заказа";
    souvenirsBusinessItemsName[0].innerHTML = "Самовывоз ул. Селезнева 4/10";
    souvenirsBusinessItemsName[1].innerHTML = 'Доставка<br><textarea name="" value="" placeholder="Указать адрес" cols="30"></textarea>';
    souvenirsBusinessQuestionNumber = "question5";
    souvenirsBusinessRemoveIndicatorCircleActive()
  } else if (souvenirsBusinessQuestionNumber === "question5") {

    souvenirsBusinessQuestion5 = souvenirsBusinessChooseServices.innerHTML;
    if (souvenirsBusinessCheckIndicatorCircleActive() !== false) {
      if (souvenirsBusinessCheckIndicatorCircleActive() === 0) {
        souvenirsBusinessAnswer5 = souvenirsBusinessItemsName[souvenirsBusinessCheckIndicatorCircleActive()].innerHTML;
      } else if ((souvenirsBusinessCheckIndicatorCircleActive() === 1) &&
                (document.querySelector(".souvenirs-business-item-name textarea").value)) {
          souvenirsBusinessAnswer5 = document.querySelector(".souvenirs-business-item-name textarea").value;
      } else {
        alert("Заполните данные");
        return;
    }
    } else {
    return;
    }
    document.querySelector(".souvenirs-business-choose-services").setAttribute("hidden", true);
    document.querySelector(".souvenirs-business-services").setAttribute("hidden", true);
    document.querySelector(".souvenirs-business-next").setAttribute("hidden", true);
    document.querySelector(".souvenirs-business form").removeAttribute("hidden");
  }
}

if (souvenirsBusinessButtonNext !== null) {
  souvenirsBusinessButtonNext.addEventListener("click", souvenirsBusinessChangeContent);
}


// polygraphy.html section souvenirs-vip  //////////////////


var souvenirsVipItems = document.querySelectorAll(".souvenirs-vip-services-item");
var souvenirsVipIndicatorCircle = document.querySelectorAll(".souvenirs-vip-item-circle");
var souvenirsVipButtonNext = document.querySelector(".souvenirs-vip-next");
var souvenirsVipQuestionNumber = "question1";
var souvenirsVipServiceNumber = document.querySelector(".souvenirs-vip-service-number");
var souvenirsVipChooseServices = document.querySelector(".souvenirs-vip-service-name");
var souvenirsVipItemsName = document.querySelectorAll(".souvenirs-vip-item-name");
var souvenirsVipQuestion1 = "";
var souvenirsVipAnswer1 = "";
var souvenirsVipQuestion2 = "";
var souvenirsVipAnswer2 = "";
var souvenirsVipQuestion3 = "";
var souvenirsVipAnswer3 = "";
var souvenirsVipQuestion4 = "";
var souvenirsVipAnswer4 = "";
var souvenirsVipQuestion5 = "";
var souvenirsVipAnswer5 = "";

function souvenirsVipRemoveIndicatorCircleActive() {
  for (var i = 0; i < souvenirsVipIndicatorCircle.length; i++) {
    souvenirsVipIndicatorCircle[i].dataset.checked = false;
  }
}

function souvenirsVipCheckIndicatorCircleActive() {
  for (var i = 0; i < souvenirsVipIndicatorCircle.length; i++) {
    if (souvenirsVipIndicatorCircle[i].dataset.checked === "true") {
      return i;
    }
  }
  alert("Выберите вариант ответа");
  return false;
}

if (souvenirsVipItems.length > 0) {
  souvenirsVipItems[0].addEventListener("click", function() {
    souvenirsVipRemoveIndicatorCircleActive();
    souvenirsVipIndicatorCircle[0].dataset.checked = true;
  });
  souvenirsVipItems[1].addEventListener("click", function() {
    souvenirsVipRemoveIndicatorCircleActive();
    souvenirsVipIndicatorCircle[1].dataset.checked = true;
  });
  souvenirsVipItems[2].addEventListener("click", function() {
    souvenirsVipRemoveIndicatorCircleActive();
    souvenirsVipIndicatorCircle[2].dataset.checked = true;
  });
  souvenirsVipItems[3].addEventListener("click", function() {
    souvenirsVipRemoveIndicatorCircleActive();
    souvenirsVipIndicatorCircle[3].dataset.checked = true;
  });
  souvenirsVipItems[4].addEventListener("click", function() {
    souvenirsVipRemoveIndicatorCircleActive();
    souvenirsVipIndicatorCircle[4].dataset.checked = true;
  });
  souvenirsVipItems[5].addEventListener("click", function() {
    souvenirsVipRemoveIndicatorCircleActive();
    souvenirsVipIndicatorCircle[5].dataset.checked = true;
  });
  souvenirsVipItems[6].addEventListener("click", function() {
    souvenirsVipRemoveIndicatorCircleActive();
    souvenirsVipIndicatorCircle[6].dataset.checked = true;
  });
  souvenirsVipItems[7].addEventListener("click", function() {
    souvenirsVipRemoveIndicatorCircleActive();
    souvenirsVipIndicatorCircle[7].dataset.checked = true;
  });
}

function souvenirsVipChangeContent() {
  if (souvenirsVipQuestionNumber === "question1") {

    souvenirsVipQuestion1 = souvenirsVipChooseServices.innerHTML;
    if (souvenirsVipCheckIndicatorCircleActive() !== false) {
      souvenirsVipAnswer1 = souvenirsVipItemsName[souvenirsVipCheckIndicatorCircleActive()].innerHTML;
    } else {
      return;
    }
    souvenirsVipServiceNumber.innerHTML = "2";
    souvenirsVipChooseServices.innerHTML = "Предполагаемый тираж";
    souvenirsVipItemsName[0].innerHTML = '<input type="text" name="" value="" placeholder="Укажите тираж" size="30px">'
    souvenirsVipItems[1].setAttribute("hidden", true);
    souvenirsVipItems[2].setAttribute("hidden", true);
    souvenirsVipItems[3].setAttribute("hidden", true);
    souvenirsVipItems[4].setAttribute("hidden", true);
    souvenirsVipItems[5].setAttribute("hidden", true);
    souvenirsVipItems[6].setAttribute("hidden", true);
    souvenirsVipItems[7].setAttribute("hidden", true);
    souvenirsVipIndicatorCircle[0].setAttribute("hidden", true);
    souvenirsVipQuestionNumber = "question2";
    souvenirsVipRemoveIndicatorCircleActive()

  } else if (souvenirsVipQuestionNumber === "question2") {

    souvenirsVipQuestion2 = souvenirsVipChooseServices.innerHTML;
    if (document.querySelector(".souvenirs-vip-item-name input[type='text']").value) {
      souvenirsVipAnswer2 = document.querySelector(".souvenirs-vip-item-name input[type='text']").value;
    } else {
      alert("Заполните данные");
      return;
    }
    souvenirsVipServiceNumber.innerHTML = "3";
    souvenirsVipChooseServices.innerHTML = "Необходимо ли нанесение логотипа";
    souvenirsVipItemsName[0].innerHTML = "Да";
    souvenirsVipItemsName[1].innerHTML = "Нет";
    souvenirsVipItemsName[2].innerHTML = "Не опредились";
    souvenirsVipItems[1].removeAttribute("hidden");
    souvenirsVipItems[2].removeAttribute("hidden");
    souvenirsVipIndicatorCircle[0].removeAttribute("hidden");
    souvenirsVipQuestionNumber = "question3";
    souvenirsVipRemoveIndicatorCircleActive()

  } else if (souvenirsVipQuestionNumber === "question3") {

    souvenirsVipQuestion3 = souvenirsVipChooseServices.innerHTML;
    if (souvenirsVipCheckIndicatorCircleActive() !== false) {
      souvenirsVipAnswer3 = souvenirsVipItemsName[souvenirsVipCheckIndicatorCircleActive()].innerHTML;
    } else {
      return;
    }
    souvenirsVipServiceNumber.innerHTML = "4";
    souvenirsVipChooseServices.innerHTML = "Есть ли макет (тиф, корел, фотошоп)?";
    souvenirsVipItemsName[0].innerHTML = "Да (приложите макет в конце опроса)";
    souvenirsVipItemsName[1].innerHTML = "Нет";
    souvenirsVipItems[2].setAttribute("hidden", true);
    souvenirsVipQuestionNumber = "question4";
    souvenirsVipRemoveIndicatorCircleActive()

  } else if (souvenirsVipQuestionNumber === "question4") {

    souvenirsVipQuestion4 = souvenirsVipChooseServices.innerHTML;
    if (souvenirsVipCheckIndicatorCircleActive() !== false) {
      souvenirsVipAnswer4 = souvenirsVipItemsName[souvenirsVipCheckIndicatorCircleActive()].innerHTML;
    } else {
      return;
    }
    souvenirsVipServiceNumber.innerHTML = "5";
    souvenirsVipChooseServices.innerHTML = "Нужна ли доставка заказа";
    souvenirsVipItemsName[0].innerHTML = "Самовывоз ул. Селезнева 4/10";
    souvenirsVipItemsName[1].innerHTML = 'Доставка<br><textarea name="" value="" placeholder="Указать адрес" cols="30"></textarea>';
    souvenirsVipQuestionNumber = "question5";
    souvenirsVipRemoveIndicatorCircleActive()

  } else if (souvenirsVipQuestionNumber === "question5") {

    souvenirsVipQuestion5 = souvenirsVipChooseServices.innerHTML;
    if (souvenirsVipCheckIndicatorCircleActive() !== false) {
      if (souvenirsVipCheckIndicatorCircleActive() === 0) {
        souvenirsVipAnswer5 = souvenirsVipItemsName[souvenirsVipCheckIndicatorCircleActive()].innerHTML;
      } else if ((souvenirsVipCheckIndicatorCircleActive() === 1) &&
                (document.querySelector(".souvenirs-vip-item-name textarea").value)) {
          souvenirsVipAnswer5 = document.querySelector(".souvenirs-vip-item-name textarea").value;
      } else {
        alert("Заполните данные");
        return;
    }
  } else {
    return;
  }
    document.querySelector(".souvenirs-vip-choose-services").setAttribute("hidden", true);
    document.querySelector(".souvenirs-vip-services").setAttribute("hidden", true);
    document.querySelector(".souvenirs-vip-next").setAttribute("hidden", true);
    document.querySelector(".souvenirs-vip form").removeAttribute("hidden");
  }
}

if (souvenirsVipButtonNext !== null) {
  souvenirsVipButtonNext.addEventListener("click", souvenirsVipChangeContent);
}



//////////// animation scroll //////////////////////////////


if (document.querySelector(".slider") !== null) {

  if (document.querySelector("html").clientHeight > 1000) {
    document.querySelector(".slider").classList.add("move-right");
    document.querySelector(".services").classList.add("move-left");
    if ((document.documentElement.scrollTop > 600) || (window.pageYOffset > 600) ) {
      document.querySelector(".calculator").classList.add("move-right");
    }
    if ((document.documentElement.scrollTop > 1300) || (window.pageYOffset > 1300)) {
      document.querySelector(".guarantees").classList.add("move-left");
    }
    if ((document.documentElement.scrollTop > 2100) || (window.pageYOffset > 2100)) {
      document.querySelector(".review").classList.add("move-right");
    }
    if ((document.documentElement.scrollTop > 2800) || (window.pageYOffset > 2800)) {
      document.querySelector(".examples").classList.add("move-left");
    }
    if ((document.documentElement.scrollTop > 3400) || (window.pageYOffset > 3400)) {
      document.querySelector(".free").classList.add("move-right");
    }

    window.onscroll = function () {
      if ((document.documentElement.scrollTop > 600) || (window.pageYOffset > 600) ) {
        document.querySelector(".calculator").classList.add("move-right");
      }
      if ((document.documentElement.scrollTop > 1300) || (window.pageYOffset > 1300)) {
        document.querySelector(".guarantees").classList.add("move-left");
      }
      if ((document.documentElement.scrollTop > 2100) || (window.pageYOffset > 2100)) {
        document.querySelector(".review").classList.add("move-right");
      }
      if ((document.documentElement.scrollTop > 2800) || (window.pageYOffset > 2800)) {
        document.querySelector(".examples").classList.add("move-left");
      }
      if ((document.documentElement.scrollTop > 3400) || (window.pageYOffset > 3400)) {
        document.querySelector(".free").classList.add("move-right");
      }
  }
}
}


if (document.querySelector(".operational-polygraphy") !== null) {
  if (document.querySelector("html").clientHeight > 1000) {
    document.querySelector(".operational-polygraphy").classList.add("move-right");

    if ((document.documentElement.scrollTop > 50) || (window.pageYOffset > 50) ) {
      document.querySelector(".business-cards").classList.add("move-left");
    }
    if ((document.documentElement.scrollTop > 800) || (window.pageYOffset > 800)) {
      document.querySelector(".plastic-cards").classList.add("move-right");
    }
    if ((document.documentElement.scrollTop > 1500) || (window.pageYOffset > 1500)) {
      document.querySelector(".offset-printing").classList.add("move-left");
    }

    window.onscroll = function () {
      if ((document.documentElement.scrollTop > 50) || (window.pageYOffset > 50) ) {
        document.querySelector(".business-cards").classList.add("move-left");
      }
      if ((document.documentElement.scrollTop > 800) || (window.pageYOffset > 800)) {
        document.querySelector(".plastic-cards").classList.add("move-right");
      }
      if ((document.documentElement.scrollTop > 1500) || (window.pageYOffset > 1500)) {
        document.querySelector(".offset-printing").classList.add("move-left");
      }
    }
  }
}


if (document.querySelector(".sign-boards") !== null) {
  if (document.querySelector("html").clientHeight > 1000) {
    document.querySelector(".sign-boards").classList.add("move-right");

    if ((document.documentElement.scrollTop > 50) || (window.pageYOffset > 50) ) {
      document.querySelector(".branding-cars").classList.add("move-left");
    }
    if ((document.documentElement.scrollTop > 800) || (window.pageYOffset > 800)) {
      document.querySelector(".format-printing").classList.add("move-right");
    }
    if ((document.documentElement.scrollTop > 1500) || (window.pageYOffset > 1500)) {
      document.querySelector(".services-tablets").classList.add("move-left");
    }

    window.onscroll = function () {
      if ((document.documentElement.scrollTop > 50) || (window.pageYOffset > 50) ) {
        document.querySelector(".branding-cars").classList.add("move-left");
      }
      if ((document.documentElement.scrollTop > 800) || (window.pageYOffset > 800)) {
        document.querySelector(".format-printing").classList.add("move-right");
      }
      if ((document.documentElement.scrollTop > 1500) || (window.pageYOffset > 1500)) {
        document.querySelector(".services-tablets").classList.add("move-left");
      }
    }
  }
}


if (document.querySelector(".souvenirs-promo") !== null) {
  if (document.querySelector("html").clientHeight > 1000) {
    document.querySelector(".souvenirs-promo").classList.add("move-right");

    if ((document.documentElement.scrollTop > 50) || (window.pageYOffset > 50) ) {
      document.querySelector(".souvenirs-business").classList.add("move-left");
    }
    if ((document.documentElement.scrollTop > 800) || (window.pageYOffset > 800)) {
      document.querySelector(".souvenirs-vip").classList.add("move-right");
    }


    window.onscroll = function () {
      if ((document.documentElement.scrollTop > 50) || (window.pageYOffset > 50) ) {
        document.querySelector(".souvenirs-business").classList.add("move-left");
      }
      if ((document.documentElement.scrollTop > 800) || (window.pageYOffset > 800)) {
        document.querySelector(".souvenirs-vip").classList.add("move-right");
      }

    }
  }
}

////////////////////////////////////////



//
