import { galleryItems } from './gallery-items.js'

const galleryContainer = document.querySelector('.gallery')

const galleryMarkup = createGalleryMarkup(galleryItems)
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup)

function createGalleryMarkup(images) {
	return images
		.map(({ preview, original, description }) => {
			return `
				<a class="gallery__item" href="${original}">
					<img class="gallery__image" src="${preview}" alt="${description}" />
				</a>
		`
		})
		.join('')
}

let lightbox = new SimpleLightbox('.gallery a', {
	captionsData: 'alt',
	captionDelay: 250,
})
