import React from "react";
import PropTypes from "prop-types";

function MarketSchedule(props){
  return(
    <React.Fragment>
      <h3>{props.day} - {props.location}</h3>
      <p>Hours: {props.hours}</p>
      <p>Booth: {props.booth}</p>
    </React.Fragment>
  );
}

MarketSchedule.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string,
};

export default MarketSchedule;