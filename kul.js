let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop === 0) {
    header.classList.remove("sticky", "hide");
    header.classList.add("at-top");
  } else {
    header.classList.add("sticky");
    header.classList.remove("at-top");

    if (scrollTop > lastScrollTop) {
      header.classList.add("hide");
    } else {
      header.classList.remove("hide");
    }
  }

  lastScrollTop = scrollTop;
});
