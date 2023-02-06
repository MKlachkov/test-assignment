const login = document.querySelector('.button.login')
const register = document.querySelector('.button.registration')
const modalEnd = document.querySelector('.close__modal')
const modal = document.querySelector('.modal')
var isShow = false;
function showModal() {
        modal.style.removeProperty('display')
        modal.style.display = 'flex'
};

function closeModel() {
    modal.style.removeProperty('display')
    modal.style.display = ''
};
register.onclick = () => { showModal() };
login.onclick = () => { showModal() };
modalEnd.onclick = () => { closeModel() };