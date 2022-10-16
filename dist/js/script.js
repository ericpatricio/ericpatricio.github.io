"use strict";

// Navbar on scroll background color dark | social media icons display none
const navbar = document.querySelector(".navbar");
const socialIcons = document.querySelector(".social-media");
const navToggler = document.querySelector(".navbar-toggler");
const collapse = document.querySelector(".navbar-collapse");
window.onscroll = function () {
  let top = window.scrollY;
  if (top >= 100) {
    navbar.classList.add("navbarDark");
  } else {
    navbar.classList.remove("navbarDark");
  }
  if (top >= 2800) {
    socialIcons.style.display = "none";
  } else {
    socialIcons.style.display = "flex";
  }
};
// /////////////////////////
// Add eventlistener to document object to look for class navbar show
document.addEventListener("click", function (e) {
  if (e.target === navToggler) {
    collapse.classList.add("show");
  } else {
    collapse.classList.remove("show");
  }
});
// //////////////////////////////////////
// Enable tooltips with bootstrap
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl)
);
// ////////////////////////////////////////////////////////////
// Contact form;
document.querySelector("#contact-form").addEventListener("submit", e => {
  e.preventDefault();
  e.target.elements.name.value = "";
  e.target.elements.email.value = "";
  e.target.elements.message.value = "";
});
// Copyright footer
const year = document.querySelector("#current-year");
year.innerHTML = new Date().getFullYear();
