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
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>`;
    })
        .join('');
    
}

function onGalleryContainerClick(evt) {
    evt.preventDefault();
    const originalPicture = evt.target.dataset.source;
    const altPicture = evt.target.alt;
  
    
   const instance = basicLightbox.create(`
    <img src="${originalPicture}" alt="${altPicture}" width="800" height="600">
 `)
    instance.show()   
    

    
    function onRemovesHearerModal(evt) {
       
        if (instance.show) {
          addEventListener('keydown', onTargetKeydown);
        } else {
            removeEventListener('keydown', onTargetKeydown);
        }
    }

    
     
    function onTargetKeydown(evt) {
        if (evt.key === 'Escape') {
            instance.close();
        };      
    } 
    
    onRemovesHearerModal(evt); 
    
       
}


 







