export class Api {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
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
    }).then((response)=>{
      if(response.ok){
        return response.json()}
      //  }else{
      //    Promise.reject(`Ошибка: ${response.status} ${response.statusText}`);
      //  }
    })
  }
}