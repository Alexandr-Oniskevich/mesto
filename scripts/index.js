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
