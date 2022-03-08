import React from 'react';
import  Header  from '../organisms/Header';
import  Navigation  from '../organisms/Navigation/Navigation';
import MainContainer from '../organisms/MainContainer';
import  Footer  from '../organisms/Footer';
import { SEO } from '../organisms/SEO';

export const DefaultLayout = (props) => (

    <>
    <SEO title={props.title} />
    <Header />
    <Navigation />
    <MainContainer > {props.children} </MainContainer> 
    <Footer />
    </>
);
export default DefaultLayout;    