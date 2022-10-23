//получаем форму formCards
const placeForm = document.querySelector('#place');
const profileForm = document.querySelector('#profile');

//получаем инпуты
const placeInput = placeForm.querySelector('#place-input');
const urlInput = placeForm.querySelector('#url-input');
const nameInput = profileForm.querySelector('#name-input');
const jobInput = profileForm.querySelector('#job-input');



const setSubmitButtonState = (isActive, btnSubmitForm) => {
  if(isActive){
    btnSubmitForm.removeAttribute('disabled');
    btnSubmitForm.classList.add('popup__btn-submit_state_active')
    btnSubmitForm.classList.remove('popup__btn-submit_state_inactive');
  } else {
    btnSubmitForm.setAttribute('disabled', true);
    btnSubmitForm.classList.add('popup__btn-submit_state_inactive')
    btnSubmitForm.classList.remove('popup__btn-submit_state_active');
  }
}

const validatInput = (input, form) =>{
  const erroeElement = form.querySelector(`#${input.id}-error`);
  const btnSubmitForm = form.querySelector('.popup__btn-submit');

  if(input.checkValidity()) {
    erroeElement.textContent = "";
  }else{
    erroeElement.textContent = input.validationMessage;
  }

  if(form.checkValidity()) {
    setSubmitButtonState(true, btnSubmitForm)
  }else{
    setSubmitButtonState(false, btnSubmitForm)
  }
}

const validatForm = (event) =>{
  event.preventDefault(); 
  validatInput(placeInput, placeForm)
  validatInput(urlInput, placeForm)
  validatInput(nameInput, profileForm)
  validatInput(jobInput, profileForm)

  if(event.target.checkValidity()) {
    event.target.reset
  }
}

placeForm.addEventListener('input', validatForm);
profileForm.addEventListener('input', validatForm);

