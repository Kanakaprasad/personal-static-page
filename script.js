const SECRET = "sanjana";
let currentStep = 1;

const input = document.getElementById("nameInput");
const enterBtn = document.getElementById("enterBtn");
const music = document.getElementById("bgMusic");
const muteBtn = document.getElementById("muteBtn");

let muted = false;

/* 🎵 Music per step */
const musicMap = {
  1: "./music/intro.mp3",
  2: "./music/intro.mp3",
  3: "./music/memories.mp3",
  4: "./music/ending.mp3"
};

/* 📸 CLOUDINARY PHOTOS (ALL 17) */
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

const floatContainer = document.getElementById("floatingPhotos");
const cardsContainer = document.getElementById("photoCards");

/* ❤️ Lottie Hearts */
lottie.loadAnimation({
  container: document.getElementById("lottie-hearts"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "https://assets10.lottiefiles.com/packages/lf20_jppxqf.json"
});

/* Build photo cards */
photos.forEach(src => {
  const card = document.createElement("div");
  card.className = "photo-card";
  card.innerHTML = `<img src="${src}" loading="lazy">`;
  card.onclick = () => openModal(card);
  cardsContainer.appendChild(card);
});

/* Password gate */
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

/* Floating photos animation */
function startFloatingPhotos() {
  setInterval(() => {
    const wrap = document.createElement("div");
    wrap.className = "floating-photo";

    const img = document.createElement("img");
    img.src = photos[Math.floor(Math.random() * photos.length)];

    wrap.style.left = Math.random() * 90 + "%";
    wrap.style.animationDuration = Math.random() * 8 + 12 + "s";

    wrap.appendChild(img);
    floatContainer.appendChild(wrap);

    setTimeout(() => wrap.remove(), 16000);
  }, 1800);
}

/* Modal */
function openModal(card) {
  document.getElementById("modalImg").src = card.querySelector("img").src;
  document.getElementById("photoModal").style.display = "flex";
}
function closeModal() {
  document.getElementById("photoModal").style.display = "none";
}

/* Music */
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
