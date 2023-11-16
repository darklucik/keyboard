let capsLock = false;
let shift = false;

function handleKeyPress(key) {
  const inputField = document.getElementById('input');

  if (key === 'backspace') {
    inputField.value = inputField.value.slice(0, -1);
  } else if (key === 'shift') {
    shift = !shift;
  } else if (key === 'capslock') {
    capsLock = !capsLock;
  } else {
    const letter = capsLock ? key.toUpperCase() : key.toLowerCase();
    inputField.value += shift ? letter.toUpperCase() : letter.toLowerCase();
    shift = false;
  }
}