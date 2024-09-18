import React from "react";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  AppBody: {
    fontSize: "1.4rem",
    padding: "1.2em",
    height: "45%"
  },

  FormInputs: {
    display: "flex",
    gap: "2em",
    alignItems: "center"
  },

  Input: {
    height: "1.4rem",
    marginLeft: "10px"
  }
});

const Login = () => {
  return (
    <>
      <div className={css(styles.AppBody)}>
        <p>Login to access the full dashboard</p>
        <section className={css(styles.FormInputs)}>
          <section className="input">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              className={css(styles.Input)}
            />
          </section>
          <section className="input">
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              name="password"
              id="password"
              className={css(styles.Input)}
            />
          </section>
          <button>OK</button>
        </section>
      </div>
    </>
  );
};

export default Login;
