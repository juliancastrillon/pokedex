import React from "react";
import DefaultLayout from "../../layouts/default-layout/DefaultLayout";
import errorimage from "../../../assets/img/error.png";
import "./NotFound.css"
const NoteFound = () => (

    <DefaultLayout title='404' >
        <img className="imagenotfount" src={errorimage} alt="pagina no funciona"/>
    </DefaultLayout>












);


export default NoteFound;