const page = document.querySelector('.page__body');
const popup = document.querySelector('.popup');
const popupButtonClose = popup.querySelector('.popup__button-close');
const popupButtonOpen = document.querySelector('.about__button');

const isEscapeKey = (evt) => evt.key === 'Escape';

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePopup();
  }
};

const onOverlayClick = (evt) => {
  if (evt.target === popup) {
    closePopup();
  }
};

const togglePopup = (method) => {
  popup.classList[method]('popup--open');
  page.classList[method]('page__body--overlay');
  if (method === 'add') {
    document.addEventListener('keydown', onDocumentKeydown);
    document.addEventListener('click', onOverlayClick);
  } else {
    document.removeEventListener('keydown', onDocumentKeydown);
    document.removeEventListener('click', onOverlayClick);
  }
};

const openPopup = () => {
  togglePopup('add');
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

function closePopup () {
  togglePopup('remove');
}

export const initPopup = () => {
  popupButtonOpen.addEventListener('click', (evt) => {
    evt.preventDefault();
    openPopup();
  });
  popupButtonClose.addEventListener('click', closePopup);
};
