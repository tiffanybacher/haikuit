import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import HomeContainer from '../HomeContainer/HomeContainer';

class App extends Component {
  state = {
    menuShown: false
  }

  toggleMenu = () => {
    this.setState({
      menuShown: !this.state.menuShown
    });
  }

  renderMenu = () => {
    return this.state.menuShown 
      ? <Menu toggleMenu={this.toggleMenu} /> 
      : null
  }

  render() {
    return (
        <div className="App">
          {this.renderMenu()}
          <Header toggleMenu={this.toggleMenu} />
          <Route path="/" component={HomeContainer} />
        </div>
    );
  }
}

export default App;

App.propTypes = {
  menuShown: PropTypes.bool
}
