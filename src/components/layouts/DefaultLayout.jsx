import React from 'react';
import  Header  from '../organisms/Header';
import  Navigation  from '../organisms/Navigation';
import MainContainer from '../organisms/MainContainer';
import  Footer  from '../organisms/Footer';
import { SEO } from '../organisms/SEO';

export const DefaultLayout = () => (

    <>
    <SEO />
    <Header />
    <Navigation />
    <MainContainer /> 
    <Footer />
    </>
);
export default DefaultLayout;    