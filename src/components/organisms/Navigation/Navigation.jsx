import React from "react";
import NavBrand from "../../Molecules/nav-brand/NavBrand";
import NavItem from "../../Molecules/nav-items/NavItems";
import "./Navigation.css";
import {navItems}from "../../../assets/js/navItems";


export const Navigation = () => (

    <nav className="o-navigation" >
        <NavBrand />
        <navItems items={navItems} />
    </nav>
);
export default Navigation;    

