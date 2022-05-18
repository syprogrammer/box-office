import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navs from './components/Navs';
import Home from './pages/Home';
import Starred from './pages/Starred';

function App() {
  return (
    <div>
      <Switch>
      
          <Home />
          <Starred />
        

        <Route>
          <div>Not found</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
