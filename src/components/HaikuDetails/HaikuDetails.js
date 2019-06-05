import React, { Component } from 'react';
import { connect } from 'react-redux';
import HaikuForm from '../HaikuForm/HaikuForm';

export class HaikuDetails extends Component {
  render() {
    const id = parseInt(this.props.match.params.id);
    const haiku = this.props.haikus.find(haiku => {
      return haiku.id === id;
    });

    return (
      <section className="HaikuDetails">
        <h2>Edit Your Haiku</h2>
        <HaikuForm {...haiku} />
      </section>
    );
  }
}

export const mapStateToProps = (state) => ({
  haikus: state.haikus
});

export default connect(mapStateToProps)(HaikuDetails);
