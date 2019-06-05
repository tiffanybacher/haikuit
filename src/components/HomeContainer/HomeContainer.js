import React, { Component } from 'react';
import { connect } from 'react-redux';
import Haiku from '../Haiku/Haiku';
import HaikuForm from '../HaikuForm/HaikuForm';

export class HomeContainer extends Component {
  redirect = (path) => {
    this.props.history.push(path);
  }

  renderLatestHaiku = () => {
    const latestHaiku = this.props.haikus.pop();
    let haiku;
    
    if (latestHaiku) {
      haiku = <Haiku {...latestHaiku} />
    } else {
      haiku = <Haiku />
    }

    return haiku;
  }

  render() {
    return (
      <section className="HomeContainer">
        <div className="home-card">
          <h2>Your Lastest Haiku</h2>
          {this.renderLatestHaiku()}
        </div>
        <div className="home-card">
          <h2>Write a Haiku!</h2>
          <HaikuForm redirect={this.redirect}/>
        </div>
      </section>
    );
  }
}

export const mapStateToProps = (state) => ({
  haikus: state.haikus
});

export default connect(mapStateToProps)(HomeContainer);