var connectModal = document.getElementById("connect-modal");

var btn = document.getElementById("connect-submit");
btn.onclick = function() {
  connectModal.style.display = "block";
}

var span = document.getElementById("connect-close-button");

span.onclick = function() {
  connectModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == connectModal) {
    connectModal.style.display = "none";
  }
}