"use strict";

var menuNav = document.getElementById("menu_nav");

var menuTrigger = document.getElementById("menu_trigger");

function menuToggle() {
  if (menuNav.style.display === "flex") {
    menuNav.style.display = "none";
  } else {
    menuNav.style.display = "flex";
  }
}
function checkWindowSize() {
  if (window.innerWidth >= 606) {
    menuNav.style.display = "flex";
  }
}

menuTrigger.onclick = menuToggle;

window.onresize = checkWindowSize;
