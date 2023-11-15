const inputField = document.getElementById('input');
const keys = document.getElementsByClassName('key');


for (let i = 0; i < keys.length; i++) {
  keys[i].addEventListener('click', function() {
    inputField.value += this.innerHTML;
  });
}


document.addEventListener('keydown', function(event) {
  const key = event.key.toUpperCase();
  if (/^[A-Z]$/.test(key)) {
    inputField.value += key;
  }
});