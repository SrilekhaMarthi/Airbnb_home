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
const mobileWidget = document.getElementById("mobile-widget");
const closeBtn = document.getElementById("w-close-btn");
const mBody = document.getElementsByName("body")[0];
// wherebtn.onclick = () => {
//   countryShow.style.display = "block";
//   dateShow.style.display = "none";
// };
// anyweekbtn.onclick = () => {
//   menu_hidden.style.display = "block";
// };
// checkbtn.onclick = () => {
//   countryShow.style.display = "none";
//   dateShow.style.display = "block";
// };

// widgetShow.onclick = () => {
//   menu_hidden.style.display = "block";
//   document.getElementById("content-body").style.opacity = 0.95;
//   document.getElementById("content-body").style.background = "rgba(0,0,0,0.3)";
// };

// rightBtn.onclick = () => {
//   console.log("chevron clicked");
//   leftChevron.style.display = "block";
//   document.getElementById("navlist-items").scrollLeft += 500;
// };

// leftChevron.addEventListener("click", function (event) {
//   document.getElementById("navlist-items").scrollLeft -= 1000;
//   event.preventDefault();
//   leftChevron.style.display = "none";
// });

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
  hiddenMenu.classList.toggle("show");
});
// --------------------------------- X ----------------------------------------
//
//
//
// --------------------------------- X ----------------------------------------
// Mobile wiget
mobile_header.addEventListener("click", () => {
  mobileWidget.classList.remove("hide-widget");
  mBody.style.position = "fixed";
});
closeBtn.addEventListener("click", () => {
  mobileWidget.classList.add("hide-widget");
  mBody.style.position = "relativr";
});

const accordionContainer = document.getElementById("accordion");
const accordion = document.querySelectorAll(".accordion");
const accordionTitle = document.querySelectorAll(".accordian-title");
const accodianBody = document.querySelectorAll(".accordion-body");

const removeAccBody = () => {
  accodianBody.forEach((ele) => ele.classList.add("hide-acc-body"));
  accordionTitle.forEach((ele) => ele.classList.remove("hide-title"));
};
const showAccBody = (element) => {
  const children = element.children;
  children[0].classList.add("hide-title");
  children[1].classList.remove("hide-acc-body");
};

accordionContainer.addEventListener("click", (ele) => {
  removeAccBody();
  if (ele.target.classList.contains("accordion")) {
    showAccBody(ele.target);
  } else {
    showAccBody(ele.target.closest(".accordion"));
  }
});
