// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


const containerGalleryItems = document.querySelector('.gallery');

const createGalleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) => `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`,
  )
  .join('');
containerGalleryItems.insertAdjacentHTML('beforeend', createGalleryMarkup);



new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});