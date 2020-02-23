import { action, observable } from "mobx";
// const defaultGeneralInfoField = {
//   firstName: "",
//   lastName: "",
//   email: "",
//   password: "",
//   repeatPassword: ""
// };

class RegistrationStore {
  @observable page = "general";
//   @observable generalInfo = defaultGeneralInfoField;
  @action changePage = pageName => {
    this.this.page = pageName;
  };

}

const registrationStore = new RegistrationStore();

export default registrationStore;
