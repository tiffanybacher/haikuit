import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Menu extends Component {
  render() {
    return (
      <section className="Menu">
        <nav className="Menu-sidebar">
          <button 
            className="Menu-close-btn"
            onClick={this.props.toggleMenu}>
            <i className="fas fa-times"></i>
          </button>
          <ul className="nav-list">
            <li onClick={this.props.toggleMenu}>
              <NavLink to="/">Home</NavLink>
            </li>
            <li onClick={this.props.toggleMenu}>
              <NavLink to="/about">About</NavLink>
            </li>
            <li onClick={this.props.toggleMenu}>
              <NavLink to="/haikus">Your Haikus</NavLink>
            </li>
          </ul>
        </nav>
      </section>
    );
  }
}

export default Menu;