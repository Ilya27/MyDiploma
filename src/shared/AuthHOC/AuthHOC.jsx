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

      console.log(isLoginPage);
      console.log(userStore.User);

      if (userStore.User && isLoginPage) {
        return <Redirect to="/" />;
      }
      //   const isProfilePage = pathname.split("/")[1] === "profile";
      //   const isHomePage = pathname === "/";

      //   if (!globalStore.User && isProfilePage) {
      //     return <Redirect to="/login" />;
      //   }

      //   if (globalStore.User && isLoginPage && !state) {
      //     return <Redirect to="/profile/my-projects" />;
      //   }

      //   if (globalStore.User && isLoginPage && state) {
      //     return <Redirect to={state.prevPath} />;
      //   }

      //   if (globalStore.User && isHomePage) {
      //     return <Redirect to="/profile/my-projects" />;
      //   }
      //   if (!globalStore.User && isHomePage) {
      //     return <Redirect to="/create-project/style" />;
      //   }

      return <WrappedComponent {...this.props} />;
    }
  }
  return Wrapper;
}
