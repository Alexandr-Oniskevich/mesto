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

//Функция добавления карточек
const addCards = initialCards.forEach(el=>{
  // Получаем контейнер карточек
  const cardContainer = document.querySelector('.elements__list');
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.elements__card').cloneNode(true);
  const deleteButton = cardElement.querySelector('.elements__del-card');
    
  cardElement.querySelector('.elements__text').textContent = el.name;
  cardElement.querySelector('.elements__img').src = el.link;
  //добавляем карточки
  cardContainer.append(cardElement);
  //ставим лайк
  cardElement.querySelector('.elements__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('elements__like_active');
  });

  //Удаление карточек
  deleteButton.addEventListener('click', function () {
    const listItem = deleteButton.closest('.elements__card');
    listItem.remove();
  }); 
});


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
//Получаем кнопку добавления карточки
const btnCardAdd = document.querySelector('.profile__add-btn');
// Получаем popup формы добавления карточки
const popupCards = document.querySelector('#popup-cards');
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
