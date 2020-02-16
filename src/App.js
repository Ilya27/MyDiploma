import React, { Component, Fragment } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faPaw,
  faBars,
  faSearch,
  faBone,
  faIdCard,
  faUserCircle,
  faQuestionCircle,
  faEnvelope,
  faUserCog,
  faUserTimes,
  faEye,
  faEyeSlash,
  faDownload,
  faAngleRight,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import { Route, Switch, Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Header from "./components/Header";
import SignUp from "./screens/SignUp";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";
import Registration from "./screens/Registration";
import SignIn from "./screens/SignIn";
import PasswordForgetPage from "./screens/PasswordForget";
import Account from "./screens/Account";
import Search from "./screens/Search";
import Walker from "./screens/Walker";
import DogBoarding from "./components/DogBoarding/DogBoarding";
import HouseSitting from "./components/HouseSitting/HouseSitting";
import DropInVisit from "./components/DropInVisit/DropInVisit";
import DoggyDay from "./components/DoggyDay/DoggyDay";
import Walking from "./components/Walking/Walking";
import About from "./screens/About";
import PrivacyStatement from "./screens/PrivacyStatement";
import TermsOfService from "./screens/TermOfService";
import Help from "./screens/Help";
import NotFound from "./screens/NotFound";
import "./App.css";

library.add(
  fab,
  faPaw,
  faBars,
  faSearch,
  faBone,
  faIdCard,
  faUserCircle,
  faQuestionCircle,
  faEnvelope,
  faUserCog,
  faUserTimes,
  faEye,
  faEyeSlash,
  faDownload,
  faAngleRight,
  faTimes
);

const history = createBrowserHistory();

toast.configure({
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true
});

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router history={history}>
          <Header />
          <div className="content-wrapper">
            <Switch>
              <Route path="/" component={MainContent} exact />
              <Route path="/signup" component={SignUp} exact />
              <Route path="/registration" component={Registration} exact />
              <Route path="/signin" component={SignIn} exact />
              <Route
                path="/password-forget"
                component={PasswordForgetPage}
                exact
              />
              <Route path="/account" component={Account} exact />
              <Route path="/search" component={Search} exact />
              <Route path="/walker/:uid" component={Walker} exact />
              <Route path="/Dog-Boarding" component={DogBoarding} exact />
              <Route path="/House-Sitting" component={HouseSitting} exact />
              <Route path="/Drop-In-Visits" component={DropInVisit} exact />
              <Route path="/Doggy-Day-Care" component={DoggyDay} exact />
              <Route path="/Dog-Walking" component={Walking} exact />
              <Route path="/aboutus" component={About} exact />
              <Route path="/privacy" component={PrivacyStatement} exact />
              <Route path="/terms" component={TermsOfService} exact />
              <Route path="/help" component={Help} exact />
              <Route component={NotFound} />
            </Switch>
          </div>
          <Footer />
        </Router>
      </Fragment>
    );
  }
}

export default App;
