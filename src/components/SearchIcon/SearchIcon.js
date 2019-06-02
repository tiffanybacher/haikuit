import React from 'react';

function SearchIcon(props) {
  return (
    <button 
      className="SearchIcon" 
      onClick={props.toggleSearch}
      tabindex={props.tabindex}>
      <i className="fas fa-search"></i>
    </button>
  );
}

export default SearchIcon;