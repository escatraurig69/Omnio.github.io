const canvas = document.getElementById('rainCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let raindrops = [];

class Raindrop {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * -canvas.height;
    this.length = Math.random() * 20 + 5;
    this.speed = Math.random() * 10 + 5;
  }

  fall() {
    this.y += this.speed;
    if (this.y > canvas.height) {
      this.y = Math.random() * -canvas.height;
      this.x = Math.random() * canvas.width;
    }
  }

  draw() {
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x, this.y + this.length);
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 2;
    ctx.stroke();
  }
}

function init() {
  for (let i = 0; i < 100; i++) {
    raindrops.push(new Raindrop());
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let drop of raindrops) {
    drop.fall();
    drop.draw();
  }
  requestAnimationFrame(animate);
}

init();
animate();
