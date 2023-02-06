const burger = document.querySelector('.burger')
const Menu = document.querySelector('.burger__menu')
var isClosed = true
function show(){
    Menu.classList.toggle("visible")
    document.querySelector('.login-box').classList.toggle("hide")
    if(isClosed){
        burger.src='./images/burger/close.svg'
        isClosed = false
    }else{
        burger.src='./images/burger/burger.svg'
        isClosed=true
    }
}
burger.onclick=function(){
    show()
};

window.onscroll = function (e) {
    if(window.scrollY >143 && Menu.classList.contains('visible')){
        show()
    }
};

const login = document.querySelector('.button.login')
const register = document.querySelector('.button.registration')
const modalEnd = document.querySelector('.close__modal')
const modal = document.querySelector('.modal')
function toggleVisibility(option) {
    if (option) {
        modal.classList.toggle('toggleModal')
    } else {
        modal.classList.toggle('toggleModal')
    }
};
register.onclick = () => { toggleVisibility(true) };
login.onclick = () => { toggleVisibility(true) };
modalEnd.onclick = () => { toggleVisibility(false) };
const swiper = new Swiper('.swiper', {
    navigation: {
      nextEl: '.arrow__right',
      prevEl: '.arrow__left',
    },
    pagination: {
        clickable: true,
        el: '.swiper-pagination',
      },
    slidesPerView:4
  });
  