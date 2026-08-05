const burger = document.querySelector("#burger");
const nav = document.querySelector("#main-nav");
const navLinks = document.querySelectorAll("#nav-list a");

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

burger.addEventListener("click", toggleMenu);

document.addEventListener("click", (e) => {
  const target = e.target;
  if (!target.closest(".burger") && !target.closest(".main-nav")) {
    closeMenu();
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});
