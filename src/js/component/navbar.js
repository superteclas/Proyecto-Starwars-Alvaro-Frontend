import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3" style={{width: '100%'}}> 
			<img src="https://1000logos.net/wp-content/uploads/2017/06/Star-Wars-Logo-1.png" alt="Logo" className="navbar-brand ml-0 h1" style={{ width: '7%', marginLeft: '7em' }} />
			<div class="dropdown ml-auto">
  <a class="btn btn-primary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown link
  </a>

  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
		</nav>
	);
};
