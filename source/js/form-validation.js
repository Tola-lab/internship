import { phoneInputValidation } from './phone-validation.js';
import { initCustomSelect } from './form-custom-select.js';

const initForm = (formElement, { containerSelector, errorClass }) => {
  const container = formElement.closest(containerSelector);
  const inputs = formElement.querySelectorAll('input, textarea');
  const phoneInput = formElement.querySelector('input[type="tel"]');
  const selectContainer = formElement.querySelector('.select');

  if (phoneInput) {
    phoneInputValidation(phoneInput);
  }

  if (selectContainer) {
    initCustomSelect(selectContainer);
  }

  inputs.forEach((input) => {
    input.addEventListener('input', () => {
      container?.classList.remove(errorClass);
    });
  });

  formElement.addEventListener('invalid', () => {
    container?.classList.add(errorClass);
  }, true);

  formElement.addEventListener('submit', (evt) => {
    if (!formElement.checkValidity()) {
      evt.preventDefault();
      formElement.reportValidity();
      container?.classList.add(errorClass);
    } else {
      container?.classList.remove(errorClass);
    }
  });
};

export const initFormsValidation = () => {
  const mainForm = document.querySelector('.form form');
  if (mainForm) {
    initForm(mainForm, {
      containerSelector: '.form',
      errorClass: 'form--error',
    });
  }

  const popupForm = document.querySelector('.popup__form');
  if (popupForm) {
    initForm(popupForm, {
      containerSelector: '.popup__form',
      errorClass: 'popup__form--error',
    });
  }
};
