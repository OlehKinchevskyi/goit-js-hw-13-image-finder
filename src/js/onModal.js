import getRefs from './getRefs';
import '../images/830.gif';

const refs = getRefs();

const lightboxRef = document.querySelector('.lightbox');
const lightboxCloser = document.querySelector('.lightbox-closer');
const lightboxImage = document.querySelector('.lightbox-image');
const preloader = document.querySelector('.js-preloader');

refs.imagesContainer.addEventListener('click', onModalOpen);
lightboxCloser.addEventListener('click', onCloseBtnModal);


function onImageClick(event) {
  return event.target.dataset.source;
}

function onModalOpen(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  };
  
  lightboxImage.src = '../images/830.gif';
  lightboxRef.classList.add('is-open');

  lightboxImage.onload = function () {
    onChangeLightboxImageUrl(event);
  }
}

function onCloseBtnModal() {
  lightboxRef.classList.remove('is-open');
  removeImageAtr()
}

function onChangeLightboxImageUrl(event) {
  if (lightboxRef.classList.contains("is-open")) {
    lightboxImage.src = onImageClick(event);
  }
}

function removeImageAtr() {
  lightboxImage.removeAttribute('src');
}

function removePreloader() {
  preloader.classList.add('is-hidden');
}
