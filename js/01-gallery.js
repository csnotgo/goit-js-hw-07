import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);
const gallery = document.querySelector(".gallery");
function createMarkup(items) {
  return items
    .map(
      (item) => `
    <div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>
`
    )
    .join("");
}
const addMarkup = createMarkup(galleryItems);
gallery.innerHTML = addMarkup;

gallery.addEventListener("click", onModalOpen);

function onModalOpen(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);
  instance.show();

  gallery.addEventListener("keydown", (ev) => {
    if (ev.code === "Escape") {
      instance.close();
    }
  });
}
