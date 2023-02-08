const login = document.querySelector(".button.login"),
  register = document.querySelector(".button.registration"),
  modalEnd = document.querySelector(".close__modal"),
  modal = document.querySelector(".modal")
function toggleVisibility(option) {
  if (option) {
    modal.classList.toggle("toggleModal")
    return
  }
  modal.classList.toggle("toggleModal")
}
register.onclick = () => {
  toggleVisibility(true)
};
login.onclick = () => {
  toggleVisibility(true)
};
modalEnd.onclick = () => {
  toggleVisibility(false)
};
