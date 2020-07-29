import React, { Component } from 'react';
import GlobalContext from '../../infrastructure/global.context';

import channels from '../../shared/endpoints';
const { ipcRenderer } = window;


class Header extends Component {

  static contextType = GlobalContext

  state: {
    appName: string,
    appVersion: string
  }

  constructor(props:any) {
    super(props);

    this.state = {
      appName: '',
      appVersion: ''
    };

    ipcRenderer.send(channels.APP_INFO);
    ipcRenderer.on(channels.APP_INFO, (event: any, arg: any) => {
      ipcRenderer.removeAllListeners(channels.APP_INFO);
      const { appName, appVersion } = arg;
      this.setState({ appName, appVersion });
    })
  }

  render() {
    const { global, setGlobal } = this.context;

    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="/">{this.state.appName} v{this.state.appVersion}</a>

        <div className="ml-2 mr-auto btn-group">
          <button className="btn btn-sm btn-secondary" onClick={() => setGlobal({ route: '/' })}>Home</button>
          <button className="btn btn-sm btn-secondary" onClick={() => setGlobal({ route: '/about' })}>About</button>
        </div>

        <div className="navbar-nav my-2 my-lg-0">
          <div className="btn-group mr-3">
            Language: {global.language}
          </div>
        </div>
      </nav>
    )
  };
}

export default Header;