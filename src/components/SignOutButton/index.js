import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./SignOutButton.module.css";
import userStore from "../../store/UserStore";

const SignOutButton = () => (
  <button
    type="button"
    onClick={() =>userStore.logout()}
    className={classes.btn}
  >
    <FontAwesomeIcon icon="user-times" /> Sign Out
  </button>
);

export default SignOutButton;
