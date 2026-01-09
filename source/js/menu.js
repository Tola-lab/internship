const page = document.querySelector('.page__body');
const navMain = document.querySelector('.navigation');
const navToggle = document.querySelector('.navigation__toggle');

const toggleMenu = (method) => {
  navMain.classList[method]('navigation--open');
  navToggle.classList[method]('navigation__toggle--close');
  page.classList[method]('page__body--overlay');
};

const openMenu = () => {
  toggleMenu('add');
};

const closeMenu = () => {
  toggleMenu('remove');
};

const showMenu = () => {
  const isShown = navMain.classList.contains('navigation--open');

  if (isShown) {
    closeMenu();
  } else {
    openMenu();
  }
};

export const initMobileMenu = () => {
  navToggle.addEventListener('click', showMenu);

  navMain.addEventListener('click', (evt) => {
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
  });
};
