// Make mobile navigation work

const btn_nav = document.querySelector(".btn-mobile-nav");
console.log(btn_nav)
const header = document.querySelector(".header");
console.log(header)
btn_nav.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});