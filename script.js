const SECRET = "sanjana";
let currentStep = 1;
const totalSteps = 4;

const input = document.getElementById("nameInput");
const enterBtn = document.getElementById("enterBtn");
const content = document.getElementById("content");

/* ENTER KEY SUPPORT */
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

function nextStep() {
  if (currentStep >= totalSteps) return;
  document.getElementById(`step${currentStep}`).classList.remove("active");
  currentStep++;
  document.getElementById(`step${currentStep}`).classList.add("active");
}

function prevStep() {
  if (currentStep <= 1) return;
  document.getElementById(`step${currentStep}`).classList.remove("active");
  currentStep--;
  document.getElementById(`step${currentStep}`).classList.add("active");
}
