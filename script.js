const SECRET = "sanjana";
let currentScene = 0;

const scenes = document.querySelectorAll(".scene");
const backBtn = document.getElementById("backBtn");
const music = document.getElementById("bgMusic");
const muteBtn = document.getElementById("muteBtn");

/* LOGIN */
function unlock() {
  const name = document.getElementById("nameInput").value.toLowerCase().trim();
  if (name === SECRET) {
    music.volume = 0.35;
    music.play().catch(()=>{});
    nextScene();
  } else {
    document.getElementById("error").innerText =
      "This page is waiting for someone else…";
  }
}

/* NAV */
function showScene(i) {
  scenes.forEach(s => s.classList.remove("active"));
  scenes[i].classList.add("active");
  currentScene = i;
  backBtn.style.display = i === 0 ? "none" : "block";
  if (i === 3) startPhotos();
}

function nextScene() {
  if (currentScene < scenes.length - 1) showScene(currentScene + 1);
}
function prevScene() {
  if (currentScene > 0) showScene(currentScene - 1);
}
backBtn.onclick = prevScene;

/* MUSIC */
muteBtn.onclick = () => {
  music.muted = !music.muted;
  muteBtn.innerText = music.muted ? "🔇" : "🔊";
};

/* PHOTOS – SLOW */
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
  "https://res.cloudinary.com/dlsp49kl5/image/upload/v1769758466/Sanju-6_mweqgu.jpg",
  "https://res.cloudinary.com/dlsp49kl5/image/upload/v1769758463/SanKP-1_yb6czj.jpg",
  "https://res.cloudinary.com/dlsp49kl5/image/upload/v1769758462/SanKP-8_dqvuie.jpg",
  "https://res.cloudinary.com/dlsp49kl5/image/upload/v1769758458/SanKP-7_zn4n5s.jpg"
];

const stage = document.getElementById("photoStage");
const nextBtn = document.getElementById("photoNextBtn");

function startPhotos() {
  stage.innerHTML = "";
  photos.forEach((src, i) => {
    setTimeout(() => {
      const img = document.createElement("img");
      img.src = src;
      img.className = "stage-photo";
      stage.innerHTML = "";
      stage.appendChild(img);
      if (i === photos.length - 1) nextBtn.disabled = false;
    }, i * 3500); // 3.5 seconds per photo
  });
}
