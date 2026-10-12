const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav ul a");

if (menuBtn && nav) {
  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    menuBtn.classList.toggle("open");
    nav.classList.toggle("open");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuBtn.classList.remove("open");
      nav.classList.remove("open");
    });
  });

  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && !menuBtn.contains(e.target)) {
      menuBtn.classList.remove("open");
      nav.classList.remove("open");
    }
  });
}
