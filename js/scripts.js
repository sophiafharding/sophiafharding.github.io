// Close preloader after page is loaded
window.addEventListener("load", function () {
  document.querySelector(".pre-loader").className += " hidden";
  setActiveLink(); // Call setActiveLink on page load
});

// Function to set the 'active' class based on the current URL
function setActiveLink() {
  document.querySelectorAll(".menu-right a").forEach((link) => {
    link.classList.remove("active");

    if (link.href === window.location.href) {
      link.classList.add("active");
    }
  });
}

// Add click event listener to each link to handle immediate changes
document.querySelectorAll(".menu-right a").forEach((link) => {
  link.addEventListener("click", function () {
    setActiveLink();
  });
});
