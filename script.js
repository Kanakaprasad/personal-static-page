const SECRET_NAME = "sanjana";
const music = document.getElementById("bgMusic");

function checkName() {
  const input = document
    .getElementById("nameInput")
    .value.trim()
    .toLowerCase();

  if (input === SECRET_NAME) {
    unlockExperience();
  } else {
    document.getElementById("errorMsg").innerText =
      "Almost… but this surprise is for someone else 🌸";
  }
}

function unlockExperience() {
  const overlay = document.getElementById("overlay");
  const content = document.getElementById("content");

  overlay.style.opacity = "0";
  overlay.style.pointerEvents = "none";

  setTimeout(() => {
    overlay.style.display = "none";
    content.classList.add("unblur");
  }, 900);
}

function startExperience() {
  document.querySelector(".hero").classList.add("hidden");

  showSection(".message", "music/intro.mp3");
  setTimeout(() => showSection(".cards", "music/memories.mp3"), 4000);
  setTimeout(() => showSection(".photos"), 8000);
  setTimeout(() => showSection(".letter"), 12000);
  setTimeout(() => showSection(".ending", "music/ending.mp3"), 16000);
}

function showSection(selector, song) {
  const section = document.querySelector(selector);
  section.classList.remove("hidden");

  if (song) {
    music.src = song;
    music.play().catch(() => {});
  }
}
