"use strict";

// Navbar on scroll background color dark | social media icons display none
const navbar = document.querySelector(".navbar");
const socialIcons = document.querySelector(".social-media");

const the_animation = document.querySelectorAll(".animation");

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("scroll-animation");
    }
  });
}, options);

for (let i = 0; i < the_animation.length; i++) {
  const elements = the_animation[i];

  observer.observe(elements);
}

// select the things we need form the DOM
let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".navbar-menu");
let navMenuUl = document.querySelector(".navbar-menu ul");
let navLinks = document.querySelectorAll(".navbar-menu li");

// toggle nav on click of hamburger menu icon
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("nav-active");
  // burger animation
  hamburger.classList.toggle("toggle");
});
// close nav by clicking on list items
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (hamburger.classList.contains("toggle")) {
      hamburger.classList.remove("toggle");
    }
    if (navMenu.classList.contains("nav-active")) {
      navMenu.classList.remove("nav-active");
    }
  });
});

window.onscroll = function () {
  let top = window.scrollY;

  if (top) {
    navbar.classList.add("navbarOnScroll");
  } else {
    navbar.classList.remove("navbarOnScroll");
  }
};

// //////////////////////////////////////
// Enable tooltips with bootstrap
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl)
);
// ////////////////////////////////////////////////////////////

// Copyright footer
const year = document.querySelector("#current-year");
year.innerHTML = new Date().getFullYear();
