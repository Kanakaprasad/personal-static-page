const SECRET = "sanjana";
let currentScene = 0;

/* ===== ELEMENTS ===== */
const scenes = document.querySelectorAll(".scene");
const backBtn = document.getElementById("backBtn");
const music = document.getElementById("bgMusic");
const muteBtn = document.getElementById("muteBtn");

/* ===== LOGIN ===== */
function unlock() {
  const name = document.getElementById("nameInput").value.trim().toLowerCase();
  if (name === SECRET) {
    music.volume = 0.35;
    music.play().catch(() => {});
    nextScene();
  } else {
    document.getElementById("error").innerText =
      "This page is waiting for someone else…";
  }
}

/* ===== SCENE NAV ===== */
function showScene(index) {
  scenes.forEach(s => s.classList.remove("active"));
  scenes[index].classList.add("active");
  currentScene = index;
  backBtn.style.display = index === 0 ? "none" : "block";
}

function nextScene() {
  if (currentScene < scenes.length - 1) {
    showScene(currentScene + 1);
    if (currentScene + 1 === 4) startPhotos();
  }
}

function prevScene() {
  if (currentScene > 0) showScene(currentScene - 1);
}

backBtn.onclick = prevScene;

/* ===== MUSIC ===== */
muteBtn.onclick = () => {
  music.muted = !music.muted;
  muteBtn.innerText = music.muted ? "🔇" : "🔊";
};

/* ===== STORY (YOUR TEXT, UNTOUCHED) ===== */
const storyText = `
Hi, Nanna Preethiya hendatige ninna gandan kade inda Happy Valentine's Day 💌 

Let's start my one of the best chaper in my life and ninu nanna life ge bandiddu and ninna love madidde nange best ever experience and feeling


Yellinda start madbeku gottagtilla but I've to start,

21st Dec , date will be day to remember forever, that's the day we've to decided to leave together forever and that's the day navu ibru madve ago plan madiddu, that's day nanu obne allade nangu ondu family ide anta adanna taleli itkondu yelladannu vichar madok start madide, and avatte for the first time nanu astondu full low voice nalli and kai shake madta and bhaya dalli mathadiddu anisutte 😁, aa tara yavattu experience agirlilla nange, thanks for the experience 😊


Nange ondu hemme ide Nanu ninna select madi madve agidke namma appa amma proud agtare anta and avre heltare like, nave hudugi huduki select madidre kanaka ga inta hudugi hudkoke agta irlilla anta because astondu ollevla na nane select madini 😊


One of the best night andre nange 1st jan 2026 year night,  I mean adu unexpected agi alle iroke plan madiddu adu hange iddu 2025 na ninna jote ne emd madide and 2026 na ninna jote ne start madide, and unexpectedly that kiss will be my best ever kiss agutte and nanu lifelong mariyall adanna, hinge yella year nu end agli and start agli till.my last breath anta ase, but ee year yellu plan madoke aglilla next year bere yalladru trip hogi plan madona, like ninu helidange Keral or bere yelladru hogi alli celebration madona, nange otnalli ninu irbeku nanna jote aste sak


En gotta ee feb 14th nalli ondu helbeku anstu, tumba bega andre within one or two months nalli ninna namma urige karkondu hogo plan ide and adre ivagle namma maneyali heltini, andre avrigu kushi agli, and ninna nodidre namma maneli definitely opkontare and ista padtare promise 🥺, just ninu enu and ninu yentolu anta helidre saku opkontare, adre within 2-3 months nalle maneli heltini and adastu bega namma manege baroke ready agu sorry, adastu bega nimma manege baroke, ninna gandan manege baroke and nimma atte mavana nodi avra jote mathadoke ready agu
`;

const paragraphs = storyText.trim().split("\n\n");
const storyBox = document.getElementById("storyBox");
let storyIndex = 0;

function revealNextParagraph() {
  if (storyIndex < paragraphs.length) {
    const p = document.createElement("p");
    p.className = "story-line";
    p.textContent = paragraphs[storyIndex];
    storyBox.appendChild(p);
    storyIndex++;
  } else {
    nextScene();
  }
}

/* ===== PHOTOS (ALL 15+) ===== */
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

const photoStage = document.getElementById("photoStage");
const photoGrid = document.getElementById("photoGrid");
const photoNextBtn = document.getElementById("photoNextBtn");

function startPhotos() {
  photos.forEach((src, i) => {
    setTimeout(() => {
      const img = document.createElement("img");
      img.src = src;
      img.className = "stage-photo";
      photoStage.appendChild(img);

      setTimeout(() => {
        img.classList.add("shrink");
        setTimeout(() => {
          photoStage.removeChild(img);
          const card = document.createElement("div");
          card.className = "photo-card";
          card.innerHTML = `<img src="${src}">`;
          photoGrid.appendChild(card);
          if (i === photos.length - 1) {
            photoNextBtn.disabled = false;
          }
        }, 1200);
      }, 2000);
    }, i * 1800); // SLOW on purpose
  });
}
