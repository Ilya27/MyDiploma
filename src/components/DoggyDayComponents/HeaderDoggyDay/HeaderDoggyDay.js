import React, { Component } from "react";
import classes from "../HeaderDoggyDay/HeaderDoggyDay.module.css";

class HeaderDoggyDay extends Component {
  onClick = () => {
    this.props.history.push("/search");
  };

  render() {
    return (
      <div className={classes.HeaderDoggyDay}>
        <div className={classes.content}>
          <h1>
            Doggy day care that fits your dog's <br /> needs, your schedule, and
            your <br /> lifestyle
          </h1>
          <h4>Welcome to the nation's largest network of pet sitters</h4>

          <div>
            <span onClick={this.onClick} className={classes.headerButton}>
              Book Doggy Day Care
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderDoggyDay;
