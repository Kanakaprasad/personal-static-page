const SECRET = "sanjana";
let currentStep = 1;
const totalSteps = 4;

const input = document.getElementById("nameInput");
const enterBtn = document.getElementById("enterBtn");
const content = document.getElementById("content");
const ambientContainer = document.getElementById("ambientTexts");

let ambientTimer = null;

/* 🌸 Floating affectionate words */
const words = [
  "Sanju 💖",
  "Sanji ✨",
  "Dear 🌸",
  "Sanjana ❤️",
  "My Dear 💕",
  "Hendti 🥺❤️",
  "Sanju 💗",
  "Sanju 🧡 KP",
  "KP 🧡 Sanju"
];

/* 🔐 Gate logic */
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") checkName();
});
enterBtn.addEventListener("click", checkName);

function checkName() {
  if (input.value.trim().toLowerCase() === SECRET) {
    document.getElementById("overlay").style.display = "none";
    content.classList.remove("blurred");
    content.classList.add("unblur");

    // 🌸 START ambient names immediately
    startAmbient();
  } else {
    document.getElementById("errorMsg").innerText =
      "Not for everyone 🌙";
  }
}

/* ▶️ Navigation */
function nextStep() {
  if (currentStep >= totalSteps) return;

  document.getElementById(`step${currentStep}`).classList.remove("active");
  currentStep++;
  document.getElementById(`step${currentStep}`).classList.add("active");

  // Optional: stop ambient only on final step
  if (currentStep === 4) {
    stopAmbient();
  }
}

function prevStep() {
  if (currentStep <= 1) return;

  document.getElementById(`step${currentStep}`).classList.remove("active");
  currentStep--;
  document.getElementById(`step${currentStep}`).classList.add("active");

  // Resume ambient if coming back from final step
  if (currentStep < 4) {
    startAmbient();
  }
}

/* 💕 Ambient floating logic */
function startAmbient() {
  if (ambientTimer) return;
  ambientTimer = setInterval(createAmbientText, 700);
}

function stopAmbient() {
  clearInterval(ambientTimer);
  ambientTimer = null;
}

function createAmbientText() {
  const span = document.createElement("span");
  span.className = "ambient";
  span.innerText = words[Math.floor(Math.random() * words.length)];

  span.style.left = Math.random() * 100 + "%";
  span.style.fontSize = Math.random() * 6 + 12 + "px";
  span.style.animationDuration = Math.random() * 4 + 6 + "s";

  ambientContainer.appendChild(span);

  setTimeout(() => span.remove(), 10000);
}
