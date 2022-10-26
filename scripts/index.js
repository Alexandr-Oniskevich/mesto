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
// получаем колекцию элементов попапов
 const popupBlocks = document.querySelectorAll('.popup');

 
 //Функции создания карточек из массива
 const render = () => {
   initialCards.reverse().forEach(el=>{
     renderCard(el,cardContainer);
   });
 }

 const renderCard = (cardObj, cardContainer) => {
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
 
   
  // открытие попапа картинки
   cardPic.addEventListener('click', function(){
     popupImgDescription.textContent = objData.name;
     popupImgImage.src = objData.link;
     popupImgImage.alt = objData.name;
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
   setEventListeners(formCards, objClasses)
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
 const formElement = popupProfile.querySelector('.popup__form-edit');
 
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
 
 formElement.addEventListener('submit', submitFormHandler); 
 //кнопка открытия редактирования профиля
 buttonEdit.addEventListener("click", openProfilePopup);
 formCards.addEventListener('submit', handleAddCard);
 btnCardAdd.addEventListener("click", () => openPopup(popupCards));

 



 
 
 
 
 
 

