const toggle_menu = document.querySelector(".show-menu");
const hiddenMenu = document.querySelector(".hidden-menu");
const footer = document.getElementById("front-footer");
const mobile_footer = document.getElementById("mobile-footer");
const mobile_header = document.getElementById("mobile-header");
const card = document.getElementById("first-card");
const main = document.getElementById("mobile-main");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) footer.classList.add("hide");
      else footer.classList.remove("hide");
    });
  },
  {
    rootMargin: "130px",
    threshold: 0.2,
  }
);
observer.observe(main);

const cardObserver = new IntersectionObserver(
  (entries, cardObserver) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (!entry.isIntersecting) mobile_footer.classList.add("hide");
      else mobile_footer.classList.remove("hide");
    });
  },
  {
    rootMargin: "-20px",
    threshold: 1,
  }
);
cardObserver.observe(card);

//Close menu when clicked outside
document.addEventListener("click", (e) => {
  if (!e.target.classList.contains("menu-toggler")) {
    hiddenMenu.classList.remove("show");
  }
});

toggle_menu.addEventListener("click", () =>
  hiddenMenu.classList.toggle("show")
);
