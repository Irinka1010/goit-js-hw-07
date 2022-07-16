import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryCardsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);




function createGalleryCardsMarkup(pictures) {
    return pictures.map(({ preview, original, description }) => {
        return `
        <li>
        <a class="gallery__item" href="${original}">
            <img class="gallery__image"
            src="${preview}"
            alt="${description}" />
        </a>
        </li>`;
    })
        .join('');
        
    
}
 const lightbox= new SimpleLightbox('.gallery a', {
     /* options */
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom',
    captionSelector: 'img',
});
