"strict mode";

const btnHamburger = document.querySelector("#hamburger-btn");
const menuNavigation = document.querySelector("#menu-navigation");
const body = document.querySelector("#body");
const navbar = document.querySelector("#navbar");
const hero = document.querySelector("#hero");
const title = document.querySelectorAll("#title");
const info = document.querySelectorAll("#info");
const card = document.querySelector("#card");

// !Menu Navigation
let isMenuOpen = false;

// Displaying Menu Navigation function
const showNavigation = function () {
  menuNavigation.classList.toggle("opacity-0");
  menuNavigation.classList.toggle("opacity-100");
  menuNavigation.classList.toggle("invisible");
  body.classList.toggle("overflow-hidden");
};

btnHamburger.addEventListener("click", function () {
  // Animated Hamburger
  isMenuOpen = !isMenuOpen;
  if (isMenuOpen) {
    btnHamburger.classList.add("open");
  } else {
    btnHamburger.classList.remove("open");
  }

  // Displaying the Menu Navigation
  if (menuNavigation.classList.contains("opacity-0")) {
    showNavigation();
  } else {
    showNavigation();
  }
});

//! Hiding and Showing Navbar onscroll
window.onwheel = (e) => {
  if (e.deltaY > 0) {
    navbar.classList.add("-translate-y-full");
  } else {
    navbar.classList.remove("-translate-y-full");
  }
};

//Intersection Observer

//! Hero Observer
const heroFadeIn = function (entries) {
  const [entry] = entries;
  if (entry.isIntersecting) hero.classList.add("opacity-100");
  heroObserver.unobserve;
};

const heroObserver = new IntersectionObserver(heroFadeIn, {
  root: null,
  threshold: 0,
});

heroObserver.observe(hero);

//! Title Observer
const textFadeIn = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.classList.add("opacity-100");
  observer.unobserve(entry.target);
};

const titleObserver = new IntersectionObserver(textFadeIn, {
  root: null,
  threshold: 0.3,
});

title.forEach(function (title) {
  titleObserver.observe(title);
});

titleObserver.observe(card);

//! Info Observer
const infoFadeIn = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.classList.add("opacity-100");
  entry.target.classList.add("translate-x-0");
  entry.target.classList.remove("translate-x-8");
  entry.target.classList.remove("-translate-x-8");
  observer.unobserve(entry.target);
};

const infoObserver = new IntersectionObserver(infoFadeIn, {
  root: null,
  threshold: 0.15,
});

info.forEach(function (info) {
  infoObserver.observe(info);
});

// !Logo
