import React from 'react';

import Global from '../../shared/dto/global';
import GlobalContext from '../../infrastructure/global.context';
import Header from '../Header/Header';
import Routing from '../Routing/Routing';

function App() {
  const [global, setGlobal] = React.useReducer((state: Global, newValue: any) => ({ ...state, ...newValue }), new Global());
  const globalState = { global, setGlobal };

  return (
    <div className="App">
      <GlobalContext.Provider value={globalState}>
        <Header></Header>
        <Routing></Routing>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
