import React, { Component } from 'react';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { fetchWord } from '../../apiCalls/fetchWord';

export class HaikuForm extends Component {
  state = {
    title: this.props.title || '',
    line1: this.props.line1 || '',
    line2: this.props.line2 || '',
    line3: this.props.line3 || '',
    line1Syllables: this.props.line1Syllables || 0,
    line2Syllables: this.props.line2Syllables || 0,
    line3Syllables: this.props.line3Syllables || 0,
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  }

  handleCheckBtn = (e) => {
    e.preventDefault();

    this.checkSyllables(1);
    this.checkSyllables(2);
    this.checkSyllables(3);
  }

  checkSyllables = (num) => {
    const line = this.findLine(num);
    const lineArray = line.split(' ').filter(word => word !== '');
    let lineCount = 0;

    lineArray.forEach(word => {
      const punctuationless = word.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g,"");
      const newWord = punctuationless.replace(/\s{2,}/g," ");

      this.props.fetchWord(newWord)
        .then(data => {
          if (!data) {
            lineCount = -1;
          } else if (data.syllables) {
            lineCount += data.syllables.count;
          } else {
            lineCount += 1;
          }

          const key = `line${num}Syllables`;

          this.setState({
            [key]: lineCount
          });
        });
    });
  }

  findLine = (num) => {
    let line;

    if (num === 1) {
      line = this.state.line1;
    } else if (num === 2) {
      line = this.state.line2;
    } else if (num === 3) {
      line = this.state.line3;
    }

    return line;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let id;

    if (this.props.path === '/haiku/:id/edit') {
      id = this.props.id;

      this.props.editHaiku({ ...this.state, id });
    } else {
      id = Date.now();

      this.props.addHaiku({ ...this.state, id });
    }

    this.props.redirect(`/haiku/${id}/saved`);
  }

  checkAllFields = () => {
    const { line1, line2, line3 } = this.state;
    let disabled;

    if (line1 && line2 && line3) {
      disabled = false;
    } else {
      disabled = true;
    }

    return disabled;
  }

  renderMsg = (num) => {
    const { line1Syllables, line2Syllables, line3Syllables } = this.state;
    let count;
    let message;

    if (num === 1) {
      count = line1Syllables;
    } else if (num === 2) {
      count = line2Syllables;
    } else if (num === 3) {
      count = line3Syllables;
    }

    if (count === -1) {
      message = 'Spelling Error';
    } else {
      message = `${count} syllables`;
    }

    return message;
  }

  renderDeleteBtn = () => {
    let btn;

    if (this.props.path === '/haiku/:id/edit') {
      btn = 
        <button 
          className="delete-btn"
          onClick={this.handleDelete}>
          Delete This Haiku
        </button>
    }

    return btn;
  }

  handleDelete = (e) => {
    e.preventDefault();

    const id = parseInt(this.props.id);

    this.props.deleteHaiku(id);

    this.setState({ 
      title: '*** THIS HAIKU WAS DELETED ***',
      line1: '',
      line2: '',
      line3: ''
    });

    setTimeout(() => this.props.redirect('/'), 3000);
  }

  render() {
    const { line1Syllables, line2Syllables, line3Syllables } = this.state;

    return (
      <form className="HaikuForm">
        <label htmlFor="title-input">Title</label>
        <input 
          type="text" 
          id="title-input"
          name="title"
          value={this.state.title}
          onChange={this.handleChange} />
        <label 
          htmlFor="line-1-input"
          className={line1Syllables === -1 || line1Syllables > 0 ? "hidden" : null}>
          Line 1 - 5 syllables
        </label>
        <label 
          htmlFor="line-1-input" 
          className={line1Syllables === 0 ? "hidden" : null}>
          <span className="syllable-label">{this.renderMsg(1)}</span>
        </label>
        <input 
          type="text" 
          id="line-1-input"
          name="line1"
          value={this.state.line1}
          onChange={this.handleChange} />
        <label 
          htmlFor="line-2-input"
          className={line2Syllables === -1 || line2Syllables > 0 ? "hidden" : null}>
          Line 2 - 7 syllables
        </label>
        <label 
          htmlFor="line-2-input" 
          className={line2Syllables === 0 ? "hidden" : null}>
          <span className="syllable-label">{this.renderMsg(2)}</span>
        </label>
        <input 
          type="text" 
          id="line-2-input"
          name="line2"
          value={this.state.line2}
          onChange={this.handleChange} />
        <label 
          htmlFor="line-3-input"
          className={line3Syllables === -1 || line3Syllables > 0 ? "hidden" : null}>
          Line 3 - 5 syllables
        </label>
        <label 
          htmlFor="line-3-input" 
          className={line3Syllables === 0 ? "hidden" : null}>
          <span className="syllable-label">{this.renderMsg(3)}</span>
        </label>
        <input 
          type="text" 
          id="line-3-input"
          name="line3"
          value={this.state.line3}
          onChange={this.handleChange} />
         <button 
          onClick={this.handleCheckBtn}
          className="HaikuForm-check">
          Check Syllables
        </button>
        <button 
          onClick={this.handleSubmit}
          className="HaikuForm-submit"
          disabled={this.checkAllFields()}>
          Save
       </button>
       {this.renderDeleteBtn()}
      </form>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  addHaiku: (haiku) => dispatch(actions.addHaiku(haiku)),
  editHaiku: (haiku) => dispatch(actions.editHaiku(haiku)),
  deleteHaiku: (id) => dispatch(actions.deleteHaiku(id)),
  fetchWord: (word) => dispatch(fetchWord(word))
});

export default connect(undefined, mapDispatchToProps)(HaikuForm);

HaikuForm.propTypes = {
  title: PropTypes.string,
  line1: PropTypes.string,
  line2: PropTypes.string,
  line3: PropTypes.string,
  line1Syllables: PropTypes.number,
  line2Syllables: PropTypes.number,
  line3Syllables: PropTypes.number,
  id: PropTypes.number
}