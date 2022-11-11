

//const formElement = document.querySelector('.popup__form-edit');
//const formElement = document.querySelector('.popup__form-edit');

//const formInput = formElement.querySelector(`.${classesObj.inputSelector}`);
//const formError = formElement.querySelector(`.${formInput.id}-error`);


//const validate = new FormValidator(classesObj, '.popup__form-edit');
//validate.enableValidation();

/*const formElement = document.querySelector('.popup__form-edit');*/
//const formInput = formElement.querySelector(`.${objClasses.inputSelector}`);
//const formError = formElement.querySelector(`.${formInput.id}-error`);

const addClassError = (formElement, inputElement, errorMessage, obj) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.add(`.${obj.inputErrorClass}`);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(`.${obj.errorClass}`);
};

const removeClassError = (formElement, inputElement, obj) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(`.${obj.inputErrorClass}`);
  errorElement.classList.remove(`.${obj.errorClass}`);
  errorElement.textContent = '';
};


const isValid = (formElement, inputElement, obj) => {
  if (!inputElement.validity.valid) {
    addClassError(formElement, inputElement, inputElement.validationMessage, obj);
  } else {
    removeClassError(formElement, inputElement, obj);
  }
}; 

const setEventListeners = (formElement, obj) => {
  const inputList = Array.from(formElement.querySelectorAll(`.${obj.inputSelector}`));
  const buttonElement = formElement.querySelector(`.${obj.submitButtonSelector}`);

  changeBtnState(inputList, buttonElement, obj);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {

      isValid(formElement, inputElement, obj)

      changeBtnState(inputList, buttonElement, obj);
    });
  });
}; 

const enableValidation = (obj) => {
  const formList = Array.from(document.querySelectorAll(`.${obj.formSelector}`));

  formList.forEach((formElement) => {
    setEventListeners(formElement, obj);
  });
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
}; 


export const changeBtnState = (inputList, buttonElement, obj) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(`${obj.inactiveButtonClass}`);
    buttonElement.setAttribute("disabled", true);
  } else {
    buttonElement.classList.remove(`${obj.inactiveButtonClass}`);
    buttonElement.removeAttribute('disabled')
  }
}; 

enableValidation(classesObj); 