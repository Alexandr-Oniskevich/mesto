export class Card {
  
  constructor(obj, templateSelector) {
    this._text = obj.name;
    this._image = obj.link;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._templateSelector)
    .content
    .querySelector('.elements__card')
    .cloneNode(true);
    
    return cardElement;
  }

  createCardNode(){
  this._element = this._getTemplate();
  this._setEventListeners(); 

  // Добавим данные
  this._element.querySelector('.elements__img').src = this._image;
  this._element.querySelector('.elements__text').textContent = this._text;

  // Вернём элемент наружу
  return this._element;
  }

  renderCard(cardContainer) {
    const cardElement = this.createCardNode();
    cardContainer.prepend(cardElement);
  }

  _showPopupImg() {
    popupImgDescription.textContent = this._text;
    popupImgImage.src = this._image;
    popupImgImage.alt = this._text;
    openPopup(popupImg);
  }

  _setEventListeners() {
    this._element.querySelector('.elements__like').addEventListener('click', () => {
      this._handlLikeCard();
    });

    this._element.querySelector('.elements__del-card').addEventListener('click', () => {
      this._handleDeleteCard();
    });

    this._element.querySelector('.elements__img').addEventListener('click',() => {
      this._showPopupImg();
    });
  }

  _handlLikeCard() {
    this._element.querySelector('.elements__like').classList.toggle('elements__like_active');
  }

  _handleDeleteCard() {
    this._element.querySelector('.elements__del-card').closest('.elements__card');
    this._element.remove();
  }

  

}