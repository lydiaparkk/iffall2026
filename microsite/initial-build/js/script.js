let lastScroll = 0;
const topbar = document.querySelector(".topbar");

window.addEventListener("scroll", function () {
  const scroll = window.scrollY;

  if (scroll > lastScroll && scroll > 100) {
    topbar.classList.add("hide");
  } else {
    topbar.classList.remove("hide");
  }

  if (scroll > 50) {
    topbar.classList.add("solid");
  } else {
    topbar.classList.remove("solid");
  }

  lastScroll = scroll;
});
