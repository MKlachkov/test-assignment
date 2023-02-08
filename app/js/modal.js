const login = document.querySelector(".button.login");
const register = document.querySelector(".button.registration");
const modalEnd = document.querySelector(".close__modal");
const modal = document.querySelector(".modal");
async function toggleVisibility(option) {
  if (option) {
    modal.classList.toggle("toggleModal");
  } else {
    modal.classList.toggle("toggleModal");
  }
}
register.onclick = () => {
  toggleVisibility(true);
};
login.onclick = () => {
  toggleVisibility(true);
};
modalEnd.onclick = () => {
  toggleVisibility(false);
};
