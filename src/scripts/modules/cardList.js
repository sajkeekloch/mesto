
import {placesList} from './card';
import {Card} from './card';


export class CardList {
    constructor (container) {
      this.container = container;
    }
    
    render(arr) {
      arr.forEach((item) => {
      this.addCard(item.name, item.link);
      });
    }
  
    addCard(name, link) {
      const { card } = new Card (name, link);
      this.container.appendChild(card);
    }
}


export const list = new CardList(placesList);

  