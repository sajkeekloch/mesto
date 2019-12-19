// import {api} from './../index';
// import {serverUrl} from './../index';
// import {myConfig} from './../index';
// import {Api} from './../index';
// import {popupImg} from './popup';
// import {popupImgTag} from './popup';
// import {form} from './popup';
// import {name} from './popup';
// import {job} from './popup';
// import {avatar} from './popup';
// import {formUser} from './popup';
// import {formAddPic} from './popup';
// import {linkForm} from './popup';
// import {userName} from './popup';
// import {userAbout} from './popup';
// import {Popup} from './popup';
// import {Validation} from './validation';
// import {validation} from './validation';
// import {validationCard} from './validation';


import {list} from './cardList'; 

export const placesList = document.querySelector('.places-list');

export class Card {
    constructor (name, link) {
      this.card = this.create(name, link);
      this.card.querySelector('.place-card__like-icon').addEventListener('click', this.like);
      this.card.querySelector('.place-card__delete-icon').addEventListener('click', this.remove);
    }
  
    create(name, link) {
      const placeCard = document.createElement('div');
      placeCard.classList.add('place-card');
    
      const imgCard = document.createElement('div');
      imgCard.classList.add('place-card__image'); 
  
      const deleteIcon = document.createElement('button');
      deleteIcon.classList.add('place-card__delete-icon');
  
      const description = document.createElement('div');
      description.classList.add('place-card__description');
  
      const nameEl = document.createElement('h3');
      nameEl.classList.add('place-card__name');
  
      const likeIcon = document.createElement('button');
      likeIcon.classList.add('place-card__like-icon');
      
      
      nameEl.textContent = name;
      imgCard.setAttribute('style','background-image: url(' + link + ')');
  
  
      placeCard.appendChild(imgCard);
      imgCard.appendChild(deleteIcon);
      placeCard.appendChild(description);
      description.appendChild(nameEl);
      description.appendChild(likeIcon);
  
      return placeCard;
    }
  
    like(event) {
      event.target.classList.toggle('place-card__like-icon_liked');
    }
  
    remove(event) {
      list.container.removeChild(event.target.parentNode.parentNode);
    }
  
  }
  



