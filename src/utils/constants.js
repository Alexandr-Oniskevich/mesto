export const initialCards = [
  // {
  //   name: 'Архыз',
  //   link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  // },
  // {
  //   name: 'Челябинская область',
  //   link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  // },
  // {
  //   name: 'Иваново',
  //   link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  // },
  // {
  //   name: 'Камчатка',
  //   link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  // },
  // {
  //   name: 'Холмогорский район',
  //   link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  // },
  // {
  //   name: 'Байкал',
  //   link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  // }
];

export const classesObj = {
  formSelector: 'popup__form-edit',
  inputSelector: 'popup__input',
  submitButtonSelector: 'popup__btn-submit',
  inactiveButtonClass: 'popup__btn-submit_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible',
};

//Получаем кнопку редактирования профиля
export const buttonEdit = document.querySelector('.profile__btn-edit');
// Получаем popup профиля
export const popupProfile = document.querySelector('#popup-pofile');
//Получаем профиль
export const profile = document.querySelector('.profile');
// Получаем имя профиля
//Получаем кнопку добавления карточки
export const btnCardAdd = document.querySelector('.profile__add-btn');
export const profileForm = document.querySelector('#profile-form');
export const cardsForm = document.querySelector('#cards-form');
export const avatarForm = document.querySelector('#avatar-form');
export const cardContainer = document.querySelector('.elements__list');
export const nameInput = profileForm.querySelector('#name-input');
export const jobInput = profileForm.querySelector('#job-input');
export const profileEdit = profile.querySelector('.profile__edit');
export const btnSubmit = document.querySelector('.popup__btn-submit')
