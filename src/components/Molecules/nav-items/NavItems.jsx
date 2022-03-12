import React from "react";
import { Link } from "react-router-dom";
import './NavItems.css';

const NavItem = () => (
    <div className="m-nav-items" >
        <Link to='/about' className="m-nav-items__item"  > Acerca de </Link>
    </div>
);


export default NavItem;