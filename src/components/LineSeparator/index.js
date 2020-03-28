/**
 * This component could be extended and moved to
 * taskforce-fe-components if needed
 */
import React from "react";
import PropTypes from "prop-types";

const LineSeparator = ({ width, margin = "50px" }) => (
  <hr
    style={{
      color: "#E5E5E5",
      backgroundColor: "#E5E5E5",
      height: 1,
      margin: `${margin} auto`,
      width
    }}
  />
);

LineSeparator.propTypes = {
  width: PropTypes.string.isRequired,
  margin: PropTypes.string
};

export default LineSeparator;
