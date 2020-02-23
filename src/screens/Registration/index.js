import React, { Component } from "react";
import GeneralInfo from './components/GeneralInfo'
import registrationStore from "./RegistrationStore";
import classes from "./Registration.module.css";
import { Link } from "react-router-dom";
import Checkbox from "../../components/ReusableComponents/Checkbox";
import data from "../../components/constants/data";
import PaymentForm from "../../components/CreditCard";

class Registration extends Component {
  state = {
    imageSrc: ""
  };

  handleFiles = event => {
    let fileReader = new FileReader();
    if (event.target.files[0]) {
      fileReader.readAsDataURL(event.target.files[0]);
      fileReader.onload = event => {
        this.setState({ imageSrc: event.target.result });
      };
    } else {
      this.setState({ imageSrc: "" });
    }
  };

  checkPage = name => {
    switch (name) {
      case "general":
        return <GeneralInfo />;

      default:
        return <GeneralInfo />;
    }
  };

  render() {
    let services = data.dog.map(item => (
      <Checkbox
        name="checkboxes"
        value={item.text}
        icon={item.icon}
        box={classes.box}
        key={item.text}
      />
    ));
    let dogSizes = data.weights.map(item => (
      <Checkbox
        name="dogSizes"
        value={item.dogSize}
        text={item.weight}
        box={classes["box-dog"]}
        key={item.dogSize}
      />
    ));
    return (
      <div className={classes["form-holder"]}>
        {this.checkPage(registrationStore.page)}
        <p className={classes["have-account"]}>
          Уже есть учетная запись? <Link to="/signin">Войдите сейчас.</Link>
        </p>
      </div>
    );
  }
}

export const SignUpLink = () => (
  <p>
    Don't have an account? <Link to="/signup">Sign Up</Link>
  </p>
);

export default Registration;
