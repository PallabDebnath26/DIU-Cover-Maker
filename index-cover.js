// index-cover.js

// Dynamically generate 10 experiment boxes
const experimentList = document.getElementById('experiment-list');

for (let i = 1; i <= 10; i++) {
  const box = document.createElement('div');
  box.className = 'experiment-box';

  box.innerHTML = `
    <h3>Experiment ${i}</h3>
    <label for="exp${i}-name">Experiment Name:</label>
    <input type="text" id="exp${i}-name" placeholder="Enter experiment name" />

    <label for="exp${i}-page">Page Range:</label>
    <input type="text" id="exp${i}-page" placeholder="Enter page range" />

    <label for="exp${i}-date">Submitted Date:</label>
    <input type="date" id="exp${i}-date" />
  `;

  experimentList.appendChild(box);
}

// Submit button functionality
document.querySelector('.submit-button').addEventListener('click', () => {
  const experiments = [];

  for (let i = 1; i <= 10; i++) {
    const name = document.getElementById(`exp${i}-name`).value.trim();
    const page = document.getElementById(`exp${i}-page`).value.trim();
    const date = document.getElementById(`exp${i}-date`).value;

    if (name || page || date) {
      experiments.push({ name, page, date });
    }
  }

  // Save data to localStorage
  localStorage.setItem('experiments', JSON.stringify(experiments));

  // Redirect to preview page
  window.location.href = 'preview.html';
});
