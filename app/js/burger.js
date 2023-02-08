const burger = document.querySelector(".burger"),
Menu = document.querySelector(".menu")
var isClosed = true
async function show() {
  Menu.classList.toggle("visible");
  document.querySelector(".buttons").classList.toggle("hide");
  if (isClosed) {
    burger.src = "./images/burger/close.svg";
    isClosed = false
  } else {
    burger.src = "./images/burger/burger.svg";
    isClosed = true
  }
}
burger.onclick =  ()=> {
  show()
};

window.onscroll =  (e)=> {
  if (window.scrollY > 143 && Menu.classList.contains("visible")) {
    show()
  }
};
