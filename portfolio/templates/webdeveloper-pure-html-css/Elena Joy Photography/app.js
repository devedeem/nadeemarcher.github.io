const nav = document.querySelector(".nav-ul");
const burger = document.querySelector(".burger");
const links = document.querySelectorAll("a");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
  burger.classList.toggle("toggle");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
    burger.classList.toggle("toggle");
  });
});

// window.onload = function () {
//   console.log(links);
// };
