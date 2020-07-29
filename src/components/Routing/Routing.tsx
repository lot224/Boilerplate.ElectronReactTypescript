import React, { useContext } from 'react';
import * as forms from '../../forms/forms';
import GlobalContext from '../../infrastructure/global.context';

function Routing() {
  const { global } = useContext(GlobalContext);
  
  switch (global.route) {
    case '/': return <forms.Home></forms.Home>;
    case '/about': return <forms.About></forms.About>

    default: {
      if (global.route !== '')
        console.log(`${global.route} is currently not mapped to anything. redirecting to home.`);
      return <forms.About></forms.About>;
    }
  }
}

export default Routing;