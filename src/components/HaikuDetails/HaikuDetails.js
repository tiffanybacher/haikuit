import React, { Component } from 'react';
import { connect } from 'react-redux';

export class HaikuDetails extends Component {
  render() {
    console.log(this.props.haikus);

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
