const SECRET_NAME = "sanjana";
const music = document.getElementById("bgMusic");

window.onload = () => {
  if (sessionStorage.getItem("accessGranted") === "true") {
    unlockPage();
  }
};

function checkName() {
  const input = document
    .getElementById("nameInput")
    .value.trim()
    .toLowerCase();

  if (input === SECRET_NAME) {
    sessionStorage.setItem("accessGranted", "true");
    unlockPage();
  } else {
    document.getElementById("errorMsg").innerText =
      "Hmm… this page isn’t for you 🌸";
  }
}

function unlockPage() {
  document.getElementById("gate").style.display = "none";
  document.getElementById("protectedContent").classList.remove("hidden");
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
