import React, { Component } from 'react';
import { connect } from 'react-redux';

export class HaikusContainer extends Component {
  render() {
    console.log(this.props);

    return (
      <section className="HaikusContainer">
        <h2>Haikus Container</h2>
      </section>
    );
  }
}

export const mapStateToProps = (state) => ({
  haikus: state.haikus
}); 

export default connect(mapStateToProps)(HaikusContainer);