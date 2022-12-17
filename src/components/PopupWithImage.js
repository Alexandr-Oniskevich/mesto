import {Popup} from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
    this.popupDescription = document.querySelector('.popup__description');
    this.popupImage = this.popupElement.querySelector('.popup__image');
  }

  open(name, link) {
    this.popupImage.src = link;
    this.popupImage.alt = name;
    this.popupDescription.textContent= name;
    super.open()
    
  }
}