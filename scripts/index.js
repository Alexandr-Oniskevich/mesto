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
 //Получаем кнопку добавления карточки
 const btnCardAdd = document.querySelector('.profile__add-btn');
 const inputNameCard = popupCards.querySelector('.popup__input_item_name');
 const inputLinkCard = popupCards.querySelector('.popup__input_item_description');
 const popupBlocks = document.querySelectorAll('.popup');
 const profileForm = document.querySelector('#profile-form');
 const cardsForm = document.querySelector('#cards-form');
 const popupImg = document.querySelector('#image-popup');
 const popupImgDescription = popupImg.querySelector('.popup__description');
 const popupImgImage = popupImg.querySelector('.popup__image');
 const cardContainer = document.querySelector('.elements__list');


  function createCard(item) {
    const createdCard = new Card(item, '#card-template', handleCardClick);
    const createdCardElement = createdCard.createCardNode();
    return createdCardElement;
  }

  initialCards.reverse().forEach((item) => {
    const cardElement  = createCard(item);
    cardContainer.prepend(cardElement );
  });

 //Функции создания карточек через форму
 const handleAddCard =(evt) => {
  evt.preventDefault(); 
  const addCard = createCard({name: inputNameCard.value, link: inputLinkCard.value});
  cardContainer.prepend(addCard);
  cardsForm.reset();
  closePopup(popupCards);
  formValidators[cardsForm.getAttribute('name')].resetValidation()
 }
 
 function handleCardClick(name, link) {
    popupImgDescription.textContent = name;
    popupImgImage.src = link;
    popupImgImage.alt = name;
    openPopup(popupImg);
 }

 const formValidators = {}

  // Включение валидации
  const enableValidation = (config) => {
    const formList = Array.from(document.querySelectorAll(`.${config.formSelector}`))
    formList.forEach((formElement) => {
      const validator = new FormValidator(config, formElement);
  // получаем данные из атрибута `name` у формы
      const formName = formElement.getAttribute('name');
  
     // вот тут в объект записываем под именем формы
      formValidators[formName] = validator;
     validator.enableValidation();
    });
  };
  
  enableValidation(classesObj);
  
  formValidators[profileForm.getAttribute('name')].resetValidation()
  formValidators[cardsForm.getAttribute('name')].resetValidation()
 
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
 function handleProfileFormSubmit (evt) {
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
 
 profileForm.addEventListener('submit', handleProfileFormSubmit); 
 //кнопка открытия редактирования профиля
 buttonEdit.addEventListener("click", openProfilePopup);
 cardsForm.addEventListener('submit', handleAddCard);
 btnCardAdd.addEventListener("click", () => openPopup(popupCards));

 



 
 
 
 
 
 

