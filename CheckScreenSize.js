function Forever() {
  if (window.innerWidth < 1265 && window.location.href.includes("index.html")) {
  window.location.href = "TooSmallScreen.html";
  }
  else if (window.innerWidth >= 1265 && window.location.href.includes("TooSmallScreen.html")) {
  window.location.href = "index.html";
  }
}

setInterval(Forever, 200);