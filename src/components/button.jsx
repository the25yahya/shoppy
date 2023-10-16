import React from 'react'
import PropTypes from 'prop-types';


const Button = ({bgColor, color, size, text, borderRadius}) => {
  return (
    <div
    type="button"
    style={{backgroundColor:bgColor,color,borderRadius}}
    className={`w-40 text-${size} p-3 hover:drop-shadow-xl`}
    >
     {text}
    </div>
  )
}
Button.propTypes = {
  bgColor: PropTypes.string,      // Expected to be a string
  color: PropTypes.string,        // Expected to be a string
  size: PropTypes.string,         // Expected to be a string
  text: PropTypes.string,         // Expected to be a string
  borderRadius: PropTypes.string,  // Expected to be a string
};

export default Button