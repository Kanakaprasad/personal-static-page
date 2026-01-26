const SECRET = "sanjana";
let currentStep = 1;

const input = document.getElementById("nameInput");
const enterBtn = document.getElementById("enterBtn");
const music = document.getElementById("bgMusic");
const muteBtn = document.getElementById("muteBtn");

let muted = false;

/* 🎵 Music */
const musicMap = {
  1: "./music/intro.mp3",
  2: "./music/intro.mp3",
  3: "./music/memories.mp3",
  4: "./music/ending.mp3"
};

/* 📸 Google Drive image links */
const floatingPhotos = [
  "PHOTO_LINK_1",
  "PHOTO_LINK_2",
  "PHOTO_LINK_3"
];

const floatContainer = document.getElementById("floatingPhotos");

/* ❤️ LOTTIE HEARTS ACTUAL CODE */
lottie.loadAnimation({
  container: document.getElementById("lottie-hearts"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "https://assets10.lottiefiles.com/packages/lf20_jppxqf.json"
});

/* Password */
enterBtn.onclick = () => {
  if (input.value.trim().toLowerCase() === SECRET) {
    document.getElementById("overlay").style.display = "none";
    startFloatingPhotos();
    playMusic(1);
  } else {
    document.getElementById("errorMsg").innerText = "Not for everyone 🌙";
  }
};

/* Navigation */
function nextStep() {
  document.getElementById(`step${currentStep}`).classList.remove("active");
  currentStep++;
  document.getElementById(`step${currentStep}`).classList.add("active");
  playMusic(currentStep);
}

function prevStep() {
  document.getElementById(`step${currentStep}`).classList.remove("active");
  currentStep--;
  document.getElementById(`step${currentStep}`).classList.add("active");
  playMusic(currentStep);
}

/* Floating photos */
function startFloatingPhotos() {
  setInterval(() => {
    const img = document.createElement("img");
    img.src = floatingPhotos[Math.floor(Math.random() * floatingPhotos.length)];
    img.className = "floating-photo";
    img.style.left = Math.random() * 90 + "%";
    img.style.animationDuration = Math.random() * 8 + 10 + "s";
    floatContainer.appendChild(img);
    setTimeout(() => img.remove(), 15000);
  }, 2000);
}

/* Modal */
function openModal(card) {
  document.getElementById("modalImg").src = card.querySelector("img").src;
  document.getElementById("photoModal").style.display = "flex";
}
function closeModal() {
  document.getElementById("photoModal").style.display = "none";
}

/* Music control */
function playMusic(step) {
  if (muted) return;
  music.src = musicMap[step];
  music.volume = 0.6;
  music.play().catch(() => {});
}

muteBtn.onclick = () => {
  muted = !muted;
  muteBtn.innerText = muted ? "🔇" : "🔊";
  muted ? music.pause() : playMusic(currentStep);
};
