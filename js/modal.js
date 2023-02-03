const login = document.querySelector('.button.login')
const register = document.querySelector('.button.registration')
const modaEnd = document.querySelector('.close__modal')
let isShow = false;

register.onclick=function (){
    const modal = document.querySelector('.modal')
    if (isShow){
        modal.style.removeProperty('display')
        modal.style.display = ''
        isShow = false
    }else{
        modal.style.removeProperty('display')
        modal.style.display = 'flex'
        isShow = true
    }
};
login.onclick=function (){
    const modal = document.querySelector('.modal')
    if (isShow){
        modal.style.removeProperty('display')
        modal.style.display = ''
        isShow = false
    }else{
        modal.style.removeProperty('display')
        modal.style.display = 'flex'
        isShow = true
    }
};
modaEnd.onclick=function(){
    const modal = document.querySelector('.modal')
    if (isShow){
        modal.style.removeProperty('display')
        modal.style.display = ''
        isShow = false
    }else{
        modal.style.removeProperty('display')
        modal.style.display = 'flex'
        isShow = true
    }
}