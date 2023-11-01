
import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);


const galleryContainer = document.querySelector('.gallery');

function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              alt="${description}"
            />
          </a>
        </li>
      `;
    })
    .join('');
}

galleryContainer.innerHTML = createGalleryMarkup(galleryItems);

const lightbox = new SimpleLightbox('.gallery__item a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
});

galleryContainer.addEventListener('click', (e) => {
  e.preventDefault();
  const { target } = e;

  if (target.classList.contains('gallery__image')) {
    lightbox.open();
  }
});