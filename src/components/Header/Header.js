import React, { Component } from 'react';
import HamburgerIcon from '../HamburgerIcon/HamburgerIcon';
import SearchIcon from '../SearchIcon/SearchIcon';

class Header extends Component {
  state = {
    searchIsShown: false
  }

  toggleSearch = () => {
    this.setState({
      searchIsShown: !this.state.searchIsShown
    });
  }

  render() {
    return (
      <header className="Header">
        <div className="flex-container">
          <HamburgerIcon />
          <h1>Haikuit<i class="fas fa-feather-alt"></i></h1>
          <SearchIcon toggleSearch={this.toggleSearch} />
        </div>
        {
        this.state.searchIsShown 
          ? <input 
              type="text" 
              className="search-input" 
              placeholder="Search for a word..." />
          : null
        }
      </header>
    );
  }
}

export default Header;