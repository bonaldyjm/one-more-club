import React from "react";
import "./section.css";

function Section (props) {
    return (
        <React.Fragment>
            <section id="section-id"> 
            <img className="section-img-1" src="/assets/img/section-1.png"  alt="logo"/>
            <h3 className="elementor-image1-title">GANA ENERGÍA Y VITALIDAD</h3>
            <p className="elementor-image1-description">Camina, corre, salta... La vida está hecha para moverse.</p>
            <img className="section-img-2" src="/assets/img/section-2.png"  alt="logo"/>
            <h3 class="elementor-image2-title">POTENCIAL TU SALUD AL MÁXIMO</h3>
            <p class="elementor-image2-description">Cuidándote por dentro y por fuera</p>
            <img className="section-img-3" src="/assets/img/section-3.png"  alt="logo"/>
            <h3 class="elementor-image3-title">VUÉLVETE MÁS FUERTE QUE   NUNCA</h3>
            <p class="elementor-image3-description">La fuerza será el pilar de nuestro progreso</p>
            </section>
        </React.Fragment>
    );

}
















export default Section;