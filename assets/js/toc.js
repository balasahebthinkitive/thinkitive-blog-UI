const toc = document.querySelector('.toc');

toc.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    event.preventDefault();
    const targetId = event.target.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
});