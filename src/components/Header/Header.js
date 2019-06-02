import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import HamburgerIcon from '../HamburgerIcon/HamburgerIcon';
import SearchIcon from '../SearchIcon/SearchIcon';

class Header extends Component {
  state = {
    searchShown: false
  }

  toggleSearch = () => {
    this.setState({
      searchShown: !this.state.searchShown
    });
  }

  renderSearch = () => {
    return this.state.searchShown 
      ? <input 
          type="text" 
          className="search-input" 
          placeholder="Search for a word..." />
      : null
  }

  render() {
    const tabindex = this.props.menuShown
      ? "-1"
      : "1"

    return (
      <header className="Header">
        <div className="flex-container">
          <HamburgerIcon toggleMenu={this.props.toggleMenu} tabindex={tabindex} />
          <Link to="/" tabindex={tabindex}>
            <h1>Haikuit<i className="fas fa-feather-alt"></i></h1>
          </Link>
          <SearchIcon toggleSearch={this.toggleSearch} tabindex={tabindex} />
        </div>
        {this.renderSearch()}
      </header>
    );
  }
}

Header.propTypes = {
  searchShown: PropTypes.bool
}

export default Header;