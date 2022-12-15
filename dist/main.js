(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o,i,c){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._text=e.name,this._image=e.link,this._likes=e.likes,this._userId=o,this._ownerId=e.owner._id,this._id=e._id,this._templateSelector=n,this._handleCardClick=r,this._handleDeleteClick=i,this._handlLikeClick=c}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){var e=document.querySelector(this._templateSelector).content.querySelector(".elements__card").cloneNode(!0);return this._card=e,this._card}},{key:"isLiked",value:function(){var e=this;return this._likes.find((function(t){return t._id===e._userId}))}},{key:"setLikes",value:function(e){this._likes=e,this._card.querySelector(".elements__number-like").textContent=this._likes.length,this.isLiked()?this._likeButton.classList.add("elements__like_active"):this._likeButton.classList.remove("elements__like_active")}},{key:"createCardNode",value:function(){return this._element=this._getTemplate(),this._setEventListeners(),this.cardImg.src=this._image,this.cardText.textContent=this._text,this.cardImg.alt=this._text,this._ownerId!==this._userId&&(this._element.querySelector(".elements__del-card").style.display="none"),this.setLikes(this._likes),this._element}},{key:"_setEventListeners",value:function(){var e=this;this._likeButton=this._element.querySelector(".elements__like"),this._likeButton.addEventListener("click",(function(){e._handlLikeClick(e._id)})),this._element.querySelector(".elements__del-card").addEventListener("click",(function(){e._handleDeleteClick(e._id)})),this.cardImg=this._element.querySelector(".elements__img"),this.cardText=this._element.querySelector(".elements__text"),this.cardImg.addEventListener("click",(function(){e._handleCardClick(e._text,e._image)}))}},{key:"handleDeleteCard",value:function(){this._element.remove(),this._element=null}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}(),n=document.querySelector(".profile__btn-edit"),r=(document.querySelector("#popup-pofile"),document.querySelector(".profile")),o=document.querySelector(".profile__add-btn"),i=document.querySelector("#profile-form"),c=document.querySelector("#cards-form"),a=(document.querySelector("#avatar-form"),document.querySelector(".elements__list")),u=i.querySelector("#name-input"),s=i.querySelector("#job-input"),l=r.querySelector(".profile__edit");function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t,n){return t&&f(e.prototype,t),n&&f(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}document.querySelector(".popup__btn-submit");var d=p((function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),h(this,"_addClassError",(function(e,t){var n=r._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(".".concat(r._inputErrorClass)),n.textContent=t,n.classList.add(".".concat(r._errorClass))})),h(this,"_removeClassError",(function(e){var t=r._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(".".concat(r._inputErrorClass)),t.classList.remove(".".concat(r._errorClass)),t.textContent=""})),h(this,"_isValid",(function(e){e.validity.valid?r._removeClassError(e):r._addClassError(e,e.validationMessage)})),h(this,"_setEventListeners",(function(){r._inputList.forEach((function(e){e.addEventListener("input",(function(){r._isValid(e),r._changeBtnState()}))}))})),h(this,"enableValidation",(function(){r._setEventListeners(),r._changeBtnState()})),h(this,"_hasInvalidInput",(function(){return r._inputList.some((function(e){return!e.validity.valid}))})),h(this,"_changeBtnState",(function(){r._hasInvalidInput()?(r._buttonElement.classList.add(r._inactiveButtonClass),r._buttonElement.setAttribute("disabled",!0)):(r._buttonElement.classList.remove(r._inactiveButtonClass),r._buttonElement.removeAttribute("disabled"))})),h(this,"resetValidation",(function(){r._changeBtnState(),r._inputList.forEach((function(e){r._removeClassError(e)}))})),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(".".concat(this._inputSelector))),this._buttonElement=this._formElement.querySelector(".".concat(this._submitButtonSelector))}));function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var _=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._container=n,this._renderer=r}var t,n;return t=e,(n=[{key:"setItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var b=function(){function e(t){var n=t.userName,r=t.userDescription,o=t.userAvatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._description=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{username:this._name.textContent,description:this._description.textContent}}},{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._description.textContent=e.about,this._avatar.src=e.avatar}},{key:"changeAvatar",value:function(e){this._avatar.src=e.avatar}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var k=function(){function e(t){var n,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){"Escape"===e.key&&o.close()},(n="_handleEscClose")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this.popupElement=document.querySelector(t)}var t,n;return t=e,(n=[{key:"open",value:function(){this.popupElement.classList.add("popup_open"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this.popupElement.classList.remove("popup_open"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this.popupElement.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_open")&&e.close(),t.target.classList.contains("popup__btn-close")&&e.close()}))}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=S(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},w.apply(this,arguments)}function S(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=C(e)););return e}function O(e,t){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},O(e,t)}function j(e,t){if(t&&("object"===g(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&O(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=C(r);if(o){var n=C(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return j(this,e)});function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,e)).popupDescription=document.querySelector(".popup__description"),t.popupImage=document.querySelector(".popup__image"),t}return t=c,(n=[{key:"open",value:function(e,t){this.popupImage.src=t,this.popupImage.alt=e,this.popupDescription.textContent=e,w(C(c.prototype),"open",this).call(this)}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(k);function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(){return x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=q(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},x.apply(this,arguments)}function q(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=R(e)););return e}function I(e,t){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},I(e,t)}function B(e,t){if(t&&("object"===L(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function R(e){return R=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},R(e)}var A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&I(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=R(r);if(o){var n=R(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return B(this,e)});function c(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(n=i.call(this,e)).callbackSubmit=t,n._popupForm=n.popupElement.querySelector(".popup__form-edit"),n._btnSubmit=n.popupElement.querySelector(".popup__btn-submit"),n._inputs=Array.from(n._popupForm.querySelectorAll(".popup__input")),n}return t=c,(n=[{key:"changeBtnText",value:function(){this._btnSubmit.textContent=this._btnSubmit.textContent+"..."}},{key:"resetBtnText",value:function(){this._btnSubmit.textContent="Сохранить"}},{key:"_getInputValues",value:function(){var e={};return this._inputs.forEach((function(t){e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;x(R(c.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e.callbackSubmit(e._getInputValues())}))}},{key:"close",value:function(){this._popupForm.removeEventListener("submit",this.callbackSubmit),x(R(c.prototype),"close",this).call(this),this._popupForm.reset()}}])&&T(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(k);function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var U=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.url,this._headers=t.headers}var t,n;return t=e,(n=[{key:"takeUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("error".concat(e.status))}))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{method:"GET",headers:this._headers}).then((function(e){if(e.ok)return e.json();Promise.reject("Ошибка: ".concat(e.status," ").concat(e.statusText))}))}},{key:"addNewCard",value:function(e){var t=e.name,n=e.link;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t,link:n})}).then((function(e){if(e.ok)return e.json();Promise.reject("Ошибка: ".concat(e.status," ").concat(e.statusText))}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){if(e.ok)return e.json();Promise.reject("Ошибка: ".concat(e.status," ").concat(e.statusText))}))}},{key:"deleteLike",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){if(e.ok)return e.json();Promise.reject("Ошибка: ".concat(e.status," ").concat(e.statusText))}))}},{key:"addLike",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){if(e.ok)return e.json();Promise.reject("Ошибка: ".concat(e.status," ").concat(e.statusText))}))}},{key:"editUserInfo",value:function(e,t){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then((function(e){return e.ok?e.json():Promise.reject("error".concat(e.status))}))}},{key:"editUserAvatar",value:function(e){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatarinput})}).then((function(e){return e.ok?e.json():Promise.reject("error".concat(e.status))}))}}])&&D(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function N(e){return N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},N(e)}function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function F(){return F="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=H(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},F.apply(this,arguments)}function H(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=z(e)););return e}function J(e,t){return J=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},J(e,t)}function G(e,t){if(t&&("object"===N(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function z(e){return z=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},z(e)}var M=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&J(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=z(r);if(o){var n=z(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return G(this,e)});function c(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(n=i.call(this,e))._submit=n.popupElement.querySelector("#delete-form"),n._callbackConfirm=t,n}return t=c,(n=[{key:"open",value:function(e,t){this._item=e,this._id=t,F(z(c.prototype),"open",this).call(this)}},{key:"changeSubmitHandler",value:function(e){this._callbackConfirm=e}},{key:"setEventListeners",value:function(){var e=this;this._submit.addEventListener("submit",(function(t){t.preventDefault(),e._callback()})),F(z(c.prototype),"setEventListeners",this).call(this)}}])&&V(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(k),K=new U({url:"https://mesto.nomoreparties.co/v1/cohort-55",headers:{authorization:"08c56676-a1a4-49a4-8b96-820653b715f5","Content-Type":"application/json"}}),Q=new _({renderer:function(e){Q.setItem(W(e))}},a);function W(e){var n=new t(e,"#card-template",$,ne,(function(t){X.open(e,t),X.changeSubmitHandler((function(){K.deleteCard(t).then((function(e){console.log(e),n.handleDeleteCard(),X.close()}))}))}),(function(e){n.isLiked()?K.deleteLike(e).then((function(e){console.log(e),n.setLikes(e.likes)})):K.addLike(e).then((function(e){console.log(e),n.setLikes(e.likes)}))}));return n.createCardNode()}K.getInitialCards().then((function(e){Q.renderItems(e.reverse())})).catch((function(e){console.log(e)}));var X=new M("#delete-card",(function(){}));X.setEventListeners();var Y=new A("#popup-cards",(function(e){K.addNewCard({name:e.mestoname,link:e.mestolink}).then((function(e){Q.setItem(W(e))})),Y.close()}));Y.setEventListeners();var Z=new P(".popup_img_active");function $(e,t){Z.open(e,t)}Z.setEventListeners();var ee,te={};ee={formSelector:"popup__form-edit",inputSelector:"popup__input",submitButtonSelector:"popup__btn-submit",inactiveButtonClass:"popup__btn-submit_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_visible"},Array.from(document.querySelectorAll(".".concat(ee.formSelector))).forEach((function(e){var t=new d(ee,e),n=e.getAttribute("name");te[n]=t,t.enableValidation()}));var ne,re=new b({userName:".profile__name",userDescription:".profile__profession",userAvatar:".profile__avatar"});K.takeUserInfo().then((function(e){re.setUserInfo(e),ne=e._id}));var oe=new A("#popup-avatar",(function(e){oe.changeBtnText(),K.editUserAvatar(e).then((function(e){re.changeAvatar(e),oe.close()})).catch((function(e){console.log(e)})).finally((function(){oe.resetBtnText()}))}));oe.setEventListeners();var ie=new A("#popup-pofile",(function(e){ie.changeBtnText(),K.editUserInfo(e.profile_name,e.profile_job).then((function(e){re.setUserInfo(e),ie.close()})).catch((function(e){console.log(e)})).finally((function(){ie.resetBtnText()}))}));ie.setEventListeners(),o.addEventListener("click",(function(){Y.open(),te[c.getAttribute("name")].resetValidation()})),n.addEventListener("click",(function(){ie.open();var e=re.getUserInfo();u.value=e.username,s.value=e.description,te[i.getAttribute("name")].resetValidation()})),l.addEventListener("click",(function(){oe.open(),te.avatar.resetValidation()}))})();