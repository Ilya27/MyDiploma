import React, { Component } from "react";
import classes from "./Walker.module.css";

import Modal from "react-modal";
import CreditCardValidation from "../../components/ReusableComponents/CreditCardValidation";
import data from "../../components/constants/data";

const customStyles = {
  content: {
    display: "block",
    color: "black",
    backgroundColor: "transparent",
    position: "fixed",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    padding: "30px"
  }
};

Modal.setAppElement("#root");
Modal.defaultStyles.overlay.backgroundColor = "rgba(0, 0, 0, .5)";

class Walker extends Component {
  state = {
    loading: true,
    info: {},
    showModal: false
  };

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    // const { loading } = this.state;

    // if (loading) {
    // 	return (
    // 		<div className={classes.flexwrapper}>
    // 			<img alt="loading" src="https://cdn.dribbble.com/users/238583/screenshots/3630870/lagif-grande.gif" />
    // 		</div>
    // 	)
    // }

    // let services = [];
    // this.state.info.services.forEach(service => {
    // 	services.push(data.dog.map(item => {
    // 		return item.text === service ?
    // 			(
    // 				<div key={item.name}>
    // 					<h5 className={classes.h5}>{item.text}</h5>
    // 					<p className={classes["description"]}>{item.description}</p>
    // 				</div>
    // 			) :
    // 			null
    // 	}))
    // })

    // let dogSizes = [];
    // this.state.info.dogSizes.forEach(size => {
    // 	dogSizes.push(data.weights.map(item => {
    // 		return item.dogSize === size ?
    // 			(
    // 				<div key={item.dogSize}>
    // 					<h5 className={classes.h5}>{item.dogSize}</h5>
    // 					<p className={classes["description"]}>{item.weight}</p>
    // 				</div>
    // 			) :
    // 			null
    // 	}))
    // })
    return (
      <div className={classes.walker}>
        <div className={classes["walker-wrapper"]}>
          <div className={classes["avatar-wrapper"]}>
            <img
              src={`${this.state.info.photo}`}
              alt={this.state.info.name}
              className={classes.avatar}
            />
          </div>
          <div className={classes["info-wrapper"]}>
            <h1 className={classes.h1}>{this.state.info.name}</h1>
            <h2 className={classes.h2}>
              {this.state.info.city} {this.state.info.address}
            </h2>
            <h3 className={classes.h3}>{this.state.info.email}</h3>
            <button
              type="button"
              className={classes.btn}
              onClick={this.handleOpenModal.bind(this)}
            >
              Contact {this.state.info.name}
            </button>
            <Modal
              isOpen={this.state.showModal}
              onRequestClose={this.handleCloseModal.bind(this)}
              style={customStyles}
            >
              <div className={classes.ModalWrap}>
                <h1>Your Order!</h1>
                <div className={classes.emailModal}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={this.state.info.email}
                    disabled
                  />
                </div>
                <CreditCardValidation />

                <div className={classes.ButtonOrderComplete}>
                  <button
                    onClick={this.handleCloseModal.bind(this)}
                    type="submit"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </Modal>
          </div>
        </div>
        <div className={classes["services-wrapper"]}>
          <h4 className={classes.h4}>Services</h4>
          {/* {services} */}
          <p className={classes.salary}>{this.state.info.salary}$</p>
        </div>
        <div className={classes["size-wrapper"]}>{/* {dogSizes} */}</div>
      </div>
    );
  }
}

export default Walker;
