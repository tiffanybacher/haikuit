import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import HomeContainer from '../HomeContainer/HomeContainer';
import About from '../About/About';
import HaikusContainer from '../HaikusContainer/HaikusContainer';
import EditHaiku from '../EditHaiku/EditHaiku';
import SavedHaiku from '../SavedHaiku/SavedHaiku';
import Page404 from '../Page404/Page404';

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
          <Header 
            toggleMenu={this.toggleMenu} 
            menuShown={this.state.menuShown} />
          <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/about" component={About} />
          <Route exact path="/haikus" component={HaikusContainer} />
          <Route exact path="/haiku/:id/edit" component={EditHaiku} />
          <Route exact path="/haiku/:id/saved" component={SavedHaiku} />
          <Route component={Page404} />
          </Switch>
        </div>
    );
  }
}

export default App;

App.propTypes = {
  menuShown: PropTypes.bool
}
