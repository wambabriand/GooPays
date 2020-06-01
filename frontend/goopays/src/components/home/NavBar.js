import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar (){
    return (<div>
<nav className="navbar navbar-expand-lg navbar-dark  bg-success" style={{height:"100px"}}>
  <a className="navbar-brand" href="/">Je Go OPays</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <NavLink to='register'className="nav-link"> Register  </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to='conatcts' className="nav-link"> Nous Contacter </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to='apropos' className="nav-link"> A Propos </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to='partners' className="nav-link"> Nos partenaires </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to='register' className="nav-link"> Register </NavLink>
      </li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li>
        <NavLink to='register' className="nav-link"> Register </NavLink>
      </li>
      <li>
        <NavLink to='login' className="nav-link"> Login  </NavLink>
      </li>
    </ul>

  </div>
</nav>
    </div>);
}

export default NavBar;

