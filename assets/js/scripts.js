// JavaScript to make all interactions work

(() => {
  console.log("We are ready!");

  const nav = document.querySelector(".mobile-menu");
  const drawer = document.querySelector(".nav-drawer");
  const close = document .querySelector(".close-menu");

  // Open and close the drawer
  nav.addEventListener('click', () => {
    drawer.classList.add('isActive');
  });
  close.addEventListener('click', () => {
    drawer.classList.remove('isActive');
  });

  // Next function
  

})();
