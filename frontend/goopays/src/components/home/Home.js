import React from 'react';
import NavBar from './NavBar';
import FooterBar from './FooterBar';
import {Switch  , BrowserRouter, Route} from 'react-router-dom';
import Login from '../Login';
import Register from '../Register';
import About from './About';
import ContactUs from './ContactUs';
import Partner from './Partener';



function Home (){
    return (<div> 
         <BrowserRouter>
            <NavBar></NavBar>
            <Switch>  
                <Route path='/login'>     <Login> </Login>             </Route>
                <Route path='/register'>  <Register> </Register>       </Route>
                <Route path='/apropos'>     <About> </About>           </Route>
                <Route path='/conatcts'>  <ContactUs> </ContactUs>     </Route>
                <Route path='/partners'>  <Partner> </Partner>     </Route>
                <Route path='/'>   <Login> </Login>                    </Route>
            </Switch>
            <FooterBar></FooterBar>
        </BrowserRouter>
    </div>);
}

export default Home;