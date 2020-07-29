import React from 'react';
import './Home.scss';
import logo from '../../logo.svg';

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <p>Electron - React App</p>
      </header>
    </div>
  )
}

export default Home;