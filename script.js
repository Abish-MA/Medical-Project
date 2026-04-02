// AOS
AOS.init({
  duration: 1000,
  once: true
});

// Queue Logic
let currentToken = 12;
let userToken = null;

function getToken() {
  userToken = currentToken + 1;
  document.getElementById("your").innerText = userToken;
}

// Auto update queue (demo)
setInterval(() => {
  currentToken++;
  document.getElementById("current").innerText = currentToken;
}, 5000);

// Parallax Smooth Effect
window.addEventListener("scroll", function () {
  const parallax = document.querySelector(".parallax");
  let scroll = window.pageYOffset;
  parallax.style.backgroundPositionY = scroll * 0.5 + "px";
});