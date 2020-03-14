import React, { Component } from "react";
import classes from "./Menu.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import data from "../constants/data";

import { ButtonNonAuth, ButtonAuth } from "../Header";

class Menu extends Component {
  state = {
    showServices: false
  };

  showServices = event => {
    event.preventDefault();
    this.setState({ showServices: true }, () => {
      document.addEventListener("click", this.closeServices);
    });
  };

  closeServices = () => {
    this.setState({ showServices: false }, () => {
      document.addEventListener("click", this.closeServices);
      document.removeEventListener("click", this.closeServices);
    });
  };
  render() {
    let click = this.state.showServices
      ? this.closeServices.bind(this)
      : this.showServices.bind(this);
    return (
      <>
        <ul className={classes["left-menu"]}>
          <li>
            <Link to="/search">
              <span className={classes["menu-elem-wrapper"]}>
                <FontAwesomeIcon icon="search" />
              </span>{" "}
              Search sitters
            </Link>
          </li>
          <li onClick={click}>
            <span className={classes["menu-elem-wrapper"]}>
              <FontAwesomeIcon icon="bone" />
            </span>{" "}
            Our Services
          </li>
        </ul>
        <ul className={classes["right-menu"]}>
          {this.props.authWalker ? <ButtonAuth /> : <ButtonNonAuth />}
          <li>
            <Link to="/help">
              <span className={classes["menu-elem-wrapper"]}>
                <FontAwesomeIcon icon="question-circle" />
              </span>{" "}
              Help
            </Link>
          </li>
        </ul>
        {this.state.showServices ? (
          <div className={classes.services}>
            <ul className={classes["services-wrapper"]}>
              {data.dog.map(item => (
                <li key={item.value}>
                  <Link to={`/${item.value}`}>
                    <FontAwesomeIcon icon={item.icon} />
                    <span className={classes["service-text-wrapper"]}>
                      {item.text}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </>
    );
  }
}

export default Menu;
