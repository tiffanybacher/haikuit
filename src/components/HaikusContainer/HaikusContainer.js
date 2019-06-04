import React, { Component } from 'react';
import { connect } from 'react-redux';

export class HaikusContainer extends Component {
  render() {
    console.log(this.props);

    return (
      <section className="HaikusContainer">
        <p>HAIKUS CONTAINER</p>
      </section>
    );
  }
}

export const mapStateToProps = (state) => {
  console.log(state);
  return { haikus: state.haikus }
} 
// ({
//   haikus: state.haikus
// });

export default connect(mapStateToProps)(HaikusContainer);