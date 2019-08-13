import React from 'react';
import { Link } from 'react-router-dom';

const Menu = (props) => {
  return (
    <section className="Menu">
      <nav className="Menu-sidebar">
        <div className="btn-holder">
          <button 
            className="Menu-close-btn"
            onClick={props.toggleMenu}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <h1 className="Menu-header">
          <Link to="/">Haikuit<i className="fas fa-feather-alt"></i></Link>
        </h1>
        <ul className="nav-list">
          <li onClick={props.toggleMenu}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={props.toggleMenu}>
            <Link to="/about">About</Link>
          </li>
          <li onClick={props.toggleMenu}>
            <Link to="/haikus">Your Haikus</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Menu;