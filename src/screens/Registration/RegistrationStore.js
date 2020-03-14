import { action, observable } from "mobx";
import ourService from "../../services/ourService";
import userStore from "../../store/UserStore";
import signInStore from "../SignIn/SignInStore";
class RegistrationStore {
  @observable page = "general";
  @observable fields = {};
  @action changePage = (fields, pageName) => {
    this.fields = { ...fields, ...this.fields };
    this.page = pageName;
  };

  @action registration = async fields => {
    const regFields = { ...fields, ...this.fields };
    try {
      const answer = await ourService.registration(regFields);
      signInStore.submitDefault({
        email: answer.email,
        password: regFields.password
      });
    } catch (error) {
      console.log(error);
    }
  };
}

const registrationStore = new RegistrationStore();

export default registrationStore;
