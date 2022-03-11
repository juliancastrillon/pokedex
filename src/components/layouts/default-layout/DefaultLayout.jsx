import React from 'react';
import  Header  from '../../organisms/header/Header';
import  Navigation  from '../../organisms/Navigation/Navigation';
import MainContainer from '../../organisms/main-container/MainContainer';
import  Footer  from '../../organisms/footer/Footer';
import  SEO  from '../../organisms/seo/SEO';
import '../../../assets/css/app.css'

const DefaultLayout = (props) => (

    <>
    <SEO title={props.title} />
    <Header />
    <Navigation />
    <MainContainer > {props.children} </MainContainer> 
    <Footer />
    </>
);
export default DefaultLayout;    