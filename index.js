function gallary(el) {
  const current = el.querySelector('.current');
  const img = el.querySelectorAll('.screen-shots');
  const opacity = 0.4;

  if (img.length){
    img[0].style.opacity = opacity
  }

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




//=========================================

function generatePicList(path, length) {

  const pics = []
  for (let n = 0; n <= length; n++) {
    pics.push({
      title: 'pic1',
      path: `${path}${n}.png`
    });
  };

  return pics
};

function createImgList(targetSelector, paths) {
  const parent = document.querySelector(targetSelector);
  const container = document.createElement('ul');
  container.className = 'imgs-container'

  paths.forEach((pic) => {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.className = 'screen-shots'

    img.src = pic.path

    li.appendChild(img)
    container.appendChild(li)
  });

  parent.appendChild(container)
};

createImgList('.cryptoReact', generatePicList('images/portfolio/cryptoReact/react-crypto', 7));
createImgList('.cryptoApi', generatePicList('images/portfolio/cryptoApi/crypto-pic', 9));
createImgList('.maceFitness', generatePicList('images/portfolio/maceFitness/maceFitness-pic', 15));
createImgList('.vueV2x', generatePicList('images/portfolio/vue.V2x/vue2-pic', 5));
createImgList('.vueV3x', generatePicList('images/portfolio/vue.V3x/vue3-pic', 7));
createImgList('.sampleCv', generatePicList('images/portfolio/sampleCv/sampleCv-pic', 6));

document.querySelectorAll('.img_container').forEach(el => gallary(el))