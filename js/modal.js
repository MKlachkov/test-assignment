const login = document.querySelector('.button.login')
const register = document.querySelector('.button.registration')
const closeArrow = document.querySelector('.close')
const modaEnd = document.querySelector('.modal-end')
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

closeArrow.onclick=function(){
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