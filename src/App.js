import React, { Fragment } from 'react';
import './index.css';
import Nav from './components/Nav';
import Infrastructure from './components/Infrastructure'
import Hero from './components/Hero';
import Features from './components/Features';
import Future from './components/Future'

const App = () => (
//Fragment is temporary before setting up router
  <Fragment>
    <h1 className="text-red-900 text-tester">Hello World</h1>
    <div>
      <p className="text-regalBlue">Testing text for tailwindCSS</p>
      <p>Proving connection with nodeJs backend</p>
      <Nav/>
      <Infrastructure/>
      <Hero/>
      <Future/>
      <Features/>
    </div>
  </Fragment>
);

export default App;