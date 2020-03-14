import { action } from "mobx";
import ourService from "../../services/ourService";
import userStore from "../../store/UserStore";
class SignInStore {
  @action submitDefault = async data => {
    try {
      let answer = await ourService.login(data);
      this.login(answer);
    } catch (error) {
      return {};
    }
  };

  @action login(user) {
    userStore.login(user);
  }
}

const signInStore = new SignInStore();

export default signInStore;
