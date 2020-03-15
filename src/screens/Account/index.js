import React, { Component } from "react";
import classes from "./Account.module.css";
import { observer } from "mobx-react";
import ProfileImageChange from "../../components/ProfileImageChange";
import InfoChange from "../../components/InfoChange";
import PasswordChange from "../../components/PasswordChange";
import ButtonDeleteAccount from "../../components/ButtonDeleteAccount";
import AuthHOC from "../../shared/AuthHOC/AuthHOC";
import accountStore from "./AccountStore";
@observer
class Account extends Component {
  componentDidMount() {
    accountStore.getInfo();
  }
  render() {
    if (!accountStore.userInfo) {
      return (
        <div className={classes.account}>
          <img
            alt="loading"
            src="https://cdn.dribbble.com/users/238583/screenshots/3630870/lagif-grande.gif"
          />
        </div>
      );
    }
    return (
      <div className={classes.account}>
        <div className={classes["account-info"]}>
          {/* <ProfileImageChange /> */}
          <InfoChange user={accountStore.userInfo} />
        </div>
        <PasswordChange />
        <ButtonDeleteAccount />
      </div>
    );
  }
}
export default AuthHOC(Account);
