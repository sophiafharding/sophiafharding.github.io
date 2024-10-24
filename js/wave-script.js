const canvas = document.getElementById("sineCanvas");
const ctx = canvas.getContext("2d");

// Adjust canvas for high-DPI screens (fix pixelation issue)
function resizeCanvas() {
  const dpr = window.devicePixelRatio || 1;
  canvas.width = window.innerWidth * dpr;
  canvas.height = window.innerHeight * dpr;
  ctx.scale(dpr, dpr); // Scale the context to match the canvas resolution
}

// Initial canvas resize
resizeCanvas();

let waveOffset = 0;

function drawWave() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const amplitude = 5.7; // Wave height
  const frequency = 0.09; // Wave frequency
  const speed = 0.5; // Speed of the wave

  ctx.beginPath();
  ctx.moveTo(0, amplitude);

  // Draw the sine wave across the width of the canvas
  for (let x = 0; x <= canvas.width; x++) {
    const y = amplitude * Math.sin(x * frequency + waveOffset);
    ctx.lineTo(x, y + 100); // 100 shifts the wave down to allow room for the wave
  }

  // Draw the rest of the rectangle
  ctx.lineTo(canvas.width, canvas.height); // Right bottom corner
  ctx.lineTo(0, canvas.height); // Left bottom corner
  ctx.closePath();

  ctx.fillStyle = "#ffb1ff";
  ctx.fill();

  // Move the wave to the left
  waveOffset -= speed * frequency;

  requestAnimationFrame(drawWave);
}

// Resize canvas if window size changes and adjust for DPI
// window.addEventListener("resize", () => {
//   resizeCanvas();
//   drawWave();
// });

drawWave();
