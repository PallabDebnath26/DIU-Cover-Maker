// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.cover-type-btn');
  const display = document.getElementById('selectedType');

  // Add click event listener to each cover-type button
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove 'selected' class from all buttons
      buttons.forEach(btn => btn.classList.remove('selected'));

      // Add 'selected' class to the clicked button
      button.classList.add('selected');

      // Get selected type and show it
      const selectedType = button.getAttribute('data-type');
      display.textContent = `You selected: ${selectedType}`;

      // (Optional) Add ARIA attribute for accessibility
      buttons.forEach(btn => btn.setAttribute('aria-pressed', 'false'));
      button.setAttribute('aria-pressed', 'true');
    });
  });
});
