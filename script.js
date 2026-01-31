/* =========================
   GLOBAL STATE
========================= */

const SECRET = "sanjana";
let currentScene = 0;

const scenes = document.querySelectorAll(".scene");
const backBtn = document.getElementById("backBtn");
const muteBtn = document.getElementById("muteBtn");
const music = document.getElementById("bgMusic");

/* =========================
   SCENE NAVIGATION
========================= */

function showScene(index) {
  scenes.forEach(s => s.classList.remove("active"));
  scenes[index].classList.add("active");
  currentScene = index;

  backBtn.style.display = index === 0 ? "none" : "block";

  if (index === 4) {
    startPhotoSequence();
  }
}

function nextScene() {
  if (currentScene < scenes.length - 1) {
    showScene(currentScene + 1);
  }
}

function prevScene() {
  if (currentScene > 0) {
    showScene(currentScene - 1);
  }
}

backBtn.addEventListener("click", prevScene);

/* =========================
   LOGIN
========================= */

function unlock() {
  const val = document.getElementById("nameInput").value.trim().toLowerCase();
  const error = document.getElementById("error");

  if (val === SECRET) {
    error.innerText = "";
    music.volume = 0.35;
    music.play().catch(() => {});
    nextScene();
  } else {
    error.innerText = "This page is waiting for someone else…";
  }
}

/* =========================
   MUSIC
========================= */

muteBtn.addEventListener("click", () => {
  music.muted = !music.muted;
  muteBtn.textContent = music.muted ? "🔇" : "🔊";
});

/* =========================
   LOTTIE – BALLOONS
========================= */

lottie.loadAnimation({
  container: document.getElementById("lottie-balloons"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "https://assets10.lottiefiles.com/packages/lf20_6cfdxl.json"
});

/* =========================
   PHOTO SEQUENCE (HEAVY)
========================= */

const photos = [
  "https://res.cloudinary.com/dlsp49kl5/image/upload/w_1200,q_auto,f_auto/v1769758489/Sanju-1_x6t8eh.jpg",
  "https://res.cloudinary.com/dlsp49kl5/image/upload/w_1200,q_auto,f_auto/v1769758489/SanKP-9_whwphg.jpg",
  "https://res.cloudinary.com/dlsp49kl5/image/upload/w_1200,q_auto,f_auto/v1769758484/SanKP-5_dbjx0a.jpg",
  "https://res.cloudinary.com/dlsp49kl5/image/upload/w_1200,q_auto,f_auto/v1769758483/Sanju-2_kz1yqa.jpg",
  "https://res.cloudinary.com/dlsp49kl5/image/upload/w_1200,q_auto,f_auto/v1769758482/Sanju-4_r0xjpd.jpg",
  "https://res.cloudinary.com/dlsp49kl5/image/upload/w_1200,q_auto,f_auto/v1769758480/Sanju-7_iksay0.jpg",
  "https://res.cloudinary.com/dlsp49kl5/image/upload/w_1200,q_auto,f_auto/v1769758479/Sanju-8_zlcbhy.jpg",
  "https://res.cloudinary.com/dlsp49kl5/image/upload/w_1200,q_auto,f_auto/v1769758476/SanKP-2_yqisgv.jpg",
  "https://res.cloudinary.com/dlsp49kl5/image/upload/w_1200,q_auto,f_auto/v1769758474/Sanju-3_noksgw.jpg",
  "https://res.cloudinary.com/dlsp49kl5/image/upload/w_1200,q_auto,f_auto/v1769758469/SanKP-3_xa8ckt.jpg",
  "https://res.cloudinary.com/dlsp49kl5/image/upload/w_1200,q_auto,f_auto/v1769758467/SanKP-10_szafd3.jpg",
  "https://res.cloudinary.com/dlsp49kl5/image/upload/w_1200,q_auto,f_auto/v1769758466/Sanju-6_mweqgu.jpg",
  "https://res.cloudinary.com/dlsp49kl5/image/upload/w_1200,q_auto,f_auto/v1769758463/SanKP-1_yb6czj.jpg",
  "https://res.cloudinary.com/dlsp49kl5/image/upload/w_1200,q_auto,f_auto/v1769758463/SanKP-6_ilbntr.jpg",
  "https://res.cloudinary.com/dlsp49kl5/image/upload/w_1200,q_auto,f_auto/v1769758462/SanKP-8_dqvuie.jpg",
  "https://res.cloudinary.com/dlsp49kl5/image/upload/w_1200,q_auto,f_auto/v1769758458/SanKP-7_zn4n5s.jpg"
];

const photoStage = document.getElementById("photoStage");
const photoGrid = document.getElementById("photoGrid");
const photoNextBtn = document.getElementById("photoNextBtn");

let photoIndex = 0;

function preloadImages() {
  photos.forEach(src => {
    const img = new Image();
    img.src = src;
  });
}

function startPhotoSequence() {
  photoStage.innerHTML = "";
  photoGrid.innerHTML = "";
  photoIndex = 0;
  photoNextBtn.disabled = true;

  preloadImages();
  playNextPhoto();
}

function playNextPhoto() {
  if (photoIndex >= photos.length) {
    photoNextBtn.disabled = false;
    return;
  }

  const src = photos[photoIndex];
  const img = document.createElement("img");
  img.src = src;
  img.className = "stage-photo";

  photoStage.innerHTML = "";
  photoStage.appendChild(img);

  setTimeout(() => {
    img.classList.add("shrink");

    setTimeout(() => {
      const card = document.createElement("div");
      card.className = "photo-card";
      card.innerHTML = `<img src="${src}" />`;
      photoGrid.appendChild(card);

      photoIndex++;
      playNextPhoto();
    }, 1600);
  }, 3200);
}
