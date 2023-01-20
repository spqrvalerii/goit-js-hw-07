import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
const galleryMarkup = galleryItems
  .map(item => {
    return `<a class="gallery__item" href="${item.original}">
        <img
          class="gallery__image"
          src="${item.preview}"
          data-source="${item.original}"
          alt="${item.description}"
        />
      </a>`
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

  function modalClose(e) {
    if (e.code === 'Escape') {
      instance.close();
    }
  }  
};

const SimpleLightboxGallery = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});

