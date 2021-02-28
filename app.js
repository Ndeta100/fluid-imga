const model = document.querySelector('.model');
const previews = document.querySelectorAll('.gallery img');
const original = document.querySelector('.full-img');
const caption = document.querySelector('.caption');

previews.forEach((preview) => {
  preview.addEventListener('click', () => {
    model.classList.add('open');
    original.classList.add('open');

    // dynamic change text and image
    const originalScr = preview.getAttribute('data-original');
    original.src = `./full/${originalScr}`;
    const altText = preview.alt;
    caption.textContent = altText;
  });
});
model.addEventListener('click', (e) => {
  if (e.target.classList.contains('model')) {
    model.classList.remove('open');
    original.classList.remove('open');
  }
});
