// HERO BUTTON

function showMessage() {
  alert("Appointment Booking Feature Coming Soon!");
}

// FORM SUBMIT

const form = document.getElementById("appointmentForm");

form.addEventListener("submit", function(event){

  event.preventDefault();

  const name = document.getElementById("name").value;

  alert("Appointment Submitted Successfully, " + name);

  form.reset();

});