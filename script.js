const SECRET = "sanjana";
let currentStep = 1;
const totalSteps = 4;

const input = document.getElementById("nameInput");
const enterBtn = document.getElementById("enterBtn");
const content = document.getElementById("content");

const loveFlow = document.getElementById("loveFlow");
const loveText = document.getElementById("loveText");

let loveInterval = null;
let loveIndex = 0;

const loveWords = [
  "Sanju 💖",
  "Sanji ✨",
  "Dear 🌸",
  "Sanjana ❤️",
  "My Dear 💕",
  "Sanju 💗",
  "Sanju 🧡 KP",
  "KP 🧡 Sanju"
];

/* Gate */
input.addEventListener("keydown", e => {
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
  stopLoveFlow();

  document.getElementById(`step${currentStep}`).classList.remove("active");
  currentStep++;
  document.getElementById(`step${currentStep}`).classList.add("active");

  if (currentStep === 3) startLoveFlow();
}

function prevStep() {
  if (currentStep <= 1) return;
  stopLoveFlow();

  document.getElementById(`step${currentStep}`).classList.remove("active");
  currentStep--;
  document.getElementById(`step${currentStep}`).classList.add("active");

  if (currentStep === 3) startLoveFlow();
}

/* 💖 Love flow control */
function startLoveFlow() {
  loveFlow.classList.remove("hidden");
  showNextLove();
  loveInterval = setInterval(showNextLove, 3200);
}

function stopLoveFlow() {
  clearInterval(loveInterval);
  loveInterval = null;
  loveFlow.classList.add("hidden");
}

function showNextLove() {
  loveText.style.animation = "none";
  loveText.offsetHeight; // reflow
  loveText.innerText = loveWords[loveIndex % loveWords.length];
  loveText.style.animation = "loveText 3s ease forwards";
  loveIndex++;
}
