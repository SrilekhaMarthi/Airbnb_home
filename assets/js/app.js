const toggle_menu = document.querySelector(".show-menu");
const hiddenMenu = document.querySelector(".hidden-menu");
const root = document.getElementById('root');

//Close menu when clicked outside
document.addEventListener("click", (e) => {
  if (!e.target.classList.contains("menu-toggler")) {
    hiddenMenu.classList.remove("show");
  }
});

toggle_menu.addEventListener("click", () =>
  hiddenMenu.classList.toggle("show")
);

