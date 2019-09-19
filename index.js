function gallary(el) {
  const current = el.querySelector('.current');
  const img = el.querySelectorAll('.imgs img');
  const opacity = 0.6;

  img[0].style.opacity = opacity;
  img.forEach((el) => el.addEventListener('click', imgClick))

  function imgClick(e) {
    // Reset the opacity
    img.forEach(img => (img.style.opacity = 1));

    // Change current image to src of clicked image
    current.src = e.target.src;

    // Add fade in class
    current.classList.add('fade-in');

    // Remove fade-in class after .5 seconds
    setTimeout(() => current.classList.remove('fade-in'), 500);

    // Change the opacity to opacity var
    e.target.style.opacity = opacity;
  }
}

document.querySelectorAll('.img_container').forEach(el => gallary(el))