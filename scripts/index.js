const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 

// Получаем контейнер карточек
const cardContainer = document.querySelector('.elements__list');
// Получаем template
const cardTemplate = document.querySelector('#card-template');
//Функции добавления карточек из массива
const render = () => {
  initialCards.forEach(el=>{
    const createCard = createCardNode(el.name, el.link);
    cardContainer.append(createCard);
  });

  btnSubmit.addEventListener('click', handleAddCard);
}

const createCardNode = (name, link) => {
  const createCard = cardTemplate.content.cloneNode(true);
  const cardName = createCard.querySelector('.elements__text');
  const cardPic = createCard.querySelector('.elements__img');

  cardName.textContent = name;
  cardPic.src = link;

  const deleteBtn = createCard.querySelector('.elements__del-card');
  deleteBtn.addEventListener('click', handleDeleteCard);

  const likeBtn = createCard.querySelector('.elements__like');
  likeBtn.addEventListener('click', handlLikeCard);
  
  return createCard;
}

//Функция добавления карточек через форму

// Получаем popup формы добавления карточки
const popupCards = document.querySelector('#popup-cards');
//Получаем кнопку добавления карточки
const btnCardAdd = document.querySelector('.profile__add-btn');
const inputNameCard = popupCards.querySelector('.popup__input_item_name');
const inputLinkCard = popupCards.querySelector('.popup__input_item_description');
const btnSubmit = popupCards.querySelector('.popup__btn-submit');

const handleAddCard =(evt) => {
  evt.preventDefault(); 
  if (inputNameCard.value || inputLinkCard.value) {
    
  }
  const card = createCardNode(inputNameCard.value, inputLinkCard.value);
  cardContainer.prepend(card);
  inputNameCard.value = '';
  inputLinkCard.value = '';
  closePopup();
}

//функция удаления карточки
const handleDeleteCard = (e) => {
  const currentEl = e.target.closest('.elements__card');
  currentEl.remove();
}

//функция лайка
const handlLikeCard = (e) => {
  e.target.classList.toggle('elements__like_active');
}

render();

//Получаем кнопку редактирования профиля
let buttonEdit = document.querySelector('.profile__btn-edit');
// Получаем popup профиля
const popupProfile = document.querySelector('#popup-pofile');
//Получаем кнопку закрытия попапа
const buttonClose = popupProfile.querySelector('.popup__btn-close');
//Получаем профиль
const profile = document.querySelector('.profile');
// Получаем имя профиля
const profileName = profile.querySelector('.profile__name');
//Получаем профессию профиля
const profileJob = profile.querySelector('.profile__profession');
// Получаем поле ввода имени
const inputName = popupProfile.querySelector('.popup__input_item_name');
// Получаем поле ввода профессии
const inputJob = popupProfile.querySelector('.popup__input_item_description');
//Кнопка закрытия попапа карточки
const cardButtonClose = popupCards.querySelector('.popup__btn-close');


btnCardAdd.addEventListener("click", function(){
  popupCards.classList.add('popup_open');
});

cardButtonClose.addEventListener("click", function(){
  popupCards.classList.remove('popup_open');
});


//функция открытия попапа профиля
function openPopup() {
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
  popupProfile.classList.add('popup_open');
}

buttonEdit.addEventListener("click", openPopup);

//функция закрытия попапа профиля

function closePopup() {
  popupProfile.classList.remove('popup_open');
  popupCards.classList.remove('popup_open');
}

buttonClose.addEventListener("click", closePopup);


// Находим форму в DOM
let formElement = popupProfile.querySelector('.popup__form-edit');

function formSubmitHandler (evt) {
  evt.preventDefault(); 

  profileName.textContent = inputName.value; 
  profileJob.textContent = inputJob.value;
  closePopup();
}

formElement.addEventListener('submit', formSubmitHandler); 