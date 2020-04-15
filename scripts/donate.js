var donateModal = document.getElementById("donate-modal");

var btn = document.getElementById("donate-submit");
btn.onclick = function() {
  donateModal.style.display = "block";
}

var span = document.getElementById("donate-close-button");

span.onclick = function() {
  donateModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == donateModal) {
    donateModal.style.display = "none";
  }
}


function moneyButton(id) {
  
  var x = document.getElementById(250);
  x.className = "button medium-button money-button";
  var x = document.getElementById(500);
  x.className = "button medium-button money-button";
  var x = document.getElementById(750);
  x.className = "button medium-button money-button";
  var x = document.getElementById(1000);
  x.className = "button medium-button money-button";
  var x = document.getElementById(2000);
  x.className = "button medium-button money-button";
  var x = document.getElementById(2500);
  x.className = "button medium-button money-button";

  x = document.getElementById(id);
  if (x.className === "button medium-button money-button") {
      x.className += " money-button-clicked";
  } else {
      x.className = "button medium-button money-button";
  }

}