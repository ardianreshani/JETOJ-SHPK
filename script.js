const hambugerMenu = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const activeLink = document.querySelectorAll(".nav-link");

hambugerMenu.addEventListener("click", () => {
  menu.classList.toggle("active");
  hambugerMenu.classList.toggle("active");
});

activeLink.forEach((link) => {
  link.addEventListener("click", () => {
    if (link.classList.contains("active-nav")) {
      link.classList.remove("active-nav");
    }
  });
});
