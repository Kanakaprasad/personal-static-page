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

const musicMap = {
  hero: "./music/intro.mp3",
  1: "./music/intro.mp3",
  2: "./music/intro.mp3",
  3: "./music/memories.mp3",
  4: "./music/memories.mp3",
  5: "./music/ending.mp3",
  6: "./music/ending.mp3"
};

lottie.loadAnimation({
  container: document.getElementById("lottie-hearts"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "https://assets10.lottiefiles.com/packages/lf20_jppxqf.json"
});

/* ALL PHOTOS */
const photos = [
  "https://res.cloudinary.com/dlsp49kl5/image/upload/v1769758489/Sanju-1_x6t8eh.jpg",
  "https://res.cloudinary.com/dlsp49kl5/image/upload/v1769758489/SanKP-9_whwphg.jpg",
  "https://res.cloudinary.com/dlsp49kl5/image/upload/v1769758484/SanKP-5_dbjx0a.jpg",
  "https://res.cloudinary.com/dlsp49kl5/image/upload/v1769758483/Sanju-2_kz1yqa.jpg",
  "https://res.cloudinary.com/dlsp49kl5/image/upload/v1769758482/Sanju-4_r0xjpd.jpg",
  "https://res.cloudinary.com/dlsp49kl5/image/upload/v1769758480/Sanju-7_iksay0.jpg",
  "https://res.cloudinary.com/dlsp49kl5/image/upload/v1769758479/Sanju-8_zlcbhy.jpg",
  "https://res.cloudinary.com/dlsp49kl5/image/upload/v1769758476/SanKP-2_yqisgv.jpg",
  "https://res.cloudinary.com/dlsp49kl5/image/upload/v1769758474/Sanju-3_noksgw.jpg",
  "https://res.cloudinary.com/dlsp49kl5/image/upload/v1769758469/SanKP-3_xa8ckt.jpg",
  "https://res.cloudinary.com/dlsp49kl5/image/upload/v1769758467/SanKP-10_szafd3.jpg",
  "https://res.cloudinary.com/dlsp49kl5/image/upload/v1769758467/SanKP-4_r7eflo.jpg",
  "https://res.cloudinary.com/dlsp49kl5/image/upload/v1769758466/Sanju-6_mweqgu.jpg",
  "https://res.cloudinary.com/dlsp49kl5/image/upload/v1769758463/SanKP-1_yb6czj.jpg",
  "https://res.cloudinary.com/dlsp49kl5/image/upload/v1769758463/SanKP-6_ilbntr.jpg",
  "https://res.cloudinary.com/dlsp49kl5/image/upload/v1769758462/SanKP-8_dqvuie.jpg",
  "https://res.cloudinary.com/dlsp49kl5/image/upload/v1769758458/SanKP-7_zn4n5s.jpg"
];

const photoCards = document.getElementById("photoCards");

photos.forEach(src => {
  const card = document.createElement("div");
  card.className = "photo-card";
  const img = document.createElement("img");
  img.src = src;
  img.loading = "lazy";
  card.appendChild(img);
  photoCards.appendChild(card);
});

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

function startJourney() {
  heroScreen.style.display = "none";
  content.style.display = "block";
  playMusic(1);
}

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

function playMusic(key) {
  if (muted) return;
  music.src = musicMap[key];
  music.volume = 0.6;
  music.play().catch(() => {});
}

muteBtn.onclick = () => {
  muted = !muted;
  muteBtn.innerText = muted ? "🔇" : "🔊";
  muted ? music.pause() : playMusic(currentStep);
};
