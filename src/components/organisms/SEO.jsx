import React from "react";
import {Helmet} from 'react-helmet'


export const SEO = (props) => {
 let title = props.title? `Pokedex - ${props.title}` : 'pokedex' ; 
return (
<Helmet>
    
    < meta charset='UTF-8'/>
    <title>{title}</title>
    <link rel='favicon' href='/favicon.ico' />

</Helmet>
   
 );   
};

export default SEO;