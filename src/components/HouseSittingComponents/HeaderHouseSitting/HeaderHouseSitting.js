import React, { Component } from "react";
import classes from "../HeaderHouseSitting/HeaderHouseSitting.module.css";

class HeaderHouseSitting extends Component {
  onClick = () => {
    this.props.history.push("/search");
  };

  render() {
    return (
      <div className={classes.HeaderHouseSitting}>
        <div className={classes.content}>
          <h1>
            Your perfect pet sitter is also your <br /> perfect house sitter
          </h1>
          <h4>Meet the nation's largest network of pet sitters</h4>
          <div>
            <span onClick={this.onClick} className={classes.headerButton}>
              Book House Sitting
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderHouseSitting;
