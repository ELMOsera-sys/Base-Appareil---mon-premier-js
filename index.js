const emailInput = document.getElementById("emailInput");
const form = document.getElementById("emailForm");
const errorIcon = document.getElementById("error-icon");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  emailInput.setCustomValidity("");
  
  if (emailInput.value === "") {
    emailInput.setCustomValidity("Please provide a valid email address");
    errorIcon.style.display = "inline-block";
  } else if (!emailInput.checkValidity()) {
    emailInput.setCustomValidity("Please provide a valid email address");
    errorIcon.style.display = "inline-block";
  }else{
    errorIcon.style.display ="none"
  }
  
  emailInput.reportValidity();
});