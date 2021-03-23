import React, { Fragment } from 'react';
import './index.css';
import Hero from './components/Hero';
import Features from './components/Features';

const App = () => (
//Fragment is temporary before setting up router
  <Fragment>
    <h1 className="text-red-900 text-6xl">Hello World</h1>
    <div>
      <p className="text-blue-900">Testing text for tailwindCSS</p>
      <Hero/>
      <Features/>
    </div>
  </Fragment>
);

export default App;