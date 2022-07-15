import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryCardsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
galleryContainer.addEventListener('click', onGalleryContainerClick);



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


function onGalleryContainerClick(evt) {
    evt.preventDefault();
    const altPicture = evt.target.alt;
    const srcPicture = evt.target.src;
    const hrefPicture = evt.target.closest('.gallery__item').href
    
   new SimpleLightbox('.some-element a', { <div class="gallery">
    <a href="${hrefPicture}"><img src="${srcPicture}" alt="" title=""/></a>
    <a href="images/image2.jpg"><img src="images/thumbs/thumb2.jpg" alt="" title="Beautiful Image"/></a>
</div> });

   
}