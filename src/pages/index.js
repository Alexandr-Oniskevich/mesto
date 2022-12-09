import {Card} from '../components/Card.js';
import {initialCards, classesObj} from '../utils/constants.js';
import {FormValidator} from '../components/FormValidator.js';
import {Section} from '../components/Section.js';
import { UserInfo } from '../components/UserInfo.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import {PopupWithForm} from '../components/PopupWithForm.js'
import {Api} from '../components/Api.js'
import{
  buttonEdit, btnCardAdd, profileForm, cardsForm,
  cardContainer, nameInput, jobInput, profileEdit
} from '../utils/constants.js'

import '../pages/index.css';

const apiConfig = {
  url: "https://mesto.nomoreparties.co/v1/cohort-55",

  headers: {
    authorization: '08c56676-a1a4-49a4-8b96-820653b715f5'
  }
}

const api = new Api(apiConfig); 

api.getInitialCards()
.then((result)=>{
  console.log(result)
  renderCardList.renderItems(result.reverse())
})
.catch((error)=>{
  console.log(error)
})

//отрисовка стандартных карточек 
  const renderCardList = new Section({ renderer: (item)=>{
    renderCardList.setItem(createCard(item));
  } }, cardContainer);

  //renderCardList.renderItems();


  function createCard(item) {
    const createdCard = new Card(item, '#card-template', handleCardClick);
    const createdCardElement = createdCard.createCardNode();
    return createdCardElement;
  }



 //Функции создания карточек через форму
 const handleAddCard = new PopupWithForm('#popup-cards', 
   function callbackSubmit(inputValues){
    api.addNewCard({name: inputValues.mestoname, link:inputValues.mestolink})
      .then((newCard)=>{
        console.log(newCard)
        // renderCardList.setItem(createCard(newCard))
        
      })
      handleAddCard.close()
    // console.log(inputValues)
      // renderCardList.setItem(createCard({
      //   name: inputValues.mestoname,
      //   link: inputValues.mestolink
      // }))
     
    }
  )
  handleAddCard.setEventListeners()
  
  const popupImgOpen = new PopupWithImage('.popup_img_active');
  popupImgOpen.setEventListeners();
//  открытие попапа картинки
  function handleCardClick(name, link) {
    popupImgOpen.open(name, link);
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
  
  const userInfo= new UserInfo({userName: '.profile__name', userDescription: '.profile__profession'})

  // функция редактирования профиля
  const handleProfileForm = new PopupWithForm('#popup-pofile', function callbackSubmit(inputValues){
    userInfo.setUserInfo({
      username: inputValues.profile_name,
      description: inputValues.profile_job
    });
  handleProfileForm.close()
 })
 handleProfileForm.setEventListeners()
 
 btnCardAdd.addEventListener("click", function(){
  handleAddCard.open();
  formValidators[cardsForm.getAttribute('name')].resetValidation()
 });

 buttonEdit.addEventListener("click", function(){
  handleProfileForm.open();
  const currentUserInfo = userInfo.getUserInfo();
  nameInput.value = currentUserInfo.username;
  jobInput.value = currentUserInfo.description;
  formValidators[profileForm.getAttribute('name')].resetValidation()
 });


 



 
 
 
 
 
 

