const SECRET = "sanjana";
let currentScene = 0;

/* Scenes */
const scenes = document.querySelectorAll(".scene");
const backBtn = document.getElementById("backBtn");

/* Login */
const unlockBtn = document.getElementById("unlockBtn");
const nameInput = document.getElementById("nameInput");
const errorText = document.getElementById("errorText");

/* Music */
const music = document.getElementById("bgMusic");
const muteBtn = document.getElementById("muteBtn");
let muted = false;

/* Music placeholders */
const musicTracks = [
  "music/intro.mp3",
  "music/intro.mp3",
  "music/story.mp3",
  "music/memories.mp3",
  "music/proposal.mp3",
  "music/letter.mp3"
];

/* Story (YOUR TEXT — UNCHANGED) */
const storyParagraphs = [
`Hi, Nanna Preethiya hendatige ninna gandan kade inda Happy Valentine's Day 💌`,

`Let's start my one of the best chaper in my life and ninu nanna life ge bandiddu and ninna love madidde nange best ever experience and feeling`,

`Yellinda start madbeku gottagtilla but I've to start,`,

`21st Dec , date will be day to remember forever, that's the day we've to decided to leave together forever and that's the day navu ibru madve ago plan madiddu, that's day nanu obne allade nangu ondu family ide anta adanna taleli itkondu yelladannu vichar madok start madide, and avatte for the first time nanu astondu full low voice nalli and kai shake madta and bhaya dalli mathadiddu anisutte 😁, aa tara yavattu experience agirlilla nange, thanks for the experience 😊`,

`Nange ondu hemme ide Nanu ninna select madi madve agidke namma appa amma proud agtare anta and avre heltare like, nave hudugi huduki select madidre kanaka ga inta hudugi hudkoke agta irlilla anta because astondu ollevla na nane select madini 😊`,

`One of the best night andre nange 1st jan 2026 year night, I mean adu unexpected agi alle iroke plan madiddu adu hange iddu 2025 na ninna jote ne emd madide and 2026 na ninna jote ne start madide, and unexpectedly that kiss will be my best ever kiss agutte and nanu lifelong mariyall adanna, hinge yella year nu end agli and start agli till.my last breath anta ase, but ee year yellu plan madoke aglilla next year bere yalladru trip hogi plan madona, like ninu helidange Keral or bere yelladru hogi alli celebration madona, nange otnalli ninu irbeku nanna jote aste sak`,

`En gotta ee feb 14th nalli ondu helbeku anstu, tumba bega andre within one or two months nalli ninna namma urige karkondu hogo plan ide and adre ivagle namma maneyali heltini, andre avrigu kushi agli, and ninna nodidre namma maneli definitely opkontare and ista padtare promise 🥺, just ninu enu and ninu yentolu anta helidre saku opkontare, adre within 2-3 months nalle maneli heltini and adastu bega namma manege baroke ready agu sorry, adastu bega nimma manege baroke, ninna gandan manege baroke and nimma atte mavana nodi avra jote mathadoke ready agu`
];

const storyBox = document.getElementById("storyBox");
let storyIndex = 0;

/* Photos */
const photos = [
  "https://res.cloudinary.com/dlsp49kl5/image/upload/v1769758489/Sanju-1_x6t8eh.jpg",
  "https://res.cloudinary.com/dlsp49kl5/image/upload/v1769758489/SanKP-9_whwphg.jpg",
  "https://res.cloudinary.com/dlsp49kl5/image/upload/v1769758484/SanKP-5_dbjx0a.jpg",
  "https://res.cloudinary.com/dlsp49kl5/image/upload/v1769758483/Sanju-2_kz1yqa.jpg",
  "https://res.cloudinary.com/dlsp49kl5/image/upload/v1769758482/Sanju-4_r0xjpd.jpg"
];

const photoStage = document.getElementById("photoStage");
const photoGrid = document.getElementById("photoGrid");
const photoNextBtn = document.getElementById("photoNextBtn");

/* Lottie */
lottie.loadAnimation({
  container: document.getElementById("lottie-bg"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "https://assets10.lottiefiles.com/packages/lf20_jppxqf.json"
});

/* Login */
unlockBtn.onclick = () => {
  if (nameInput.value.trim().toLowerCase() === SECRET) {
    startMusic();
    nextScene();
  } else {
    errorText.textContent = "This page is waiting for someone else…";
    nameInput.classList.add("shake");
    setTimeout(() => nameInput.classList.remove("shake"), 400);
  }
};

/* Scene navigation */
function showScene(i) {
  scenes.forEach(s => s.classList.remove("active"));
  scenes[i].classList.add("active");
  currentScene = i;
  backBtn.style.display = i === 0 ? "none" : "block";
  changeMusic(i);
}

function nextScene() {
  if (currentScene < scenes.length - 1) {
    showScene(currentScene + 1);
    if (currentScene + 1 === 3) startPhotos();
  }
}

function prevScene() {
  if (currentScene > 0) showScene(currentScene - 1);
}

backBtn.onclick = prevScene;

/* Story */
function nextStory() {
  if (storyIndex < storyParagraphs.length) {
    const p = document.createElement("p");
    p.className = "story-line";
    p.textContent = storyParagraphs[storyIndex];
    storyBox.appendChild(p);
    storyIndex++;
  } else {
    nextScene();
  }
}

/* Photos */
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
          if (i === photos.length - 1) photoNextBtn.disabled = false;
        }, 1200);
      }, 1500);
    }, i * 900);
  });
}

/* Music */
function startMusic() {
  music.src = musicTracks[0];
  music.play().catch(()=>{});
}

function changeMusic(i) {
  music.src = musicTracks[i];
  music.play().catch(()=>{});
}

muteBtn.onclick = () => {
  muted = !muted;
  music.muted = muted;
  muteBtn.textContent = muted ? "🔇" : "🔊";
};
