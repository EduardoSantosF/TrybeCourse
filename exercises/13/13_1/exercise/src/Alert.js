import PropTypes from "prop-types";
import React from 'react';
import './Alert.css';

const Alert = (props) => {
  const { hideComponent, title, content, timeSeconds } = props.children;
  setTimeout(() => hideComponent(), timeSeconds * 1000);
  return (
    <div className='Alert'>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  )
}

Alert.propTypes = {
  children: PropTypes.object
}

export default Alert;
