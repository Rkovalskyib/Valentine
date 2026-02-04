const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const gif = document.getElementById('gif');
const result = document.getElementById('result');
const question = document.getElementById('question');

let yesSize = 1;
let noSize = 1;

/* функція яка завжди залишає translate */
function updateScale() {
  yesBtn.style.transform =
    `translate(-50%, -50%) scale(${yesSize})`;

  noBtn.style.transform =
    `translate(-50%, -50%) scale(${noSize})`;
}

noBtn.addEventListener('click', () => {

  yesSize += 0.25;
  noSize -= 0.12;

  if (noSize < 0.3) noSize = 0.3;

  updateScale();
});

yesBtn.addEventListener('click', () => {

  // зупиняємо першу музику
  music.pause();
  music.currentTime = 0;

  // запускаємо другу
  yesMusic.volume = 0.6;
  yesMusic.play();

  question.style.display = 'none';
  document.querySelector('.buttons').style.display = 'none';

  gif.src = '2.gif';
  result.classList.remove('hidden');
});


const music = document.getElementById('bgMusic');
const yesMusic = document.getElementById('yesMusic');

document.addEventListener('click', () => {
  if (music.paused) {
    music.volume = 0.4; // щоб не орала 🙂
    music.play();
  }
}, { once: true });
