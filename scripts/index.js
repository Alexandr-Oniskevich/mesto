 //Получаем кнопку редактирования профиля
 const buttonEdit = document.querySelector('.profile__btn-edit');
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
 // Получаем popup формы добавления карточки
 const popupCards = document.querySelector('#popup-cards');
 //Кнопка закрытия попапа карточки
 const cardButtonClose = popupCards.querySelector('.popup__btn-close');
 // Получаем контейнер карточек
 const cardContainer = document.querySelector('.elements__list');
 // Получаем template
 const cardTemplate = document.querySelector('#card-template');
 //Получаем кнопку добавления карточки
 const btnCardAdd = document.querySelector('.profile__add-btn');
 const inputNameCard = popupCards.querySelector('.popup__input_item_name');
 const inputLinkCard = popupCards.querySelector('.popup__input_item_description');
 const btnSubmit = popupCards.querySelector('.popup__btn-submit');
 const formCards = popupCards.querySelector('.popup__form-edit');
 // Получаем popup картинки
 const popupImg = document.querySelector('#image-popup');
 // Получаем описание картинки
 const popupImgDescription = popupImg.querySelector('.popup__description');
 // Получаем ссылку картинки
 const popupImgImage = popupImg.querySelector('.popup__image');
 // кнопка закрытия 
 const buttonImgClose = popupImg.querySelector('.popup__btn-close');
 
 
 //Функции создания карточек из массива
 const render = () => {
   initialCards.reverse().forEach(el=>{
     //const createCard = createCardNode(el.name, el.link);
     //cardContainer.append(createCard);
     renderCard(el,cardContainer);
   });
 }

 const renderCard = (cardObj, cardContainer) => {
  createCardNode(cardObj);
  cardContainer.prepend(createCardNode(cardObj));
}
 
 const createCardNode = (objData) => {
   const cardElement = cardTemplate.content.cloneNode(true);
   const cardName = cardElement.querySelector('.elements__text');
   const cardPic = cardElement.querySelector('.elements__img');
 
   cardName.textContent = objData.name;
   cardPic.src = objData.link;
   cardPic.alt = objData.name;
 
   const deleteBtn = cardElement.querySelector('.elements__del-card');
   deleteBtn.addEventListener('click', handleDeleteCard);
 
   const likeBtn = cardElement.querySelector('.elements__like');
   likeBtn.addEventListener('click', handlLikeCard);
 
   formCards.addEventListener('submit', handleAddCard);
  // открытие попапа картинки
   cardPic.addEventListener('click', function(){
     popupImgDescription.textContent = name;
     popupImgImage.src = link;
     popupImgImage.alt = name;
     openPopup(popupImg);
   });
   
   return cardElement;
 }
 
 //Функция создания карточек через форму
 const handleAddCard =(evt) => {
   evt.preventDefault(); 
   renderCard({ name: inputNameCard.value, link: inputLinkCard.value}, cardContainer);
   formCards.reset();
   closePopup(popupCards);
 }

 //функция добавления карточки
 
 
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
 
 
 //функция для открытия всех попапов
 function openPopup(popup) {
   popup.classList.add('popup_open');
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
 }
 
 // Находим форму в DOM
 const formElement = popupProfile.querySelector('.popup__form-edit');
 
 function submitFormHandler (evt) {
   evt.preventDefault(); 
 
   profileName.textContent = inputName.value; 
   profileJob.textContent = inputJob.value;
   closePopup(popupProfile);
 }
 
 formElement.addEventListener('submit', submitFormHandler); 
 //кнопка открытия редактирования профиля
 buttonEdit.addEventListener("click", openProfilePopup);
 //кнопка закрытия редактирования профиля
 buttonClose.addEventListener("click", () => closePopup(popupProfile));
 //кнопка закрытия картинки
 buttonImgClose.addEventListener("click", () => closePopup(popupImg));
 cardButtonClose.addEventListener("click", () => closePopup(popupCards));
 btnCardAdd.addEventListener("click", () => openPopup(popupCards));