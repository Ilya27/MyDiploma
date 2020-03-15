import { action, observable } from "mobx";
import ourService from "../services/ourService";
class UserStore {
  @observable User = localStorage.getItem("user");

  @action login = User => {
    this.User = User;
    const forToken = User;
    delete forToken.account.card;
    localStorage.setItem("user", JSON.stringify(forToken));
  };
  

  @action logout = async (makeApiLogout = true) => {
    if (makeApiLogout) {
      await ourService.logout();
    }
    this.User = null;
    localStorage.removeItem("user");
  };

  //   @action getInfo = async () => {
  //     this.User = JSON.parse(localStorage.getItem('user'));
  //     if (this.User) {
  //       this.User.subject.registrationStatus === 'unregistered'
  //         ? modalWindowStore.changeStatus(true)
  //         : modalWindowStore.changeStatus(false);
  //     }
  //   };
}

const userStore = new UserStore();

export default userStore;
