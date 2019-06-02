import React from 'react';
import HaikuForm from '../HaikuForm/HaikuForm';

function HomeContainer() {
  return (
    <section className="HomeContainer">
      <div className="home-card">
        <h2>Write a Haiku!</h2>
        <HaikuForm />
      </div>
    </section>
  );
}

export default HomeContainer;