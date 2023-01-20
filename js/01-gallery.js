import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
const galleryMarkup = galleryItems
  .map(item => {
    return `<div class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img
          class="gallery__image"
          src="${item.preview}"
          data-source="${item.original}"
          alt="${item.description}"
        />
      </a>
    </div>`
  })
  .join('');

galleryEl.innerHTML = galleryMarkup;

galleryEl.addEventListener('click', modalOpen);

function modalOpen(e) {
  e.preventDefault();
  
  let target = e.target;
  if (!target.classList.contains('gallery__image')) {
    return;
  }

  const instance = basicLightbox.create(`<img src="${target.dataset.source}" width="800" height="600">`,
    {
      onShow: instance => {
        window.addEventListener('keydown', modalClose);
      },
      onClose: instance => {
        window.removeEventListener('keydown', modalClose);
      },
    }
  );

  function modalClose(e) {
    if (e.code === 'Escape') {
      instance.close();
    }
  }
  instance.show();
};