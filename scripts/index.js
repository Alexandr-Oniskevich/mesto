//Получаем кнопку редактирования профиля
let buttonEdit = document.querySelector('.profile__btn-edit');
// Получаем popup
const popup = document.querySelector('.popup');
//Получаем кнопку закрытия попапа
const buttonClose = popup.querySelector('.popup__btn-close');
//Получаем профиль
const profile = document.querySelector('.profile');
// Получаем имя профиля
const profileName = profile.querySelector('.profile__name');
//Получаем профессию профиля
const profileJob = profile.querySelector('.profile__profession');
// Получаем поле ввода имени
const inputName = popup.querySelector('.popup__input_item_name');
// Получаем поле ввода профессии
const inputJob = popup.querySelector('.popup__input_item_job');


//функция открытия попапа
function openPopup() {
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
  popup.classList.add('popup_open');
}

buttonEdit.addEventListener("click", openPopup);

//функция закрытия попапа

function closePopup() {
  popup.classList.remove('popup_open');
}

buttonClose.addEventListener("click", closePopup);


// Находим форму в DOM
let formElement = popup.querySelector('.popup__form-edit');

function formSubmitHandler (evt) {
    evt.preventDefault(); 

    profileName.textContent = inputName.value; 
    profileJob.textContent = inputJob.value;
    closePopup();
}

formElement.addEventListener('submit', formSubmitHandler); 
