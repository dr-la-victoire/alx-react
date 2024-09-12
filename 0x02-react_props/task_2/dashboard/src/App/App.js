import React from "react";
import Notifications from "../Notifications/Notifications";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./App.css";

function App() {
  return (
    <>
      <Notifications />
      <div className="App">
	  <Header/>
        <div className="App-body">
          <p>Login to access the full dashboard</p>
		  <Login/>
        </div>
		<Footer/>
      </div>
    </>
  );
}

export default App;
