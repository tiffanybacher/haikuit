import React from 'react';

function HamburgerIcon(props) {
  return (
    <button 
      className="Hamburger" 
      onClick={props.toggleMenu}>
      <i className="fas fa-bars"></i>
    </button>
  );
}

export default HamburgerIcon;