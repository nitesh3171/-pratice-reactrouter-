import React from 'react';
import {Link} from 'react-router-dom';
import './Interface.css';


function Navbars(){
    return (
        <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Food Delivery</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        {/* <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> */}
        <Link  class="nav-link" to="/home">Home</Link>
      </li>
      <li class="nav-item">
        {/* <a class="nav-link" href="#">About</a> */}
        <Link  class="nav-link" to="/about" >About</Link>
      </li>
      <li class="nav-item dropdown">
        {/* <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a> */}
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        {/* <a class="nav-link disabled" href="#">Contact</a> */}
        <Link class="nav-link disabled" to="/contact">Contact</Link> 
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
    );
}

export default Navbars;