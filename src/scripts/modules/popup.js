import {api} from './../index';
import {list} from './cardList'; 
import {validationCard} from './validation';
import {Validation} from './validation';
import {validation} from './validation';

export const popupImg = document.querySelector('.popup-image');
export const popupImgTag = document.querySelector('.popup-image__img');
export const form = document.forms.add;

export const name = document.querySelector('.user-info__name');
export const job = document.querySelector('.user-info__job');
export const avatar = document.querySelector('.user-info__photo');
export const nameForm = document.querySelector('.popup__input_type_name');
export const linkForm = document.querySelector('.popup__input_type_link-url');
export const userName = document.querySelector('.popup-user__input_type_name');
export const userAbout = document.querySelector('.popup-user__input_type_about');

export class Popup {
    constructor (container) {
      this.container = container;
      this.close = this.close.bind(this);
      const closeButton = this.container.querySelector('.popup__close');
      closeButton.addEventListener('click', this.close);
    }

    open() {
      userName.value = name.textContent;
      userAbout.value = job.textContent;
      this.container.classList.add('popup_is-opened');
    }

    close() {
      this.container.classList.remove('popup_is-opened');
    }
    
    add() { 
      event.preventDefault();
      this.close();
      list.addCard(document.querySelector('.popup__input_type_name').value, document.querySelector('.popup__input_type_link-url').value);
      document.querySelector('.popup__input_type_name').value = null;
      document.querySelector('.popup__input_type_link-url').value = null;
      validationCard.buttonDisabled();

    }

    save() {
      event.preventDefault();
      api.saveUser();
      api.getUserInfo();
      this.close();
      }
    }

  
  const addPopup = new Popup(document.querySelector('.popup'));
  document.querySelector('.user-info__add-button').addEventListener('click', function () {
    addPopup.open();
    console.log('12');
  });
  document.querySelector('.popup__button').addEventListener('click',
  function () {
    addPopup.add();

  });


  
  const userPopup = new Popup(document.querySelector('.popup-user'));
  document.querySelector('.user-info__edit-button').addEventListener('click', function ()
  {
    userPopup.open();
  });
  
  document.querySelector('.popup-user__button-save').addEventListener('click', function ()
  {
    userPopup.save();
  });

  
  document.querySelector('.places-list').addEventListener('click', function(event) {
    if (event.target.classList.contains('place-card__image')){
      let url = event.target.getAttribute('style').substr(22);
      url = url.substring(0, url.length - 1);
      popupImgTag.setAttribute('src', url);

      const imgPopup = new Popup(popupImg);
      imgPopup.open();
    }
  });

  