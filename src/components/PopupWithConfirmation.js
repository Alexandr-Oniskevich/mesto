import { Popup } from './Popup.js';

export class PopupWithConfirmation extends Popup{
  constructor(popupSelector, callback){
    super(popupSelector)
    this._submit = this.popupElement.querySelector('#delete-form');
    this._callback=callback;
  }

  open(item, id){
    this._item = item;
    this._id = id;
    super.open();
  }

  changeSubmitHandler(newSubmitFunction){
    this._callback=newSubmitFunction;
  }

  // close(){
  //   super.close();
  // }

  setEventListeners(){
    this._submit.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._callback();
    });
    super.setEventListeners();
  }
}