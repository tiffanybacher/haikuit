import React from 'react';

function SearchIcon(props) {
  return (
    <button onClick={props.toggleSearch}>
      <i class="fas fa-search"></i>
    </button>
  );
}

export default SearchIcon;