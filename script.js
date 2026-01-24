const SECRET = "sanjana";

function checkName() {
  const v = document.getElementById("nameInput").value.trim().toLowerCase();
  if (v === SECRET) {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("content").classList.add("unblur");
  } else {
    document.getElementById("errorMsg").innerText = "Not for everyone 🌙";
  }
}

function startExperience() {
  revealOnScroll();
  playMusic("music/intro.mp3");
}

function playMusic(src) {
  const m = document.getElementById("bgMusic");
  m.src = src;
  m.play().catch(()=>{});
}

function revealOnScroll() {
  const items = document.querySelectorAll(".reveal");
  window.addEventListener("scroll", () => {
    items.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        el.classList.add("active");
      }
    });
  });
}
