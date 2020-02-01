// JavaScript to make all interactions work

(() => {
  console.log("We are ready!");

  const nav = document.querySelector(".mobile-menu");
  const drawer = document.querySelector(".nav-drawer");
  const close = document.querySelector(".close-menu");
  const showAddToCart = document.querySelector("#showAddToCart");
  const addToCart = document.querySelector(".add-to-cart");
  const added = document.querySelector("#addToCart");
  const high = document.querySelector(".increase");
  const less = document.querySelector(".reduce");
  const cartQty = document.querySelector(".cart-qty");

  // Open and close the drawer
  nav.addEventListener("click", () => {
    drawer.classList.add("isActive");
  });
  close.addEventListener("click", () => {
    drawer.classList.remove("isActive");
  });

  // Show add to card on product card
  showAddToCart.addEventListener("click", () => {
    showAddToCart.classList.add("isClicked");
    addToCart.classList.add("isActive");
  });
  added.addEventListener("click", () => {
    addToCart.classList.remove("isActive");
    showAddToCart.classList.remove("isClicked");
  });

  // Increase and Reduce the quantity of purchase products
  high.addEventListener("click", () => {
    cartQty.value = parseInt(cartQty.value) + 1;
  });
  less.addEventListener("click", () => {
    parseInt(cartQty.value) > 0 ? cartQty.value = parseInt(cartQty.value) - 1 : null;
  });

})();
