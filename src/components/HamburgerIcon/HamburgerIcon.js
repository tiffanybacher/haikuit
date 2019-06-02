import React from 'react';

function HamburgerIcon(props) {
  return (
    <button 
      className="HamburgerIcon" 
      onClick={props.toggleMenu}
      tabindex={props.tabindex}>
      <i className="fas fa-bars"></i>
    </button>
  );
}

export default HamburgerIcon;