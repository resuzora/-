const burger = document.querySelector("#burger");
const nav = document.querySelector("#main-nav");
const navLinks = document.querySelectorAll("#nav-list");

/*Функции*/

function openMenu() {
  burger.classList.add("active");
  nav.classList.add("active");
  document.body.classList.add("no-scroll");
}
function closeMenu() {
  burger.classList.remove("active");
  nav.classList.remove("active");
  document.body.classList.remove("no-scroll");
}
function toggleMenu() {
  if (burger.classList.contains("active")) {
    closeMenu();
  } else {
    openMenu();
  }
}

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  const target = e.target;
  if (!target.closest(".burger") && !target.closest(".nav")) {
    closeMenu();
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});
