import React, { Component } from 'react';

class BackBtn extends Component {
  render() {
    return (
      <button 
        className="back-btn" 
        onClick={this.props.goBack}>
        Back
      </button>
    );
  }
}

export default BackBtn;
