const container = document.getElementById('petalsContainer');
const petalCount = 45;
const colors = ['#ffd1dc', '#ff8fab', '#ffb7c5', '#ff6f91', '#ffc9de'];

for (let i = 0; i < petalCount; i++) {
  const petal = document.createElement('div');
  petal.classList.add('petal');

  const size = Math.random() * 12 + 8;      // 8px - 20px
  const startLeft = Math.random() * 100;     // 0 - 100vw
  const duration = Math.random() * 6 + 6;    // 6s - 12s
  const delay = Math.random() * 10;          // 0 - 10s
  const colorIndex = Math.floor(Math.random() * colors.length);
  const opacityStart = Math.random() * 0.4 + 0.6;

  petal.style.width = `${size}px`;
  petal.style.height = `${size}px`;
  petal.style.left = `${startLeft}vw`;
  petal.style.background = colors[colorIndex];
  petal.style.animationDuration = `${duration}s`;
  petal.style.animationDelay = `${delay}s`;
  petal.style.opacity = opacityStart;

  container.appendChild(petal);
}