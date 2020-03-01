import { action, observable } from "mobx";
import ourService from "../../services/ourService";

class RegistrationStore {
  @observable page = "general";
  @observable fields = {};
  @action changePage = (fields, pageName) => {
    this.fields = { ...fields, ...this.fields };
    this.page = pageName;
  };

  @action registration = async fields => {
    this.fields = { ...fields, ...this.fields };
    try {
      const answer = await ourService.registration(this.fields);
      console.log(answer);
    } catch (error) {
      console.log(error);
    }
  };
}

const registrationStore = new RegistrationStore();

export default registrationStore;
