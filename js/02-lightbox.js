import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector(".gallery");

galleryItems.forEach((item) => {
    console.log(item);
    let li = `
    <li class="gallery__item">
  <a class="gallery__link" href="javascript:void(0)">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>
`;
    gallery.innerHTML += li;
});

const galleryHandler = new SimpleLightbox(".gallery a", { captionsData: "alt", captionDelay: 250 });
galleryHandler.on("show.simplelightbox");