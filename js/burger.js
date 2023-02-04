const burger = document.querySelector('.burger')
const Menu = document.querySelector('.burger__menu');
let isClosed = true;
const height = window.screen.height;
function show(){
    Menu.classList.toggle("visible")
    document.querySelector('.login-box').classList.toggle("hide")
    if(isClosed){
        burger.src='./images/close.svg'
        isClosed = false
    }else{
        burger.src='./images/burger.svg'
        isClosed=true
        document.querySelector("body").style.overflowY='auto'
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