import React, { Component } from 'react';
import { connect } from 'react-redux';
import HaikuForm from '../HaikuForm/HaikuForm';

export class EditHaiku extends Component {
  redirect = (path) => {
    this.props.history.push(path)
  }

  render() {
    console.log(this.props)
    const id = parseInt(this.props.match.params.id);
    const haiku = this.props.haikus.find(haiku => {
      return haiku.id === id;
    });

    return (
      <section className="EditHaiku">
        <h2>Edit Your Haiku</h2>
        <HaikuForm 
          {...haiku} 
          path={this.props.match.path}
          redirect={this.redirect} />
      </section>
    );
  }
}

export const mapStateToProps = (state) => ({
  haikus: state.haikus
});

export default connect(mapStateToProps)(EditHaiku);
