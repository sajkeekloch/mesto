
const popupImg = document.querySelector('.popup-image');
const popupImgTag = document.querySelector('.popup-image__img');
const form = document.forms.add;

const name = document.querySelector('.user-info__name');
const job = document.querySelector('.user-info__job');
const avatar = document.querySelector('.user-info__photo');
const formUser = document.querySelector('.popup-user__form');
const formAddPic = document.querySelector('.popup__form');
const nameForm = document.querySelector('.popup__input_type_name');
const linkForm = document.querySelector('.popup__input_type_link-url');
const userName = document.querySelector('.popup-user__input_type_name');
const userAbout = document.querySelector('.popup-user__input_type_about');

class Popup {
    constructor (container) {
      this.container = container;
      const closeButton = this.container.querySelector('.popup__close');
      this.close = this.close.bind(this);
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

  