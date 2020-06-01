import React from 'react';
import { NavLink } from 'react-router-dom';

function FooterBar (){
    return (<div>
        <NavLink to='/register' className="nav-link"> Register <span className="sr-only">(current)</span> </NavLink>
      icic footer barrrrr
    </div>);
}

export default FooterBar;