const music = document.getElementById("bgMusic");

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
