const hambugerMenu = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const activeLink = document.querySelectorAll(".nav-link");
const currentYear = document.querySelector("#current-year");

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

function getYear() {
  const date = new Date();
  const year = date.getFullYear();
  currentYear.innerText = year;
}
getYear();
