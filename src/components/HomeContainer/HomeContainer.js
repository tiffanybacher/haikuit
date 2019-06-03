import React, { Component } from 'react';
import Haiku from '../Haiku/Haiku';
import HaikuForm from '../HaikuForm/HaikuForm';

class HomeContainer extends Component {
  redirect = (path) => {
    this.props.history.push(path);
  }

  render() {
    return (
      <section className="HomeContainer">
        <div className="home-card">
          <h2>Your Lastest Haiku</h2>
          <Haiku />
        </div>
        <div className="home-card">
          <h2>Write a Haiku!</h2>
          <HaikuForm redirect={this.redirect}/>
        </div>
      </section>
    );
  }
}

export default HomeContainer;