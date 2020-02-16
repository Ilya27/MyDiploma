import React, { Component } from "react";
import classes from "../HeaderDropInVisit/HeaderDropInVisit.module.css";

class HeaderDropInVisit extends Component {
  onClick = () => {
    this.props.history.push("/search");
  };

  render() {
    return (
      <div className={classes.HeaderDropInVisit}>
        <div className={classes.content}>
          <h1>
            Book drop-in visits in 10,000 cities,
            <br /> including yours
          </h1>
          <h4>Personalized care for your pet—without breaking the bank</h4>
          <div>
            <span onClick={this.onClick} className={classes.headerButton}>
              Book A Visit
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderDropInVisit;
