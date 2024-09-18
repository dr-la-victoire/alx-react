import React from "react";
import logo from "../assets/holberton-logo.jpg";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  AppHeader: {
    fontSize: "1.4rem",
    color: "red",
    display: "flex",
    alignItems: "center",
    padding: "1.2em"
  },

  img: {
    height: "250px",
    width: "250px"
  }
});

const Header = () => {
  return (
    <div className={css(styles.AppHeader)}>
      <img src={logo} alt="Holberton" className={css(styles.img)} />
      <h1>School dashboard</h1>
    </div>
  );
};

export default Header;
