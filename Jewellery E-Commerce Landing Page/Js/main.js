// ! Active Navbar ==========================!
let nav = document.querySelector(".navigation-wrapper");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("scroll-on");
  } else {
    nav.classList.remove("scroll-on");
  }
};

// ! Navbar Hide =========================

let navLink = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");

navLink.forEach((e) => {
  e.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  });
});
