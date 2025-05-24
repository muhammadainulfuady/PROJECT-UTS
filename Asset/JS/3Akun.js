// login
function togglePassword() {
  const pw = document.getElementById("password");
  pw.type = pw.type === "password" ? "text" : "password";
}

function ketikaClick() {
  document.querySelector(".popup3").style.display = "block";
}

function closed() {
  document.querySelector(".popup3").style.display = "none";
}
