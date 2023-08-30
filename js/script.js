"use strict";

/* adiciona evento no elemento */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};

/* navbar altera */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navAltera = document.querySelector("[data-nav-altera]");

const alteraNavbar = function () {
  navbar.classList.toggle("active");
  navAltera.classList.toggle("active");
  document.body.classList.toggle("active");
};

addEventOnElem(navAltera, "click", alteraNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navAltera.classList.remove("active");
  document.body.classList.remove("active");
};

addEventOnElem(navbarLinks, "click", closeNavbar);

/* header active */

const header = document.querySelector("[data-header]");

const activeHeader = function () {
  if (window.scrollY > 300) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};

addEventOnElem(window, "scroll", activeHeader);

/* scroll effect */

const sections = document.querySelectorAll("[data-section]");

const scrollReveal = function () {
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].getBoundingClientRect().top < window.innerHeight / 1.5) {
      sections[i].classList.add("active");
    } else {
      sections[i].classList.remove("active");
    }
  }
};

scrollReveal();

addEventOnElem(window, "scroll", scrollReveal);
