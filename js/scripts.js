// Close preloader after page is loaded
window.addEventListener("load", function () {
  document.querySelector(".pre-loader").className += " hidden";
});
