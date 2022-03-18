import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import "./NavItems.css";


const NavItems = (props) => {

    /**
     * Build navigation items for navigation
     * @param {{text: string, target: string}} value  
     * @param {number} index 
     * @returns {JSX.Element}
     */

  const buildItem = (value, index) => (
      <Link className="m-nav-items__item" to={value.target} key={index}> {value.text}</Link>
    );


      /**
     * Build navigation items for navbarv
     * @param {{text: string, target: string}{}}      items  
     * @returns {JSX.Element}
     */

    const buildItems = () => (props.items ? props.items.map(buildItem) : <></>);
    return <div className="m-nav-items">{buildItems()}</div>;
};

NavItems.props = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      targrt:PropTypes.string,
    })
  ),
};



export default NavItems;
