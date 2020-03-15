import React, { Component } from "react";
import { observer } from "mobx-react";
import { Redirect } from "react-router-dom";
import userStore from "../../store/UserStore";

export default function Auth(WrappedComponent) {
  @observer
  class Wrapper extends Component {
    render() {
      const { pathname } = this.props.location;
      const isLoginPage =
        pathname === "/signin" || pathname === "/registration";
      const isUserPage = pathname === "/account";
      if (userStore.User && isLoginPage) {
        return <Redirect to="/" />;
      }

      if (!userStore.User && isUserPage) {
        return <Redirect to="/" />;
      }

      return <WrappedComponent {...this.props} />;
    }
  }
  return Wrapper;
}
