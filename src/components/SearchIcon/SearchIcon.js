import React from 'react';

function SearchIcon(props) {
  return (
    <button 
      className="SearchIcon" 
      onClick={props.toggleSearch}>
      <i className="fas fa-search"></i>
    </button>
  );
}

export default SearchIcon;