const burger = document.querySelector('.burger')
let isCliosed = true;
const height = window.screen.height;
burger.onclick=function(){
    document.querySelector('.burger__menu').classList.toggle("visible")
    document.querySelector('.login-box').classList.toggle("hide")
    document.querySelector("body").style.height= height
    document.querySelector("body").style.overflowY='hidden'

    if(isCliosed){
        burger.src='./images/close.svg'
        isCliosed = false
    }else{
        burger.src='./images/burger.svg'
        isCliosed=true
        document.querySelector("body").style.overflowY='auto'
    }
};