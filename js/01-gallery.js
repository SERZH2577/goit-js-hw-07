import { galleryItems } from './gallery-items.js'

const galleryContainer = document.querySelector('.gallery')

galleryContainer.addEventListener('click', onGalleryContainerClick)

const galleryMarkup = createGalleryMarkup(galleryItems)
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup)

function createGalleryMarkup(images) {
	return images
		.map(({ preview, original, description }) => {
			return `
			<div class="gallery__item">
				<a class="gallery__link" href="${original}" >
					<img
						class="gallery__image"
						src="${preview}"
						data-source="${original}"
						alt="${description}"
					/>
				</a>
			</div>
		`
		})
		.join('')
}

function onGalleryContainerClick(event) {
	event.preventDefault()

	for (let i = 0; i < galleryItems.length; i += 1) {
		if (event.target.dataset.source === galleryItems[i].original) {
			const instance = basicLightbox.create(`
			<img src="${galleryItems[i].original}" alt="${galleryItems[i].description}" />
						`)
			instance.show()

			document.addEventListener('keydown', closeByButtonEscape)

			function closeByButtonEscape(event) {
				if (event.key === 'Escape') {
					instance.close()
				}
			}
		}
	}
}
