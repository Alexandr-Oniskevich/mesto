import { Popup } from './Popup.js';

export class PopupWithConfirmation extends Popup{
  constructor(popupSelector, callbackConfirm){
    super(popupSelector)
    this._submit = this.popupElement.querySelector('#delete-form');
    this._callbackConfirm = callbackConfirm;
  }

  open(item, id){
    super.open();
    this._item = item;
    this._id = id;
  }

  setEventListeners(){
    
    this._submit.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._callbackConfirm(this._item, this._id);
      super.setEventListeners();
    });
    
  }
}