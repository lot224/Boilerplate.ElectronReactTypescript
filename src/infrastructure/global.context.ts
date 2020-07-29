import React from 'react';
import Global from '../shared/dto/global';

const GlobalContext = React.createContext({
  global: new Global(),
  setGlobal: (global: Global) => { }
});

export default GlobalContext;