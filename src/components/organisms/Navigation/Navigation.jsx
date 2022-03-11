import React from "react";
import NavBrand from "../../Molecules/NavBar/NavBrand";
import NavItem from "../../Molecules/nav-items/NavItems";
import "./Navigation.css";


export const Navigation = () => (

    <nav className="o-navigation" >
        <NavBrand />
        <NavItem />
    </nav>
);
export default Navigation;    

