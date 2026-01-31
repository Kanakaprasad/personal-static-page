const SECRET = "sanjana";
const music = document.getElementById("bgMusic");
const muteBtn = document.getElementById("muteBtn");

function unlock() {
  const name = document.getElementById("nameInput").value.toLowerCase().trim();
  if (name === SECRET) {
    document.getElementById("login").style.display = "none";
    document.getElementById("content").style.display = "block";
    music.volume = 0.3;
    music.play().catch(()=>{});
  } else {
    document.getElementById("error").innerText = "This page is waiting for someone else…";
  }
}

muteBtn.onclick = () => {
  music.muted = !music.muted;
  muteBtn.innerText = music.muted ? "🔇" : "🔊";
};

/* LOTTIE HEARTS */
lottie.loadAnimation({
  container: document.getElementById("lottie-hearts"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "https://assets10.lottiefiles.com/packages/lf20_jppxqf.json"
});

/* PHOTOS (15+) */
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

const container = document.getElementById("photos");

let delay = 0;
photos.forEach(src => {
  const img = document.createElement("img");
  img.src = src;
  img.style.animationDelay = `${delay}s`;
  img.className = "photo";
  container.appendChild(img);
  delay += 3; // SLOW on purpose
});
