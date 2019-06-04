import React, { Component } from 'react';
import BackBtn from '../BackBtn/BackBtn';

class About extends Component {
  goBack = () => {
    this.props.history.goBack();
  }

  render() {
    return(
      <section className="About">
        <div>
          <BackBtn goBack={this.goBack} />
          <h2>ABOUT</h2>
          <p>
            <b>Welcome to Haikuit!</b>
          </p>
          <br />
          <p>
            Here at Haikuit, we know that it is natural to crave a creative outlet, but not always easy to find one that does not take somewhat of an investment in time and cash. We are here in hopes to spread the love for haiku. It is a free and easy way to let that creativity free!
          </p>
          <br />
          <p>
            Haiku is a traditional form of Japanese poetry. They consist of 3 lines. The content can anything! However, the first line is always 5 syllables, the second is 7 syllables, and the third is 5 syllables again. Haikus also rarely ryhyme.
          </p>
          <br />
          <p>Use Haikuit to easily keep track of syllables and to save all your haikus! Happy haikuing!</p>
        </div>
      </section>
    );
  }
}

export default About;