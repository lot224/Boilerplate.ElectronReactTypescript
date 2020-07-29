import React from 'react';
import './About.scss';

function About() {

  return (
    <div className="About container-fluid">
      <div className="text-center text-uppercase"><h1>About</h1></div>
      <h4>This is a bare bones base electron application.</h4>
      <h5>Dependencies</h5>
      <ul>
        <li>Typescript: Javascript type-checking</li>
        <li>React: UI javascript framework</li>
        <li>Bootstrap: UI styling framework</li>
        <li>Bootswatch: Bootstrap theme framework</li>
        <li>Sass: CSS Framework</li>
        <li>Font-Awesome: Icon library</li>
      </ul>

      <h5>Features/Examples</h5>
      <ul>
        <li>Global Context</li>
        <li>Form Routing</li>
        <li>Communication from backend to frontend (ipcMain/ipcRenderer)</li>
      </ul>
    </div>
    
  )
}

export default About;