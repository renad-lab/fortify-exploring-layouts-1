const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".ham-menu");
const menuImg = document.querySelector(".menu-img");
const expandParent = document.querySelectorAll(".expand-close");
const expandChild = document.querySelectorAll(".expand");
const expandSvg = document.querySelectorAll(".arrow-exp");
const overlay = document.querySelector(".overlay");
const links = document.querySelectorAll(".link");

// toggle the images

function closeMenu() {
  menuImg.src = "./images/icon-menu.svg";
  menuImg.setAttribute("data-open", "false");
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

// menu toggle events
menu.addEventListener("click", (e) => {
  if (menuImg.getAttribute("data-open") === "false") {
    menuImg.src = "./images/icon-close-menu.svg";
    menuImg.setAttribute("data-open", "true");
    navbar.classList.add("active");
    overlay.classList.add("active");
  } else if (menuImg.getAttribute("data-open") === "true") {
    closeMenu();
  }
});
overlay.addEventListener("click", closeMenu);

// links clicked
links.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

// toggle expansion
expandParent[0].addEventListener("click", (e) => {
  expandChild[0].classList.toggle("active");
  expandSvg[0].classList.toggle("active");
});
expandParent[1].addEventListener("click", (e) => {
  expandChild[1].classList.toggle("active");
  expandSvg[1].classList.toggle("active");
});
