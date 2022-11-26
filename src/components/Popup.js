export class Popup {
  constructor(popupSelector){
    this.popupSelector = document.querySelector(popupSelector);

  }

  open(){
    this.popupSelector.classList.add('popup_open');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close(){
    this.popupSelector.classList.remove('popup_open');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose=(evt) => {
    if (evt.key === 'Escape') {
      this.close()
    }
  }

  setEventListeners(){
      this.popupSelector.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_open')) {
          this.close()
        }
        if (evt.target.classList.contains('popup__btn-close')) {
          this.close()
        }
      })
  }
}