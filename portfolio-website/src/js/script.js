/* Helper function to get element */
function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such a element exist.`
  );
}

/* Toggle menu */
const navMenu = getElement("#nav-menu");
const menuBtn = getElement("#menu-btn");
const navCloseBtn = getElement("#nav-close-btn");
const navLinks = document.querySelectorAll(".nav-link");
const navBar = getElement("nav");

menuBtn.addEventListener("click", () => {
  navMenu.classList.remove("hidden");
});

navCloseBtn.addEventListener("click", () => {
  navMenu.classList.add("hidden");
});

/* Remove mobile menu when clicked on the nav link */
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    navMenu.classList.add("hidden");
  });
});

/* Swiper Projects */
let swiper = new Swiper(".projects-swiper", {
  loop: true,
  spaceBetween: 24,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  keyboard: true,

  breakpoints: {
    1200: {
      slidesPerView: 2,
      spaceBetween: -56,
    },
  },
});

/* Swiper Testimonial */
let swiperTestimonial = new Swiper(".testimonial-swiper", {
  grabCursor: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/* Active nav menu while scrolling */
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const navHeight = navBar.offsetHeight;
    const sectionTop = section.offsetTop - navHeight;
    const sectionID = section.getAttribute("id");
    const navLinkClass = navMenu.querySelector(`a[href*=${sectionID}]`);
    const darkMode = document.documentElement.classList.contains("dark");

    if (darkMode) {
      if (darkMode) {
        if (
          scrollHeight > sectionTop &&
          scrollHeight <= sectionTop + sectionHeight
        ) {
          navLinkClass.classList.add("dark:text-dark-title-color");
        } else {
          navLinkClass.classList.remove("dark:text-dark-title-color");
        }
      }
    } else {
      if (
        scrollHeight > sectionTop &&
        scrollHeight <= sectionTop + sectionHeight
      ) {
        navLinkClass.classList.add("text-title-color");
      } else {
        navLinkClass.classList.remove("text-title-color");
      }
    }
  });
});

/* Show scroll up button and fixed navbar on the top */
const scrollUpLink = getElement("#scroll-up");

window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  //We can use both offsetHeight or getBound method to get height, offsetHeight read only, only gives a number in pexel
  //const navHeight = navBar.getBoundingClientRect().height;
  const navHeight = navBar.offsetHeight;

  scrollHeight > navHeight
    ? navBar.classList.add("shadow-box-shadow-1")
    : navBar.classList.remove("shadow-box-shadow-1");

  scrollHeight > 500
    ? scrollUpLink.classList.remove("hidden")
    : scrollUpLink.classList.add("hidden");
});

/* Dark Theme */
const sunIcon = getElement("#sun");
const moonIcon = getElement("#moon");

const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

const iconToggle = () => {
  sunIcon.classList.toggle("hidden");
  moonIcon.classList.toggle("hidden");
};

const checkTheme = () => {
  if (userTheme === "dark" || (!userTheme && systemTheme)) {
    document.documentElement.classList.add("dark");
    moonIcon.classList.add("hidden");
    return;
  }
  sunIcon.classList.add("hidden");
};

const switchTheme = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    iconToggle();
    return;
  }
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
  iconToggle();
};

sunIcon.addEventListener("click", () => {
  switchTheme();
});

moonIcon.addEventListener("click", () => {
  switchTheme();
});

checkTheme();
