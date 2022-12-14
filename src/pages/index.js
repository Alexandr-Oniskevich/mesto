import {Card} from '../components/Card.js';
import {initialCards, classesObj} from '../utils/constants.js';
import {FormValidator} from '../components/FormValidator.js';
import {Section} from '../components/Section.js';
import { UserInfo } from '../components/UserInfo.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import {PopupWithForm} from '../components/PopupWithForm.js'
import {Api} from '../components/Api.js'
import {PopupWithConfirmation} from '../components/PopupWithConfirmation.js';
import{
  buttonEdit, btnCardAdd, profileForm, cardsForm,avatarForm,
  cardContainer, nameInput, jobInput, profileEdit
} from '../utils/constants.js'

import '../pages/index.css';
// https://mesto.nomoreparties.co/v1/cohortId/users/me/avatar 
const apiConfig = {
  url: "https://mesto.nomoreparties.co/v1/cohort-55",

  headers: {
    authorization: '08c56676-a1a4-49a4-8b96-820653b715f5',
    'Content-Type': 'application/json'
  },
}

const api = new Api(apiConfig); 



//отрисовка стандартных карточек 
  const renderCardList = new Section({ renderer: (item)=>{
    renderCardList.setItem(createCard(item));
  } }, cardContainer);

  api.getInitialCards()
.then((result)=>{
  renderCardList.renderItems(result.reverse())
})
.catch((error)=>{
  console.log(error)
})

  function createCard(item) {
    const createdCard = new Card(item,'#card-template', handleCardClick, userId,
    //коллбэк удаления карточки
    (id) =>{
      confirmPopup.open(item, id);
      confirmPopup.changeSubmitHandler(()=>{
        api.deleteCard(id)
        .then((res) => {
          console.log(res)
          createdCard.handleDeleteCard()
          confirmPopup.close()
          
        })
      })
    
    },
    // функция добавления лайков
    (id) =>{
      if(createdCard.isLiked()) {
        api.deleteLike(id)
      .then((res)=>{
        console.log(res)
        createdCard.setLikes(res.likes)
      })
      }else{
        api.addLike(id)
        .then((res)=>{
          console.log(res)
          createdCard.setLikes(res.likes)
        })
      }
      
    }
    );
    const createdCardElement = createdCard.createCardNode();
    return createdCardElement;
  }

  // Попап удаления карточки
  const confirmPopup = new PopupWithConfirmation('#delete-card', ()=>{});
  confirmPopup.setEventListeners();

 //Функции создания карточек через форму
 const handleAddCard = new PopupWithForm('#popup-cards', 
   function callbackSubmit(inputValues){
    api.addNewCard({name: inputValues.mestoname, link:inputValues.mestolink})
      .then((newCard)=>{
         renderCardList.setItem(createCard(newCard))
      })
      handleAddCard.close()     
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
  console.log(formValidators)
  
  const userInfo= new UserInfo({userName: '.profile__name', userDescription: '.profile__profession'})

  //Добавление информации пользователя на страницу
  let userId;
  api.takeUserInfo()
  .then((res) => {
    console.log(res)
    userInfo.getUserInfo(res.name, res.about)
    userInfo.setUserInfo(res)

    userId = res._id;
    });

  // функция редактирования профиля
  const handleProfileForm = new PopupWithForm('#popup-pofile', function callbackSubmit(inputValues){
    api.editUserInfo(inputValues.profile_name, inputValues.profile_job)
    .then((obj) => {
      console.log(obj)
      userInfo.setUserInfo(obj)
      handleProfileForm.close()
      })
      .catch((err) => {
        console.log(err);
      })
 })
 handleProfileForm.setEventListeners()

 //изменение аватара профиля

 const changeAvatarProfile = new PopupWithForm('#popup-avatar', function callbackSubmit(inputLink){
  api.editUserAvatar(inputLink)
  .then(res=>{
    console.log(res)
    UserInfo.changeAvatar(res.avatar)
    changeAvatarProfile.close()
  })
 })
 changeAvatarProfile.setEventListeners()

 profileEdit.addEventListener('click', function(){
  changeAvatarProfile.open();
  formValidators[avatarForm.getAttribute('name')].resetValidation()
  
 })
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


 



 
 
 
 
 
 

