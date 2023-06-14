import React from 'react';

import './App.css';
import { Navbar } from './components';
import { AboutUs, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Laurels />
    <Intro />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
