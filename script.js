const SECRET = "sanjana";
let currentStep = 1;
const totalSteps = 4;

const input = document.getElementById("nameInput");
const enterBtn = document.getElementById("enterBtn");
const content = document.getElementById("content");
const ambientContainer = document.getElementById("ambientTexts");

const music = document.getElementById("bgMusic");
const muteBtn = document.getElementById("muteBtn");

let ambientTimer = null;
let muted = false;

const words = [
  "Sanju 💖",
  "Sanji ✨",
  "Dear 🌸",
  "Sanjana ❤️",
  "My Dear 💕",
  "Hendti 🥺❤️",
  "Sanju 💗",
  "Sanju 🧡 KP",
  "KP 🧡 Sanju"
];

const musicMap = {
  1: "./music/intro.mp3",
  2: "./music/intro.mp3",
  3: "./music/memories.mp3",
  4: "./music/ending.mp3"
};

/* Gate */
input.addEventListener("keydown", e => {
  if (e.key === "Enter") checkName();
});
enterBtn.addEventListener("click", checkName);

function checkName() {
  if (input.value.trim().toLowerCase() === SECRET) {
    document.getElementById("overlay").style.display = "none";
    content.classList.remove("blurred");
    content.classList.add("unblur");

    startAmbient();
    playMusicForStep(1);
  } else {
    document.getElementById("errorMsg").innerText = "Not for everyone 🌙";
  }
}

/* Navigation */
function nextStep() {
  if (currentStep >= totalSteps) return;
  document.getElementById(`step${currentStep}`).classList.remove("active");
  currentStep++;
  document.getElementById(`step${currentStep}`).classList.add("active");
  playMusicForStep(currentStep);
  if (currentStep === 4) stopAmbient();
}

function prevStep() {
  if (currentStep <= 1) return;
  document.getElementById(`step${currentStep}`).classList.remove("active");
  currentStep--;
  document.getElementById(`step${currentStep}`).classList.add("active");
  playMusicForStep(currentStep);
  if (currentStep < 4) startAmbient();
}

/* Ambient text */
function startAmbient() {
  if (ambientTimer) return;
  ambientTimer = setInterval(createAmbientText, 700);
}
function stopAmbient() {
  clearInterval(ambientTimer);
  ambientTimer = null;
}
function createAmbientText() {
  const span = document.createElement("span");
  span.className = "ambient";
  span.innerText = words[Math.floor(Math.random() * words.length)];
  span.style.left = Math.random() * 100 + "%";
  span.style.fontSize = Math.random() * 6 + 12 + "px";
  span.style.animationDuration = Math.random() * 4 + 6 + "s";
  ambientContainer.appendChild(span);
  setTimeout(() => span.remove(), 10000);
}

/* Music */
function playMusicForStep(step) {
  if (muted) return;
  const src = musicMap[step];
  if (!src || music.src.includes(src)) return;

  music.volume = 0;
  music.src = src;
  music.play().catch(() => {});
  let vol = 0;
  const fade = setInterval(() => {
    vol += 0.05;
    music.volume = Math.min(vol, 0.6);
    if (vol >= 0.6) clearInterval(fade);
  }, 100);
}

muteBtn.addEventListener("click", () => {
  muted = !muted;
  if (muted) {
    music.pause();
    muteBtn.innerText = "🔇";
  } else {
    playMusicForStep(currentStep);
    muteBtn.innerText = "🔊";
  }
});
