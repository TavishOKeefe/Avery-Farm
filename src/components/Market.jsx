import React from 'react';
import PropTypes from 'prop-types';

function Market(props){
  return (
    <div>
      <h3>{props.day}</h3>
      <h3>{props.location}</h3>
      <h3>{props.hours}</h3>
      <p>{props.booth}</p>
      <hr/>
    </div>
  );
}

Market.propTypes = {
  Monday: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string.isRequired
};

export default Market;
