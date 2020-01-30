// JavaScript to make all interactions work

(() => {
  console.log("We are ready!");

  const nav = document.querySelector(".mobile-menu");
  const drawer = document.querySelector(".nav-drawer");
  let isClicked = false;
  if (!isClicked) {
    nav.onclick = function() {
      console.log("I am opening");
      isClicked = true;
      nav.classList.add("isClose");
      drawer.classList.add("isActive");
    };
  }

  if (isClicked) {
    const close = document.querySelector(".isClose");
    close.onclick = function() {
      console.log("I am closing");
      drawer.classList.remove("isActive");
    };
  }
})();
