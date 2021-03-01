const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');

const text = 'We Love Programming!';

let idx = 0;
let speed = 300 / speedEl.value;

addNextChar();

function addNextChar() {
  textEl.innerText = text.slice(0, idx + 1);

  idx = (idx + 1) % text.length;

  setTimeout(addNextChar, speed);
}

speedEl.addEventListener('change', (e) => {
  speed = 300 / e.target.value;
});