const SECRET = "sanjana";
let currentStep = 1;

const loginScreen = document.getElementById("loginScreen");
const heroScreen = document.getElementById("heroScreen");
const content = document.getElementById("content");

const input = document.getElementById("nameInput");
const enterBtn = document.getElementById("enterBtn");

const music = document.getElementById("bgMusic");
const muteBtn = document.getElementById("muteBtn");
let muted = false;

/* Music map */
const musicMap = {
  hero: "./music/intro.mp3",
  1: "./music/intro.mp3",
  2: "./music/intro.mp3",
  3: "./music/memories.mp3",
  4: "./music/memories.mp3",
  5: "./music/ending.mp3",
  6: "./music/ending.mp3"
};

/* Hearts */
lottie.loadAnimation({
  container: document.getElementById("lottie-hearts"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "https://assets10.lottiefiles.com/packages/lf20_jppxqf.json"
});

/* Login */
enterBtn.onclick = () => {
  if (input.value.trim().toLowerCase() === SECRET) {
    loginScreen.style.display = "none";
    heroScreen.style.display = "flex";
    playMusic("hero");
  }
};

input.addEventListener("keydown", e => {
  if (e.key === "Enter") enterBtn.click();
});

/* Start */
function startJourney() {
  heroScreen.style.display = "none";
  content.style.display = "block";
  playMusic(1);
}

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

/* Music */
function playMusic(key) {
  if (muted) return;
  music.src = musicMap[key];
  music.volume = 0.6;
  music.play().catch(()=>{});
}

muteBtn.onclick = () => {
  muted = !muted;
  muteBtn.innerText = muted ? "🔇" : "🔊";
  muted ? music.pause() : playMusic(currentStep);
};
