import React from "react";
import propTypes from "prop-types";
import Notifications from "../Notifications/Notifications";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import CourseList from "../CourseList/CourseList";
import "./App.css";

function App(isLoggedIn) {
  let loginStatus;

  if (isLoggedIn) {
    loginStatus = <CourseList />;
  } else {
    loginStatus = <Login />;
  }
  return (
    <>
      <Notifications />
      <div className="App">
        <Header />
        <div className="App-body">{loginStatus}</div>
        <Footer />
      </div>
    </>
  );
}

App.propTypes = {
  isLoggedIn: propTypes.bool
};

App.defaultProps = {
  isLoggedIn: false
};

export default App;
