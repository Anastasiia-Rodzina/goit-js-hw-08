import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const container = document.querySelector(".gallery");

const createMarkup = galleryItems.map(({ preview, original, description }) => {
  return `<li class="gallery__item">
<a class="gallery__link" href="${original}">
<img
  class="gallery__image"
  src="${preview}"
  alt="${description}"
/>
</a>
</li>`;
})
.join('');

container.insertAdjacentHTML("beforeend", createMarkup);

const lightbox = new SimpleLightbox('.gallery__item a', { 
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
 });