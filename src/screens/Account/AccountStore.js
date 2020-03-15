import { action, observable } from "mobx";
import ourService from "../../services/ourService";
class AccountStore {
  @observable userInfo = "";

  @action getInfo = async () => {
    try {
      const answer = await ourService.getInfo();
      this._setInfo(answer);
    } catch (error) {
      console.log(error);
    }
  };

  @action updateInfo = async params => {
    try {
      const answer = await ourService.updateInfo(params);
      this._setInfo(answer);
    } catch (error) {
      console.log(error);
    }
  };

  @action changePassword = async params => {
    console.log(params);
    try {
      const answer = await ourService.changePassword(params);
      return answer;
    } catch (error) {
      console.log(error);
    }
  };

  _setInfo = info => {
    this.userInfo = info;
  };
}

const accountStore = new AccountStore();

export default accountStore;
