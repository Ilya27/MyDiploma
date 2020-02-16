import React, { Component } from "react";
import classes from "../HeaderWalking/HeaderWalking.module.css";

class HeaderWalking extends Component {
  onClick = () => {
    this.props.history.push("/search");
  };

  render() {
    return (
      <div className={classes.HeaderWalking}>
        <div className={classes.content}>
          <h1>Dog Walking Made Easy</h1>
          <h4>Welcome to the nation's largest network of dog walkers</h4>

          <div>
            <span onClick={this.onClick} className={classes.headerButton}>
              Book A Walk
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderWalking;
