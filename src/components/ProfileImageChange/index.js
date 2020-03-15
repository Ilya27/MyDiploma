import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-toastify";
import defaultUser from '../../images/defaultUser.png'
import classes from "./ProfileImageChange.module.css";

class ProfileImageChange extends Component {
  state = {
    photo: this.props.profileImage
  };

  handleFiles = event => {
    let fileReader = new FileReader();
    if (event.target.files[0]) {
      fileReader.readAsDataURL(event.target.files[0]);
      fileReader.onload = event => {
        this.setState({ photo: event.target.result });
      };
    } else {
      this.setState({ photo: this.props.profileImage });
    }
  };

  handleClick = () => {
    toast.success("You changed your profile image successfully!");
  };
  render() {
    return (
      <div className={classes["profile-image-change-wrapper"]}>
        <h1 className={classes.h1}>
          <img
            src={defaultUser}
            alt="pic"
            className={classes.avatar}
          />
        </h1>
        <input
          type="file"
          onChange={this.handleFiles.bind(this)}
          className={classes.inputfile}
          id="fileChange"
        />
        <label htmlFor="fileChange">
          <FontAwesomeIcon icon="download" /> Choose a file
        </label>
        <button
          type="button"
          onClick={this.handleClick.bind(this)}
          className={classes.btn}
        >
          Set new avatar
        </button>
      </div>
    );
  }
}

export default ProfileImageChange;
