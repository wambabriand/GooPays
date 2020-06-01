import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch , Route , BrowserRouter} from 'react-router-dom';
import User from './components/user/User';
import Home from './components/home/Home';

function App() {
  return (
  <div>
    <BrowserRouter>
      <Switch>
        <Route path='/user'>   <User> </User></Route>
        <Route path='/'>  <Home> </Home> </Route>
      </Switch>
    </BrowserRouter>
  </div>
  );
}

export default App;
