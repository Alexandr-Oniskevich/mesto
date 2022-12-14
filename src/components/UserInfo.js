export class UserInfo{
  constructor({userName, userDescription, userAvatar}){
    this._name = document.querySelector(userName); 
    this._description = document.querySelector(userDescription);
    this._avatar = document.querySelector(userAvatar);
  }

  getUserInfo() {
    const userInfo = {
      username: this._name.textContent,
      description: this._description.textContent,
      avatar: this._avatar.textContent
    }
    

    return userInfo;
  }

  setUserInfo(data) {
    this._name.textContent = data.name;
    this._description.textContent = data.about;
  }

  changeAvatar(data){
    this._avatar.src =  data.avatar;
  }
}