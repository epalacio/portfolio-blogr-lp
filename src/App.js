import React, { Fragment } from 'react';
import './index.css';
import Infrastructure from './components/Infrastructure'
import Hero from './components/Hero';
import Features from './components/Features';
import Future from './components/Future'
import Footer from './components/Footer'

const App = () => (
//Fragment is temporary before setting up router
  <Fragment>
    <h1 className="text-red-900 text-tester">Blogr</h1>
      <Hero/>
      <Future/>
      <Infrastructure/>
      <Features/>
      <Footer/>
  </Fragment>
);

export default App;