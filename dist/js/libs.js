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

const login = document.querySelector(".button.login"),
  register = document.querySelector(".button.registration"),
  modalEnd = document.querySelector(".close__modal"),
  modal = document.querySelector(".modal");
const toggleVisibility = async (option) => {
  if (option) {
    modal.classList.toggle("toggleModal");
    return;
  }
  modal.classList.toggle("toggleModal");
};
register.onclick = () => {
  toggleVisibility(true);
};
login.onclick = () => {
  toggleVisibility(true);
};
modalEnd.onclick = () => {
  toggleVisibility(false);
};

const swiper = new Swiper(".swiper", {
  navigation: {
    nextEl: ".arrow__right",
    prevEl: ".arrow__left",
  },
  pagination: {
    clickable: true,
    el: ".swiper-pagination",
  },
  slidesPerView: 4,
});
