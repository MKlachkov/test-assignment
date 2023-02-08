const burger = document.querySelector(".burger"),
  Menu = document.querySelector(".menu"),
  buttons = document.querySelector(".buttons");
const show = async () => {
  Menu.classList.toggle("visible");
  burger.classList.toggle("burger--close");
  buttons.classList.toggle("hide");
};

burger.onclick = () => {
  show();
};

window.onscroll = (e) => {
  if (window.scrollY > 143 && Menu.classList.contains("visible")) {
    show();
  }
};
