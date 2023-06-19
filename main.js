// Sticky Menu
var scroll = document.querySelector("header");

window.onscroll = function () {
  if (window.pageYOffset >= scroll.offsetTop) {
    scroll.classList.add("sticky");
  } else {
    scroll.classList.remove("sticky");
  }
};

// Burger Menu
const togglebtn = document.querySelector(".toggle-burger");
const toggleicon = document.querySelector(".toggle-burger i");
const dropdownmenu = document.querySelector(".list-dropdown");

togglebtn.onclick = function () {
  dropdownmenu.classList.toggle("open");
  const isOpen = dropdownmenu.classList.contains("open");

  toggleicon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

// Video
var video = document.getElementById("vid");
var btn = document.getElementById("demo");
btn.style.background = "url(file/assets/play-solid.svg) no-repeat";
function Play() {
  if (video.paused) {
    video.play();
    btn.style.background = "url(file/assets/pause-solid.svg) no-repeat";
  } else {
    video.pause();
    btn.style.background = "url(file/assets/play-solid.svg) no-repeat";
  }
}
