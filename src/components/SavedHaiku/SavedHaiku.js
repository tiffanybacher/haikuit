import React, { Component } from 'react';
import { connect } from 'react-redux';
import Haiku from '../Haiku/Haiku';

export class SavedHaiku extends Component {
  render() {
    const id = parseInt(this.props.match.params.id);
    const haiku = this.props.haikus.find(haiku => {
      return haiku.id === id;
    });

    return (
      <section className="SavedHaiku">
        <h2>Your Haiku is Saved!</h2>
        <Haiku { ...haiku } />
        <div className="btn-container">
          <button>Edit</button>
          <button>See All Haikus</button>
        </div>
      </section>
    );
  }
}

export const mapStoreToProps = (store) => ({
  haikus: store.haikus
});

export default connect(mapStoreToProps)(SavedHaiku);