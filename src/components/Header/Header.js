import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchWord } from '../../api/fetchWord';

export class Header extends Component {
  state = {
    searchShown: false,
    searchQuery: ''
  }

  toggleSearch = () => {
    this.setState({
      searchShown: !this.state.searchShown
    });
  }

  updateSearchQuery = (e) => {
    const { value } = e.target;

    this.setState({
      searchQuery: value
    });
  }

  submitSearch = (e) => {
    e.preventDefault();

    this.props.fetchWord(this.state.searchQuery);

    // this.props.setLoading(true);

    // fetchWord(this.state.searchQuery)
    //   .then(data => console.log(data))
    //   .then(() => this.props.setLoading(false))
    //   .catch(error => console.log('error:', error));
  }

  renderSearch = () => {
    return this.state.searchShown 
      ? <form onSubmit={this.submitSearch}>
          <input 
            type="text" 
            className="search-input" 
            placeholder="Search for a word..."
            onChange={this.updateSearchQuery} />
          <button className="search-btn">GO</button>
        </form>
      : null
  }

  render() {
    const tabindex = this.props.menuShown
      ? "-1"
      : "1"

    return (
      <header className="Header">
        <div className="flex-container">
          <button 
            className="hamburger-icon" 
            onClick={this.props.toggleMenu}
            tabIndex={this.tabindex}>
            <i className="fas fa-bars"></i>
          </button>
          <Link to="/" tabIndex={tabindex}>
            <h1>Haikuit<i className="fas fa-feather-alt"></i></h1>
          </Link>
          <button 
            className="search-icon" 
            onClick={this.toggleSearch}
            tabIndex={this.tabindex}>
            <i className="fas fa-search"></i>
          </button>
        </div>
        {this.renderSearch()}
      </header>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  fetchWord: (searchQuery) => dispatch(fetchWord(searchQuery))
});

export default connect(undefined, mapDispatchToProps)(Header);

Header.propTypes = {
  searchShown: PropTypes.bool,
  searchQuery: PropTypes.string
}