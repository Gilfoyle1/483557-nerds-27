// popup
var link = document.querySelector(".write-us");
var popup = document.querySelector(".feedback");
var popupClose = document.querySelector(".feedback-close");
var login = popup.querySelector("[name=login]");
var email = popup.querySelector("[name=email]");
var form = popup.querySelector(".feedback-form");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("feedback-show");

  if (storage) {
    login.value = storage;
    email.focus();
  } else {
    login.focus();
  }
});

popupClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("close-animation");
  popup.classList.remove("feedback-show");
  popup.classList.remove("feedback-error");
});

form.addEventListener("submit", function (evt) {
  if (!login.value || !email.value) {
    evt.preventDefault();
    popup.classList.remove("feedback-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("feedback-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
    }
  }
});


window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("feedback-show")) {
      popup.classList.remove("feedback-show");
      popup.classList.remove("feddback-error");
    }
  }

});



// slider
var first = document.querySelector(".slide-1");
var second = document.querySelector(".slide-2");
var third = document.querySelector(".slide-3");
var item = document.querySelector(".item-slide");
var slideFirst = document.querySelector(".slider-wrapper-first");
var slideSecond = document.querySelector(".slider-wrapper-second");
var slideThird = document.querySelector(".slider-wrapper-third");



first.addEventListener("click", function (evt) {
  evt.preventDefault();
  slideFirst.classList.add("item-slide");
  slideSecond.classList.remove("slide-visible-second");
  slideThird.classList.remove("slide-visible-third");
});


second.addEventListener("click", function (evt) {
  evt.preventDefault();
  slideFirst.classList.remove("item-slide");
  slideThird.classList.remove("slide-visible-third");
  slideSecond.classList.add("slide-visible-second");
});



third.addEventListener("click", function (evt) {
  evt.preventDefault();
  slideSecond.classList.remove("slide-visible-second");
  slideFirst.classList.remove("item-slide");
  slideThird.classList.add("slide-visible-third");
});
