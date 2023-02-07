const burger = document.querySelector(".burger");
const Menu = document.querySelector(".menu");
var isClosed = true;
function show() {
  Menu.classList.toggle("visible");
  document.querySelector(".login-box").classList.toggle("hide");
  if (isClosed) {
    burger.src = "./images/burger/close.svg";
    isClosed = false;
  } else {
    burger.src = "./images/burger/burger.svg";
    isClosed = true;
  }
}
burger.onclick = function () {
  show();
};

window.onscroll = function (e) {
  if (window.scrollY > 143 && Menu.classList.contains("visible")) {
    show();
  }
};
