const page = document.querySelector('.page__body');
const navMain = document.querySelector('.navigation');
const navToggle = document.querySelector('.navigation__toggle');

const isEscapeKey = (evt) => evt.key === 'Escape';

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeMenu();
  }
};

const onDocumentClick = (evt) => {
  if (navMain.contains(evt.target) || navToggle.contains(evt.target)) {
    return;
  }

  if (navMain.classList.contains('navigation--open')) {
    closeMenu();
  }
};

const toggleMenu = (method) => {
  navMain.classList[method]('navigation--open');
  navToggle.classList[method]('navigation__toggle--close');
  page.classList[method]('page__body--overlay');
  if (method === 'add') {
    document.addEventListener('keydown', onDocumentKeydown);
    document.addEventListener('click', onDocumentClick);
  } else {
    document.removeEventListener('keydown', onDocumentKeydown);
    document.removeEventListener('click', onDocumentClick);
  }
};

const openMenu = () => {
  toggleMenu('add');
};

function closeMenu () {
  toggleMenu('remove');
}

const showMenu = () => {
  const isShown = navMain.classList.contains('navigation--open');

  if (isShown) {
    closeMenu();
  } else {
    openMenu();
  }
};

const showSelectMenu = (evt) => {
  const selectButton = evt.target.closest('.navigation__select-button');
  if (!selectButton) {
    return;
  }

  const currentButton = selectButton.closest('.navigation__item');
  const optionList = currentButton.querySelector('.navigation__options-list');
  if (!optionList) {
    return;
  }

  const isOpen = optionList.classList.toggle('navigation__options-list--active');

  selectButton.classList.toggle('navigation__select-button--active', isOpen);
};

export const initMobileMenu = () => {
  navToggle.addEventListener('click', showMenu);
  navMain.addEventListener('click', showSelectMenu);
};
