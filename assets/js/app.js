const header = document.getElementById("header");
const nav = document.getElementById("nav");
const toggle_menu = document.querySelector(".show-menu");
const hiddenMenu = document.querySelector(".hidden-menu");
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) nav.classList.add("sticky");
      else nav.classList.remove("sticky");
    });
  },
  {
    threshold: 0,
  }
);
console.log(header);
observer.observe(header);
toggle_menu.addEventListener("click", () =>
  hiddenMenu.classList.toggle("show")
);
