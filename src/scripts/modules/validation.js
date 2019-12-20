import {
  userAbout,
  nameForm,
  linkForm
} from './popup';


export const formUser = document.querySelector('.popup-user__form');
export const formAddPic = document.querySelector('.popup__form');

document.querySelector('.popup__button').setAttribute('disabled', 'true');


export class Validation {
  constructor(element, button) {
      const errorMessage = document.querySelector(`.validation-${element.id}`);
      this.message = errorMessage;
      this.button = button;
  }

  caseZero() {
      this.message.textContent = 'Это обязательное поле';
  }

  caseOk() {
      this.message.textContent = '';
  }

  caseDONotMatch() {
      this.message.textContent = 'Должно быть от 2 до 30 символов';
  }

  buttonActive() {
      this.button.removeAttribute('disabled');
      this.button.classList.add('popup-user__button-save_active');
  }

  buttonDisabled() {
      this.button.setAttribute('disabled', true);
      this.button.classList.remove('popup-user__button-save_active');
  }

}


export function validation() {
  const validator = new Validation(event.target, document.querySelector('.popup-user__button-save'));

  if (event.target.value.length === 0) {
      validator.caseZero();
      validator.buttonDisabled();
  } else if (event.target.value.length <= 30 && event.target.value.length >= 2) {
      1
      validator.caseOk();
      validator.buttonActive();
  } else if (event.target.value.length < 2 || event.target.value.length > 30) {
      validator.caseDONotMatch();
      validator.buttonDisabled();
  } else if (!(nameForm.length <= 30 && nameForm.length >= 2)) {
      validator.buttonDisabled();
  } else if (!(userAbout.length <= 30 && userAbout.length >= 2)) {
      validator.buttonDisabled();
  } else {
      validator.buttonActive();
  }
}


export class ValidationCard {
  constructor(button) {
      this.button = button;
  }

  buttonActive() {
      this.button.removeAttribute('disabled');
      this.button.classList.add('popup__button_active');
  }

  buttonDisabled() {
      this.button.setAttribute('disabled', 'true');
      this.button.classList.remove('popup__button_active');
  }

}


export const validationCard = new ValidationCard(document.querySelector('.popup__button'));


formAddPic.addEventListener('input', function() {
  const validationCard = new ValidationCard(document.querySelector('.popup__button'));
  if (nameForm.value.length === 0 || linkForm.value.length === 0) {
      validationCard.buttonDisabled();
  } else {
      validationCard.buttonActive();
  }
});


formUser.addEventListener('input', validation);