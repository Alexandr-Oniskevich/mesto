export class Card {
  
  constructor(obj, templateSelector, handleCardClick, userId, handleDeleteClick, handlLikeClick) {
    this._text = obj.name;
    this._image = obj.link;
    this._likes = obj.likes;
    this._userId = userId;
    this._ownerId = obj.owner._id;
    this._id = obj._id;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handlLikeClick = handlLikeClick;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._templateSelector)
    .content
    .querySelector('.elements__card')
    .cloneNode(true);
    this._card = cardElement;
    return this._card;
  }

  isLiked(){
    return this._likes.find(user=>user._id===this._userId)
  }

  setLikes(likes){
    this._likes =likes
    //console.log(this._likes)
    this._card.querySelector('.elements__number-like').textContent = this._likes.length;
    if(this.isLiked()){
      this._likeButton.classList.add('elements__like_active');
    }else{
      this._likeButton.classList.remove('elements__like_active');
    }
  }

  createCardNode(){
    this._element = this._getTemplate();
    this._setEventListeners(); 
    // Добавим данные
    
    this.cardImg.src = this._image;
    this.cardText.textContent = this._text;
    this.cardImg.alt = this._text;
    
    if(this._ownerId !== this._userId){
      this._element.querySelector('.elements__del-card').style.display="none"
    }

    this.setLikes(this._likes)
    // Вернём элемент наружу
    return this._element;
  }

  _setEventListeners() {
    this._likeButton = this._element.querySelector('.elements__like');

    this._likeButton.addEventListener('click', () => {
      this._handlLikeClick(this._id);
    });

    this._element.querySelector('.elements__del-card').addEventListener('click', () => {
      this._handleDeleteClick(this._id)
    });

    this.cardImg = this._element.querySelector('.elements__img');
    this.cardText = this._element.querySelector('.elements__text');
    this.cardImg.addEventListener('click',() => {
      this._handleCardClick(this._text, this._image)
    });
  }



  handleDeleteCard() {
    this._element.remove();
    this._element = null;
  }
}