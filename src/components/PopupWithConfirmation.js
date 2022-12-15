import { Popup } from './Popup.js';

export class PopupWithConfirmation extends Popup{
  constructor(popupSelector, callbackConfirm){
    super(popupSelector)
    this._submit = this.popupElement.querySelector('#delete-form');
    this._callbackConfirm=callbackConfirm;
  }

  open(item, id){
    this._item = item;
    this._id = id;
    super.open();
  }

  changeSubmitHandler(newSubmitFunction){
    this._callbackConfirm = newSubmitFunction;
  }

  setEventListeners(){
    this._submit.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._callback();
    });
    super.setEventListeners();
  }
}