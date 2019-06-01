import React, { Component } from 'react';

class Menu extends Component {
  render() {
    return (
      <section className="Menu">
        <nav className="Menu-sidebar">
          <button onClick={this.props.toggleMenu}>
            <i className="fas fa-times"></i>
          </button>
          <li>About</li>
          <li>Your Haikus</li>
        </nav>
      </section>
    );
  }
}

export default Menu;