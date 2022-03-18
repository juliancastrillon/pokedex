import React from "react";
import NavBrand from "../../Molecules/nav-brand/NavBrand";
import NavItems from "../../Molecules/nav-items/NavItems";
import "./Navigation.css";
import {navItems} from "../../../assets/js/navItems";


export const Navigation = () => (

    <nav className="o-navigation" >
        <NavBrand />
        <NavItems items={navItems} />
    </nav>
);
export default Navigation;    

