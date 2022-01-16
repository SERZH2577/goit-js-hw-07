import { galleryItems } from './gallery-items.js'

const galleryContainer = document.querySelector('.gallery')
const galleryMarkup = createGalleryMarkup(galleryItems)

galleryContainer.addEventListener('click', onGalleryContainerClick)

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup)

function createGalleryMarkup(images) {
	return images
		.map(({ preview, original, description }) => {
			return `
			<div class="gallery__item">
				<a class="gallery__link" href="large-image.jpg" onclick="event.preventDefault()">
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
	// event.preventDefault()
	if (!event.target.classList.contains('gallery__link')) {
		return
	}
	// console.log(event.target)
}

// ------------------

// event.preventDefault()

// ------------------

const instance = basicLightbox.create(`
    <img src="assets/images/image.png" width="800" height="600">
`)

instance.show()

console.log(instance.show())
