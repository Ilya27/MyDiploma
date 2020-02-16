import React from "react";
import classes from "./ServicesForEveryDogAndCat.module.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faSuitcaseRolling,
  faPaw,
  faDog,
  faSun,
  faWalking,
  faCat,
  faUserShield,
  faCheck
} from "@fortawesome/free-solid-svg-icons";
import data from "./../../constants/data";
import { Link } from "react-router-dom";

library.add(
  faHome,
  faSuitcaseRolling,
  faPaw,
  faDog,
  faSun,
  faWalking,
  faCat,
  faUserShield,
  faCheck
);

let ServicesForEveryDogAndCat = () => {
  let servicesList = data.dog.map(data => (
    <div className={classes.descriptionRow} key={Math.random()}>
      <div className={classes.iconDiv}>
        <FontAwesomeIcon className={classes.iconServices} icon={data.icon} />
      </div>
      <div className={classes.descriptionBlock}>
        <label>{data.text}</label>
        <div className={classes.description}>{data.description}</div>
      </div>
    </div>
  ));

  return (
    <div className={classes.servicesForEveryDogAndCat}>
      <div className={classes.header}>
        <h3>Services for every dog and cat</h3>
      </div>
      <div className={classes.explanationColumn}>
        <div className={classes.descriptionColumn}>{servicesList}</div>

        <div className={classes.ourSittersAdvantagesColumn}>
          <div className={classes.ourSittersPanelHeader}>
            <FontAwesomeIcon
              className={classes.iconServices}
              icon="user-shield"
            />
            <div className={classes.iconDivSitters}>
              Book with pet sitters you can trust
            </div>
          </div>

          <div className={classes.ourSittersPanelBody}>
            <ul className={classes.sittersAdvantagesList}>
              <li>All new sitters pass a basic background check</li>
              <li>
                All sitters provide a detailed profile and personal information
              </li>
              <li>
                All sitters are approved by our team of sitter specialists
              </li>
            </ul>
          </div>
          <Link to="/search" className={classes.bookYourNextSitter}>
            Book your next DogWalker sitter
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesForEveryDogAndCat;
