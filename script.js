"use strict";
const openMenu = document.querySelector("#open-menu");
const ul = document.querySelector("nav > ul");
const closeMenu = document.querySelector("#close-menu");
console.log(ul);

openMenu.addEventListener("click", () => {
  console.log("I'm being clicked");
  ul.classList.toggle("show");
  closeMenu.style.display = "block";
  openMenu.style.display = "none";
});

closeMenu.addEventListener("click", () => {
  closeMenu.style.display = "none";
  openMenu.style.display = "block";
  ul.classList.toggle("show");
});