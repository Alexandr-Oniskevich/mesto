import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
  constructor(popupElement, callbackSubmit){
    super(popupElement);
    this.callbackSubmit = callbackSubmit;
    this._popupForm = this.popupElement.querySelector('.popup__form-edit');
    this._btnSubmit = this.popupElement.querySelector('.popup__btn-submit');
    this._inputs = Array.from(this._popupForm.querySelectorAll('.popup__input'));

  }

  changeBtnText(){
    this._btnSubmit.textContent = this._btnSubmit.textContent + '...'
  }

  resetBtnText(){
    this._btnSubmit.textContent = "Сохранить"
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
    this._popupForm.removeEventListener('submit', this.callbackSubmit)
    super.close();
    this._popupForm.reset();
  }
}