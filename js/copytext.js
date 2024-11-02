function copyToClipboard() {
  const text = document.getElementById("text").innerText;

  // Copy text to clipboard
  navigator.clipboard
    .writeText(text)
    .then(() => {
      // Show popup message
      const popup = document.getElementById("popup");
      popup.classList.add("show");

      // Hide popup after 2 seconds
      setTimeout(() => {
        popup.classList.add("hide");
      }, 2000);
    })
    .catch((error) => {
      console.error("Failed to copy text: ", error);
    });
}
