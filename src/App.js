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
    <h1 className="text-red-900 text-6xl">Hello World</h1>
    <div>
      <p className="text-blue-900">Testing text for tailwindCSS</p>
      <p>Proving connection with nodeJs backend</p>
      <ul>
        <li>Element1</li>
        <li>Element2</li>
        <li>Element3</li>
        <li>Element4</li>
        <li>Element5</li>
        <li>Element6</li>
        <li>Element7</li>
        <li>Element8</li>
        <li>Element9</li>
        <li>Element10</li>
      </ul>
      <Nav/>
      <Infrastructure/>
      <Hero/>
      <Future/>
      <Features/>
    </div>
  </Fragment>
);

export default App;