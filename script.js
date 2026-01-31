const SECRET = "sanjana";
let current = 0;
const scenes = document.querySelectorAll(".scene");

const backBtn = document.getElementById("backBtn");
const muteBtn = document.getElementById("muteBtn");
const music = document.getElementById("bgMusic");

function showScene(i) {
  scenes.forEach(s => s.classList.remove("active"));
  scenes[i].classList.add("active");
  current = i;
  backBtn.style.display = i === 0 ? "none" : "block";
  if (i === 3) startPhotoSequence();
}

function nextScene() {
  if (current < scenes.length - 1) showScene(current + 1);
}
function prevScene() {
  if (current > 0) showScene(current - 1);
}
backBtn.onclick = prevScene;

function unlock() {
  const v = document.getElementById("nameInput").value.trim().toLowerCase();
  if (v === SECRET) {
    music.volume = 0.35;
    music.play().catch(()=>{});
    nextScene();
  } else {
    document.getElementById("error").innerText = "Not for you 🙂";
  }
}

muteBtn.onclick = () => {
  music.muted = !music.muted;
  muteBtn.textContent = music.muted ? "🔇" : "🔊";
};

async function load(id, file) {
  document.getElementById(id).innerHTML = await fetch(file).then(r=>r.text());
}

load("story-container","./partials/story.html");
load("memories-container","./partials/memories.html");
load("letter-container","./partials/letter.html");

/* PHOTOS */
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
  "https://res.cloudinary.com/dlsp49kl5/image/upload/w_1200,q_auto,f_auto/v1769758462/SanKP-8_dqvuie.jpg",
  "https://res.cloudinary.com/dlsp49kl5/image/upload/w_1200,q_auto,f_auto/v1769758458/SanKP-7_zn4n5s.jpg"
];

let p = 0;
function startPhotoSequence() {
  const stage = document.getElementById("photoStage");
  const grid = document.getElementById("photoGrid");
  stage.innerHTML = "";
  grid.innerHTML = "";
  p = 0;

  function next() {
    if (p >= photos.length) {
      document.getElementById("photoNextBtn").disabled = false;
      return;
    }
    const img = new Image();
    img.src = photos[p];
    img.className = "stage-photo";
    stage.innerHTML = "";
    stage.appendChild(img);

    setTimeout(() => {
      img.classList.add("shrink");
      setTimeout(() => {
        const c = document.createElement("div");
        c.className = "photo-card";
        c.innerHTML = `<img src="${photos[p]}">`;
        grid.appendChild(c);
        p++;
        next();
      }, 1500);
    }, 3000);
  }
  next();
}
