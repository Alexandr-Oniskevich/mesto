export class Popup {
  constructor(popupSelector){
    this.popupElement = document.querySelector(popupSelector);

  }

  open(){
    this.popupElement.classList.add('popup_open');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close(){
    this.popupElement.classList.remove('popup_open');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose=(evt) => {
    if (evt.key === 'Escape') {
      this.close()
    }
  }

  setEventListeners(){
      this.popupElement.addEventListener('mousedown', (evt) => {
       
        if (evt.target.classList.contains('popup_open')) {
          this.close()
        }
        if (evt.target.classList.contains('popup__btn-close')) {
          this.close()
        }
      })
  }
}