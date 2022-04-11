import React from 'react';
import DefaultLayout from '../../layouts/default-layout/DefaultLayout';
import "./About.css"
const About = () => (

    <DefaultLayout title='About'>
        <h1 className='title-about' >About page</h1>
        <p className='p-about' >Esta aplicacion web es creada con el fin de verificar los detalles de los pokemones como su altura, peso poder enrte otros detalles</p>
        
    </DefaultLayout>
);

export default About;