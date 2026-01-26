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

/* 📸 YOUR 10 PHOTOS */
const photos = [
  "https://drive.google.com/uc?export=view&id=1iFmFSNKIscZLgoo67YLSBTemRMOEvcWC",
  "https://drive.google.com/uc?export=view&id=148r2J2Vbtd0SeZMi8985k-eIYVS2gIS-",
  "https://drive.google.com/uc?export=view&id=1CFp93527FDPXZBHj54rcH0lBjO_uyufB",
  "https://drive.google.com/uc?export=view&id=1lCrz0_cd4d9Cal3MUvwtn9w2bF-eBGjv",
  "https://drive.google.com/uc?export=view&id=1aUqSxdMR1PJMY_edz8zwem4Z3QJmZ3ZR",
  "https://drive.google.com/uc?export=view&id=1enqLcvkpwQ8pKEM3mlwyoHmDyCFKXtCQ",
  "https://drive.google.com/uc?export=view&id=1b7qt8TKTjO3h-MEGDOqhk40lXKvmvnqL",
  "https://drive.google.com/uc?export=view&id=1efED_K7yqcuIXKaDlfJv8LMJJlcHP83i",
  "https://drive.google.com/uc?export=view&id=1XxPQLAZ7WMcoK6j9EnxNjRqLesuVxaCN",
  "https://drive.google.com/uc?export=view&id=1c2kTt9S1dgRG4ydR3C8w9DpARJl_cDPy"
];

const floatContainer = document.getElementById("floatingPhotos");
const cardsContainer = document.getElementById("photoCards");

/* ❤️ LOTTIE HEARTS */
lottie.loadAnimation({
  container: document.getElementById("lottie-hearts"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "https://assets10.lottiefiles.com/packages/lf20_jppxqf.json"
});

/* Build photo cards */
photos.forEach(src => {
  const div = document.createElement("div");
  div.className = "photo-card";
  div.innerHTML = `<img src="${src}">`;
  div.onclick = () => openModal(div);
  cardsContainer.appendChild(div);
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
    img.src = photos[Math.floor(Math.random() * photos.length)];
    img.className = "floating-photo";
    img.style.left = Math.random() * 90 + "%";
    img.style.animationDuration = Math.random() * 8 + 10 + "s";
    floatContainer.appendChild(img);
    setTimeout(() => img.remove(), 15000);
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