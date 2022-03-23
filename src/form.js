import React from "react";
import "./form.css";
function Form(props) {
    return (
        <form id="form">
<img className="img2" src="/assets/img/calculator.png"  alt="logo"/>
<h5 className="tittle">¡ÚNETE A NUESTRA NEWSLETTER Y CONSIGUE TU CALCULADORA DE       CALORÍAS        GRATIS!</h5>
<label className="etiqueta-email">Direccion de Email*</label>
<input className="casilla-email" type="email"></input>
<label className="etiqueta-nombre" >Nombre*</label>
<input className="casilla-nombre" type="text"></input>
<label className="etiqueta-apellido" >Apellidos*</label>
<input className="casilla-apellido" type="text"></input>
<label className="form-check-label" for="invalidCheck2">Acepto recibir mails de OneMore Club y la <a className="politica">política de privacidad</a></label>
<input className="form-check-input" type="checkbox"></input>

    <button className="btn-btn-primary" type="submit">DESCARGAR</button>
    <img className="img3" src="/assets/img/descubre.png"></img>
        </form>
    );
}
export default Form;