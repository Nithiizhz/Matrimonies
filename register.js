let currentStep = 0;
const steps = document.querySelectorAll(".form-step");
const indicators = document.querySelectorAll(".step-item");

function showStep(step) {
  steps.forEach((s, i) => {
    s.classList.toggle("active", i === step);
  });

  indicators.forEach((d, i) => {
    d.classList.toggle("active", i === step);
  });
}

function nextStep() {
  if (currentStep < steps.length - 1) {
    currentStep++;
    showStep(currentStep);
  }
}

function prevStep() {
  if (currentStep > 0) {
    currentStep--;
    showStep(currentStep);
  }
}

function submitRegister() {
  alert("Registration Successful!");
  window.location.replace("dashboard.html");
}
