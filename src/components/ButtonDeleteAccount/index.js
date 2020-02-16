import React, { Component } from "react";
import { toast } from "react-toastify";
import classes from "./ButtonDeleteAccount.module.css";

class ButtonDeleteAccount extends Component {
  handleClick = () => {
    toast.success("The profile is deleted!");
  };
  render() {
    return (
      <div className={classes["delete-btn-wrapper"]}>
        <button
          type="button"
          onClick={this.handleClick.bind(this)}
          className={classes.btn}
        >
          Delete this account
        </button>
      </div>
    );
  }
}

export default ButtonDeleteAccount;
