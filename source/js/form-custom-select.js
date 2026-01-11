export const initCustomSelect = (selectContainer) => {
  const selectInput = selectContainer.querySelector('.select__input');
  const selectLabel = selectContainer.querySelector('.select__label');
  const selectItems = selectContainer.querySelectorAll('.select__item');

  selectContainer.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('select__item')) {
      return;
    }
    selectInput.checked = !selectInput.checked;
  });

  selectItems.forEach((item) => {
    item.addEventListener('click', (evt) => {
      const selectedCity = evt.target.textContent;

      selectLabel.textContent = selectedCity;
      selectInput.checked = false;
      selectItems.forEach((el) => el.classList.remove('select__item--active'));
      evt.target.classList.add('select__item--active');
    });
  });

  document.addEventListener('click', (evt) => {
    if (!selectContainer.contains(evt.target)) {
      selectInput.checked = false;
    }
  });
};
