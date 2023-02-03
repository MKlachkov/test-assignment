const login = document.querySelector('.button.login')
const register = document.querySelector('.button.registration')
const modalEnd = document.querySelector('.close__modal')
let isShow = false;
function showModal(){
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


register.onclick=()=>{showModal()};
login.onclick=()=>{showModal()};
modalEnd.onclick=()=>{showModal()};