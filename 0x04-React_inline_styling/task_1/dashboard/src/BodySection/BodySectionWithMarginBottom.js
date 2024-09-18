import React from "react";
import BodySection from "./BodySection";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  BodySectionWithMarginBottom: {
    marginBottom: "40px"
  }
});

const BodySectionWithMarginBottom = ({ title, children }) => {
  return (
    <div className={css(styles.BodySectionWithMarginBottom)}>
      <BodySection title={title}>{children}</BodySection>
    </div>
  );
};

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default BodySectionWithMarginBottom;
