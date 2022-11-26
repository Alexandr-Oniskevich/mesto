import {Card} from '../components/Card.js';
import {initialCards, classesObj} from '../utils/arrays.js';
import {FormValidator} from '../components/FormValidator.js';
import {Section} from '../components/Section.js';
import { UserInfo } from '../components/UserInfo.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import {PopupWithForm} from '../components/PopupWithForm.js'



//Получаем кнопку редактирования профиля
 const buttonEdit = document.querySelector('.profile__btn-edit');
 // Получаем popup профиля
 const popupProfile = document.querySelector('#popup-pofile');
 //Получаем профиль
 const profile = document.querySelector('.profile');
 // Получаем имя профиля
 //Получаем кнопку добавления карточки
 const btnCardAdd = document.querySelector('.profile__add-btn');
 const profileForm = document.querySelector('#profile-form');
 const cardsForm = document.querySelector('#cards-form');
 const cardContainer = document.querySelector('.elements__list');


  function createCard(item) {
    const createdCard = new Card(item, '#card-template', handleCardClick);
    const createdCardElement = createdCard.createCardNode();
    return createdCardElement;
  }

  //отрисовка карточек из массива
 const renderCardList = new Section({ data: initialCards.reverse(), renderer: (item)=>{
    const card = new Card(item, '#card-template', handleCardClick);
    const cardElement = card.createCardNode();
    renderCardList.setItem(cardElement);

  } }, cardContainer);

  renderCardList.renderItems();

  //Функции создания карточек через форму
  const handleAddCard = new PopupWithForm('#popup-cards', 
   function callbackSubmit(inputValues){
      renderCardList.setItem(createCard({
        name: inputValues.mestoname,
        link: inputValues.mestolink
      }))
     handleAddCard.close()
    }
  )
  handleAddCard.setEventListeners()
  
 
//  открытие попапа картинки
  function handleCardClick(name, link) {
    const popupImgOpen = new PopupWithImage('.popup_img_active');
    popupImgOpen.open(name, link)
 }

 const formValidators = {}

  // Включение валидации
  const enableValidation = (config) => {
    const formList = Array.from(document.querySelectorAll(`.${config.formSelector}`))
    formList.forEach((formElement) => {
      const validator = new FormValidator(config, formElement);
  // получаем данные из атрибута `name` у формы
      const formName = formElement.getAttribute('name');
  
     // в объект записываем под именем формы
      formValidators[formName] = validator;
     validator.enableValidation();
    });
  };
  
  enableValidation(classesObj);
  
  formValidators[profileForm.getAttribute('name')].resetValidation()

  // функция редактирования профиля
 const handleProfileForm = new PopupWithForm('#popup-pofile', function callbackSubmit(inputValues){
  const userInfo= new UserInfo({userName: '.profile__name', userDescription: '.profile__profession'})
  userInfo.setUserInfo({
    username: inputValues.profile_name,
    description: inputValues.profile_job
  });
  handleProfileForm.close()
 })
 handleProfileForm.setEventListeners()

 
 
 btnCardAdd.addEventListener("click", function(){
  handleAddCard.open(),
  formValidators[cardsForm.getAttribute('name')].resetValidation()
 });

 buttonEdit.addEventListener("click", function(){
  handleProfileForm.open()
 });


 



 
 
 
 
 
 

