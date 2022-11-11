export class FormValidator {

  constructor(obj, formElement){
    this._formSelector = obj.formSelector;
    this._inputSelector = obj.inputSelector;
    this._submitButtonSelector = obj.submitButtonSelector;
    this._inactiveButtonClass = obj.inactiveButtonClass;
    this._inputErrorClass = obj.inputErrorClass;
    this._errorClass = obj.errorClass;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
  }

  _addClassError = (inputElement, errorMessage) => {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(`.${this._inputErrorClass}`);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(`.${this._errorClass}`);
  };

  _removeClassError = (inputElement) => {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(`.${this._inputErrorClass}`);
    errorElement.classList.remove(`.${this._errorClass}`);
    errorElement.textContent = '';
  };

  _isValid = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._addClassError(inputElement, inputElement.validationMessage);
    } else {
      this._removeClassError(inputElement);
    }
  };

  _setEventListeners = () => {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._isValid(inputElement);
        this._changeBtnState();
      });
    });
  };

  _hasInvalidInput = () => {
    return this._inputList.some(function (inputElement) {
      return !inputElement.validity.valid;
    });
  };

  
  _changeBtnState = () => {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.setAttribute("disabled", true);
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.removeAttribute("disabled");
    }
  };

  resetForm = () => {
    this._changeBtnState();
    this._inputList.forEach((inputElement) => {
      this._removeClassError(inputElement);
    });
  };

  enableValidation = () => {
    this._setEventListeners();
  };
}
