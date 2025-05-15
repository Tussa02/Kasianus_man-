let currentPhoto = 0;
const photos = document.querySelectorAll('.photo');

function changePhoto() {
  photos[currentPhoto].classList.remove('active');
  currentPhoto = (currentPhoto + 1) % photos.length;
  photos[currentPhoto].classList.add('active');
}
setInterval(changePhoto, 4000);

const text = "Kasianus Man";
const typewriter = document.getElementById("typewriter");
let i = 0;
function typeEffect() {
  if (i < text.length) {
    typewriter.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 150);
  }
}
typeEffect();

let flameOn = false;
function toggleFlames() {
  flameOn = !flameOn;
  document.querySelectorAll('.flame').forEach(f => {
    f.classList.toggle('off', !flameOn);
  });
  document.getElementById('toggleBtn').textContent = flameOn ? 'Matikan Lilin' : 'Nyalakan Lilin';
}

function dropFlower() {
  const flower = document.getElementById('flower');
  flower.classList.add('fall');
}