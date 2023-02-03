const burger = document.querySelector('.burger')
const Menu = document.querySelector('.burger__menu');
let isClosed = true;
const height = window.screen.height;
burger.onclick=function(){
    Menu.classList.toggle("visible")
    document.querySelector('.login-box').classList.toggle("hide")
    document.querySelector("body").style.height= height
    document.querySelector("body").style.overflowY='hidden'
    if(isClosed){
        burger.src='./images/close.svg'
        isClosed = false
    }else{
        burger.src='./images/burger.svg'
        isClosed=true
        document.querySelector("body").style.overflowY='auto'
    }
};