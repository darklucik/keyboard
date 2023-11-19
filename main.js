let capsLock = false;
let shift = false;

const keys = document.querySelectorAll(".key");
const inputField = document.getElementById("input");
const backspaceBtn = document.getElementsByClassName('backspace')

let key = keys
let backspace = backspaceBtn


document.body.addEventListener("keydown", (event) => {
  inputField.focus();

  keys.forEach((k) => {
    if (event.key.toLowerCase() === k.innerHTML.toLowerCase()) {
      k.classList.add("_active");
    }
  });
});

document.body.addEventListener("keyup", (event) => {
  keys.forEach((k) => {
    if (event.key.toLowerCase() === k.innerHTML.toLowerCase()) {
      k.classList.remove("_active");
    }
  });
});




