import React, { Component } from 'react';
import { connect } from 'react-redux';
import BackBtn from '../BackBtn/BackBtn';

export class HaikuDetails extends Component {
  render() {
    return (
      <section>
        <h2>Haiku Details</h2>
      </section>
    );
  }
}

export const mapStateToProps = (state) => ({
  haikus: state.haikus
});

export default connect(mapStateToProps)(HaikuDetails);
