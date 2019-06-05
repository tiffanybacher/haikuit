import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchWord } from '../../apiCalls/fetchWord';
import WordResult from '../WordResult/WordResult';

export class Header extends Component {
  state = {
    searchShown: false,
    searchQuery: '',
    resultShown: false,
    currentResult: null
  }

  toggleSearch = () => {
    this.setState({
      searchShown: !this.state.searchShown,
      searchQuery: '',
      resultShown: !this.state.resultShown,
      currentResult: null
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

   this.props.fetchWord(this.state.searchQuery)
    .then(data => this.setState({
      currentResult: data,
      resultShown: true
    }));
  }

  handleClear = () => {
    this.setState({
      searchQuery: '',
      currentResult: null
    });
  }

  renderSearch = () => {
    return this.state.searchShown 
      ? <div className="search-bar">
          <form onSubmit={this.submitSearch}>
            <input 
              type="text" 
              className="search-input" 
              placeholder="Search for a word..."
              value={this.state.searchQuery}
              onChange={this.updateSearchQuery} />
          </form>
          <button onClick={this.handleClear} className="search-btn">
            <i className="fas fa-times"></i>
          </button>
        </div>
      : null;
  }

  renderResult = () => {
    return this.state.currentResult && this.state.resultShown && this.state.searchShown
      ? <WordResult {...this.state.currentResult} />
      : null;
  }

  render() {
    const tabindex = this.props.menuShown
      ? "-1"
      : "1"

    return (
      <div>
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
        {this.renderResult()}
      </header>
        
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  fetchWord: (searchQuery) => dispatch(fetchWord(searchQuery))
});

export default connect(undefined, mapDispatchToProps)(Header);

Header.propTypes = {
  searchShown: PropTypes.bool,
  searchQuery: PropTypes.string,
  resultShown: PropTypes.bool,
  currentResult: PropTypes.object
}