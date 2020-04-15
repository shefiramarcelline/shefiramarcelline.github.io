var nav = document.getElementById('nav');

function scrollTo(element) {
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: element.offsetTop
  });
}


document.getElementById("main-button").addEventListener('click', (e) => {
scrollTo(document.getElementById("main-content"));
});



function responsive() {
  var x = document.getElementById("nav");
  if (x.className === "navbar") {
      x.className += " responsive";
  } else {
      x.className = "navbar";
  }
}

var modal = document.getElementById("thank-you");

var btn = document.getElementById("join-button");
btn.onclick = function() {
  modal.style.display = "block";
}

var span = document.getElementById("close-button");

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}