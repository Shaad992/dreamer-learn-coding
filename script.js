const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');

let width, height, dots = [];

function resizeCanvas() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
  createDots();
}

function createDots() {
  dots = [];
  for (let i = 0; i < 100; i++) {
    dots.push({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4
    });
  }
}

function animate() {
  ctx.clearRect(0, 0, width, height);
  for (let d of dots) {
    ctx.beginPath();
    ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
    ctx.fillStyle = "#00f6ff";
    ctx.fill();

    d.x += d.dx;
    d.y += d.dy;

    if (d.x < 0 || d.x > width) d.dx *= -1;
    if (d.y < 0 || d.y > height) d.dy *= -1;
  }
  requestAnimationFrame(animate);
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();
animate();