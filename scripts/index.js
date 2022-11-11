import {Card} from './Card.js';
import {initialCards, classesObj} from './arrays.js';
import {FormValidator} from './FormValidator.js';


//Получаем кнопку редактирования профиля
 const buttonEdit = document.querySelector('.profile__btn-edit');
 // Получаем popup профиля
 const popupProfile = document.querySelector('#popup-pofile');
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
 // Получаем popup формы добавления карточки
 const popupCards = document.querySelector('#popup-cards');
 // Получаем template
 const cardTemplate = document.querySelector('#card-template');
 //Получаем кнопку добавления карточки
 const btnCardAdd = document.querySelector('.profile__add-btn');
 const inputNameCard = popupCards.querySelector('.popup__input_item_name');
 const inputLinkCard = popupCards.querySelector('.popup__input_item_description');
 const btnSubmit = popupCards.querySelector('.popup__btn-submit');
 //const formCards = popupCards.querySelector('.popup__form-edit');
 // Получаем popup картинки
 const popupImg = document.querySelector('#image-popup');
 // Получаем описание картинки
 const popupImgDescription = popupImg.querySelector('.popup__description');
 // Получаем ссылку картинки
 const popupImgImage = popupImg.querySelector('.popup__image');
// получаем колекцию элементов попапов
 const popupBlocks = document.querySelectorAll('.popup');
 //const formElement = document.querySelector('.popup__form-edit');
 const profileForm = document.querySelector('#profile-form');
 const cardsForm = document.querySelector('#cards-form');


 //Функции создания карточек из массива
 const render = () => {
   initialCards.reverse().forEach(item =>{
    const card = new Card(item, '#card-template');
    // Получаем контейнер карточек
   const cardContainer = document.querySelector('.elements__list');
    // Добавляем в DOM
    card.renderCard(cardContainer)
     
   });
 }

 render();

 const handleAddCard =(evt) => {
  evt.preventDefault(); 
  const card = new Card({name: inputNameCard.value, link: inputLinkCard.value}, '#card-template');
  card.renderCard(document.querySelector('.elements__list'))
  formCards.reset();
  closePopup(popupCards);
  const valid = new FormValidator(classesObj, cardsForm);
  valid.resetForm();
 }

 const profileValid = new FormValidator(classesObj, profileForm);
 profileValid.enableValidation();
 const cardsValid = new FormValidator(classesObj, cardsForm);
 cardsValid.enableValidation();
 
 //функция для открытия всех попапов
 function openPopup(popup) {
   popup.classList.add('popup_open');
   document.addEventListener('keydown', closeByEscape);
 }
 
 //функция открытия попапа профиля
 function openProfilePopup() {
   inputName.value = profileName.textContent;
   inputJob.value = profileJob.textContent;
   openPopup(popupProfile);
 }
 
 //функция для закрытия всех попапов
 function closePopup(popup) {
   popup.classList.remove('popup_open');
   document.removeEventListener('keydown', closeByEscape);

 }
 
 // Находим форму в DOM
 function submitFormHandler (evt) {
   evt.preventDefault(); 
 
   profileName.textContent = inputName.value; 
   profileJob.textContent = inputJob.value;
   closePopup(popupProfile);
 }
 
 function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_open'); 
   closePopup(openedPopup);
  }
}
//функция закрытия попапов на крестик и оверлей
function closePopupOnOverlay (popupElements) {
  popupElements.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_open')) {
        closePopup(popup)
      }
      if (evt.target.classList.contains('popup__btn-close')) {
        closePopup(popup)
      }
    })
  })
 }

 closePopupOnOverlay(popupBlocks);
 
 profileForm.addEventListener('submit', submitFormHandler); 
 //кнопка открытия редактирования профиля
 buttonEdit.addEventListener("click", openProfilePopup);
 cardsForm.addEventListener('submit', handleAddCard);
 btnCardAdd.addEventListener("click", () => openPopup(popupCards));

 



 
 
 
 
 
 

