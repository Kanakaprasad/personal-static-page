const SECRET = "sanjana";
let currentStep = 1;
const totalSteps = 4;

const input = document.getElementById("nameInput");
const enterBtn = document.getElementById("enterBtn");
const content = document.getElementById("content");
const floatingContainer = document.getElementById("floatingTexts");

let floatingInterval = null;

const floatingWords = [
  "Sanju 💖",
  "Sanji ✨",
  "Dear 🌸",
  "Sanjana ❤️",
  "My Dear 💕",
  "Hendti 🥺❤️",
  "Sanju 💗",
  "— KP 💫"
];

/* Gate */
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") checkName();
});
enterBtn.addEventListener("click", checkName);

function checkName() {
  const v = input.value.trim().toLowerCase();
  if (v === SECRET) {
    document.getElementById("overlay").style.display = "none";
    content.classList.remove("blurred");
    content.classList.add("unblur");
  } else {
    document.getElementById("errorMsg").innerText = "Not for everyone 🌙";
  }
}

/* Navigation */
function nextStep() {
  if (currentStep >= totalSteps) return;
  toggleFloating(false);

  document.getElementById(`step${currentStep}`).classList.remove("active");
  currentStep++;
  document.getElementById(`step${currentStep}`).classList.add("active");

  toggleFloating(currentStep === 3);
}

function prevStep() {
  if (currentStep <= 1) return;
  toggleFloating(false);

  document.getElementById(`step${currentStep}`).classList.remove("active");
  currentStep--;
  document.getElementById(`step${currentStep}`).classList.add("active");

  toggleFloating(currentStep === 3);
}

/* Floating logic */
function toggleFloating(start) {
  if (start) {
    if (floatingInterval) return;
    floatingInterval = setInterval(createFloatingText, 1800);
  } else {
    clearInterval(floatingInterval);
    floatingInterval = null;
  }
}

function createFloatingText() {
  const span = document.createElement("span");
  span.className = "floating-text";
  span.innerText = floatingWords[Math.floor(Math.random() * floatingWords.length)];
  span.style.left = Math.random() * 80 + 10 + "%";
  span.style.fontSize = Math.random() * 0.6 + 1 + "rem";

  floatingContainer.appendChild(span);

  setTimeout(() => span.remove(), 6000);
}
