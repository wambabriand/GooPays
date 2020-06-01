import React from 'react';
import {Switch , Route , BrowserRouter} from 'react-router-dom';
import Login from './Login';
import Register from './Register';


function ComponentRouter (){
    return (<div>
        <BrowserRouter>
            <Switch>
                <Route path='/login'>  <Login> </Login> </Route>
                <Route path='/register'>  <Register> </Register> </Route>
            </Switch>
        </BrowserRouter>
    </div>);
}

export default ComponentRouter;