import React from "react";
import "./suscri.css"

function Suscri () {

    return (
<React.Fragment>
    <section id="container-suscri">
    <h4 className="h4-elementor-suscri">Suscríbete a nuestra lista para no perderte nada</h4>
    <h6 className="h6-elementor-suscri">¡Avisamos, no es una lista cualquiera, seguramente sea la lista de más valor del mundo fitness!</h6>
    <h5 className="h5-elementor-suscri">¿Estás preparado?</h5>
<label className="etiqueta-email-suscri">Direccion de Email*</label>
<input className="casilla-email-suscri" type="email"></input>
<label className="etiqueta-nombre-suscri" >Nombre*</label>
<input className="casilla-nombre-suscri" type="text"></input>
<label className="etiqueta-apellido-suscri" >Apellidos*</label>
<input className="casilla-apellido-suscri" type="text"></input>
<label className="form-check-label-suscri" for="invalidCheck2">Acepto recibir mails de OneMore Club y la <a className="politica-suscri">política de privacidad</a></label>
<input className="form-check-input-suscri" type="checkbox"></input>

    <button className="btn-btn-primary-suscri" type="submit">SUSCRIBIRME</button> 
</section>
 </React.Fragment>
    )
}
 export default Suscri;