const root = document.documentElement;
const swatches = document.querySelectorAll('.swatch');
const flipBtn = document.getElementById('flipBtn');
const card = document.getElementById('card');

const colors = {
  yellow: { accent: '#f4c430' },
  blue:   { accent: '#2196f3' },
  green:  { accent: '#4caf50' }
};

swatches.forEach(swatch => {
  swatch.addEventListener('click', () => {
    const chosen = swatch.dataset.color;

    // update CSS variable driving all accent-colored elements
    root.style.setProperty('--accent', colors[chosen].accent);

    // toggle active state on swatches
    swatches.forEach(s => s.classList.remove('active'));
    swatch.classList.add('active');
  });
});

flipBtn.addEventListener('click', () => {
  card.classList.toggle('flipped');
});