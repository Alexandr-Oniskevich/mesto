import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
  constructor(popupSelector, callbackSubmit){
    super(popupSelector);
    this.callbackSubmit = callbackSubmit;
    this._popupForm = this.popupSelector.querySelector('.popup__form-edit');
    console.log(this._popupForm)
    this._inputs = Array.from(this._popupForm.querySelectorAll('.popup__input'));
  }

  _getInputValues() {
    const inputValues ={};

    this._inputs.forEach(inputElem => {
      inputValues[inputElem.name] = inputElem.value;
    });
    
    return inputValues;
    
  }

  setEventListeners () {
    super.setEventListeners();
     this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
       this.callbackSubmit(this._getInputValues());
    });
  }
  
  close() {
    super.close();
    this._popupForm.reset();
    
    
  }
}