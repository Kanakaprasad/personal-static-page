const SECRET = "sanjana";
let currentStep = 1;

function checkName() {
  const v = document.getElementById("nameInput").value.trim().toLowerCase();
  if (v === SECRET) {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("content").classList.add("unblur");
  } else {
    document.getElementById("errorMsg").innerText = "Not for everyone 🌙";
  }
}

function nextStep() {
  document.getElementById(`step${currentStep}`).classList.remove("active");
  currentStep++;
  document.getElementById(`step${currentStep}`).classList.add("active");

  burst();
}

function burst() {
  const p = document.querySelector(".particles");
  p.style.opacity = "0.4";
  setTimeout(() => p.style.opacity = "0.15", 600);
}
