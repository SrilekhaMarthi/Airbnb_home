const toggle_menu = document.querySelector(".toggle-menu");
const hiddenMenu = document.querySelector(".hidden-menu");
const footer = document.getElementById("front-footer");
const mobile_footer = document.getElementById("mobile-footer");
const mobile_header = document.getElementById("mobile-header");
const card = document.getElementById("first-card");
const main = document.getElementById("mobile-main");
const logo = document.getElementById("logo");
const rightBtn = document.getElementById("rightChevron");
const leftChevron = document.getElementById("leftChevron");
const widgetShow = document.getElementById("widgets-show");
const anyweekbtn = document.getElementById("anyweek");
const menu_hidden = document.getElementById("hidden-nav");
const checkbtn = document.getElementById("checkIn-btn");
const dateShow = document.getElementById("dates-show");
const countryShow = document.getElementById("countries-show");
const wherebtn = document.getElementById("wherebtn");
const body = document.getElementById("content-body");

wherebtn.onclick = () => {
  countryShow.style.display = "block";
  dateShow.style.display = "none";
};
anyweekbtn.onclick = () => {
  menu_hidden.style.display = "block";
};
checkbtn.onclick = () => {
  countryShow.style.display = "none";
  dateShow.style.display = "block";
};

widgetShow.onclick = () => {
  menu_hidden.style.display = "block";
  document.getElementById("content-body").style.opacity = 0.95;
  document.getElementById("content-body").style.background = "rgba(0,0,0,0.3)";
};

rightBtn.onclick = () => {
  console.log("chevron clicked");
  leftChevron.style.display = "block";
  document.getElementById("navlist-items").scrollLeft += 500;
};

leftChevron.addEventListener("click", function (event) {
  document.getElementById("navlist-items").scrollLeft -= 1000;
  event.preventDefault();
  leftChevron.style.display = "none";
});

window.addEventListener("resize", () => {
  if (window.innerWidth <= 950) logo.src = "assets/images/logo_small.png";
  else logo.src = "assets/images/logo.png";
});

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

document.addEventListener("click", (e) => {
  if (!e.target.classList.contains("toggle-menu")) {
    hiddenMenu.classList.remove("show");
  }
});

toggle_menu.addEventListener("click", () => {
  console.log("clicked");
  hiddenMenu.classList.toggle("show");
});
console.log(toggle_menu, hiddenMenu);
