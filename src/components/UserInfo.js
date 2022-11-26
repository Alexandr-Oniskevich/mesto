export class UserInfo{
  constructor({userName, userDescription}){
    this._name = document.querySelector(userName); 
    this._description = document.querySelector(userDescription);
  }

  getUserInfo() {
    const userInfo = {
      username: this._name.textContent,
      description: this._description.textContent
    }
    

    return userInfo;
  }

  setUserInfo(data) {
    this._name.textContent = data.username;
    this._description.textContent = data.description;
  }
}