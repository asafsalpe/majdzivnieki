document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".product").forEach(product => {
      const bgImage = product.getAttribute("data-bg");
      if (bgImage) {
          product.style.backgroundImage = `url('${bgImage}')`;
      }
  });
});
