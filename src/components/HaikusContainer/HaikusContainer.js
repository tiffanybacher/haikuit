import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Haiku from '../Haiku/Haiku';
import BackBtn from '../BackBtn/BackBtn';

export class HaikusContainer extends Component {
  renderHaikuCards = () => {
    let haikuCards;
    const { haikus } = this.props;

    if (haikus.length) {
      haikuCards = haikus.map(haiku => {
        return (
          <Link to={`/haiku/${haiku.id}/edit`} key={haiku.id}>
            <Haiku {...haiku} key={haiku.id} />
          </Link>
        );
      });
    } else {
      haikuCards = <Haiku />
    }

    return haikuCards;
  }

  render() {
    return (
      <section className="HaikusContainer">
        <div className="haikus-header">
          <BackBtn goBack={this.props.history.goBack} />
          <h2>YOUR HAIKUS</h2>
        </div>
        {this.renderHaikuCards()}
      </section>
    );
  }
}

export const mapStateToProps = (state) => ({
  haikus: state.haikus
}); 

export default connect(mapStateToProps)(HaikusContainer);