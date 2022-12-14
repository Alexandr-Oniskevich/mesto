export class Api {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
  }

  takeUserInfo(){
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: this._headers,
    })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(`error${response.status}`);
    });
    
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      method: "GET",
      headers: this._headers
    })
    .then((result) => {
      if(result.ok){
       return result.json()
      }else{
        Promise.reject(`Ошибка: ${result.status} ${result.statusText}`);
      }
    }); 
  }

  addNewCard({name, link}) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({name, link})
    })
    .then((response)=>{
      if(response.ok){
        
        return response.json()
       }else{
         Promise.reject(`Ошибка: ${response.status} ${response.statusText}`);
       }
    })
  }

  deleteCard(id){
    return fetch(`${this._url}/cards/${id}`, {
      method: "DELETE",
      headers: this._headers,
      //body: JSON.stringify(id)
    })
    .then((response)=>{
      if(response.ok){
        return response.json()
       }else{
         Promise.reject(`Ошибка: ${response.status} ${response.statusText}`);
       }
    })
  }

  deleteLike(id){
    return fetch(`${this._url}/cards/${id}/likes`, {
      method: "DELETE",
      headers: this._headers,
      //body: JSON.stringify(id)
    })
    .then((res)=>{
      if(res.ok){
        return res.json()
       }else{
         Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
       }
    })
  }

  addLike(id){
    return fetch(`${this._url}/cards/${id}/likes`, {
      method: "PUT",
      headers: this._headers,
      //body: JSON.stringify(id)
    })
    .then((res)=>{
      if(res.ok){
        return res.json()
       }else{
         Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
       }
    })
  }

  editUserInfo(userName, userDescription) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: userName,
        about: userDescription,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`error${res.status}`);
      });
  }

  editUserAvatar(userAvatar) {
    // https://mesto.nomoreparties.co/v1/cohortId/users/me/avatar 
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: userAvatar.avatar
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`error${res.status}`);
      });
  }
}