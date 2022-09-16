const buttonAdd = document.querySelector('.profile__btn');
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__close');

function closePopup() {
  buttonAdd.addEventListener('click', function(){
    popup.classList.toggle('popup_open');
  });

  closeButton.addEventListener('click', function(){
    popup.classList.toggle('popup_open');
  });
}

closePopup()


let formElement = popup.querySelector('.popup__form'); 
let nameInput = formElement.querySelector('.popup__input_name');
let jobInput = formElement.querySelector('.popup__input_job');

function formSubmitHandler (evt) {
    evt.preventDefault(); 

    let name = document.querySelector('.profile__name');
    let description = document.querySelector('.profile__profession');
    
    name.textContent = nameInput.value;
    description.textContent = jobInput.value; 
}

formElement.addEventListener('submit', formSubmitHandler); 