export class Card {
  
  constructor(obj, templateSelector, handleCardClick) {
    this._text = obj.name;
    this._image = obj.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
   
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
    this.cardImg.src = this._image;
    this.cardText.textContent = this._text;
    this.cardImg.alt = this._text;

    // Вернём элемент наружу
    return this._element;
  }

  _setEventListeners() {
    this._likeButton = this._element.querySelector('.elements__like');

    this._likeButton.addEventListener('click', () => {
      this._handlLikeCard();
    });

    this._element.querySelector('.elements__del-card').addEventListener('click', () => {
      this._handleDeleteCard();
    });

    this.cardImg = this._element.querySelector('.elements__img');
    this.cardText = this._element.querySelector('.elements__text');
    this.cardImg.addEventListener('click',() => {
      this._handleCardClick(this._text, this._image)
    });
  }

  _handlLikeCard() {
    this._likeButton.classList.toggle('elements__like_active');
  }

  _handleDeleteCard() {
    this._element.remove();
  }
}