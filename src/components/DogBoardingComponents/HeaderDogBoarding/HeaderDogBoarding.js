import React, { Component } from "react";
import classes from "../HeaderDogBoarding/HeaderDogBoarding.module.css";

class HeaderDogBoarding extends Component {
  onClick = () => {
    this.props.history.push("/search");
  };

  render() {
    return (
      <div className={classes.HeaderDogBoarding}>
        <div className={classes.content}>
          <h1>
            No more kennels—the next level of
            <br /> dog boarding is here
          </h1>
          <h4>
            Over 65,000 sitters have listed their services on DogWalker, making
            it easy to
            <br />
            discover your dog's home away from home
          </h4>

          <div>
            <span onClick={this.onClick} className={classes.headerButton}>
              Book Dog Boarding
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderDogBoarding;
