import React from "react";
import "./planchoise.css";

function PlanChoise () {
    return (
<React.Fragment>
<section id="Container-Plan-Choise">
<h3 className="elementor-heading-title-Plan-Choise">ELIGE TU PLAN</h3>
<p className="elementor-heading-p-Plan-Choise">Escoge la opción que más se adapte a tus necesidades y circunstancias actuales</p>

<div className="card-plan-choise-select" id="card-plan-choise-select">
<h3 className="h3-tittle-card">PLAN COMPLETO</h3>
<h2 className="h2-tittle-card">70€</h2>
<p className="p-tittle-card">/MES</p>
<hr className="hr-1-plan"/>
<p className="elementor-heading-title-p-plan-choise">Entrenamiento personalizado</p>
<hr className="hr-2-plan"/>
<p className="elementor-heading-title-p-plan-choise-b">Dieta en app móvil</p>
<hr className="hr-3-plan"/>
<p className="elementor-heading-title-p-plan-choise-c">Seguimiento semanal vía mail</p>
<hr className="hr-4-plan"/>
<p className="elementor-heading-title-p-plan-choise-d">Resolución de dudas</p>
<button className="button-card-1-choise-plan" type="submit">CONTRATAR </button>
</div>

<div className="card-plan-choise-select-2" id="card-plan-choise-select-2">
<h3 className="h3-tittle-card-2">PLAN AHORRO</h3>
<h2 className="h2-tittle-card-2">135€</h2>
<p className="p-tittle-card-2">/TRIMESTRE</p>
<hr className="hr-1-plan-2"/>
<p className="elementor-heading-title-p-plan-choise-2">Entrenamiento personalizado</p>
<hr className="hr-2-plan-2"/>
<p className="elementor-heading-title-p-plan-choise-b-2">Dieta en app móvil</p>
<hr className="hr-3-plan-2"/>
<p className="elementor-heading-title-p-plan-choise-c-2">Seguimiento MENSUAL</p>
<hr className="hr-4-plan-2"/>
<p className="elementor-heading-title-p-plan-choise-d-2">Resolución de dudas</p>
<button className="button-card-1-choise-plan-2" type="submit">CONTRATAR </button>
</div>

<div className="card-plan-choise-select-3" id="card-plan-choise-select-3">
<h3 className="h3-tittle-card-3 ">PLAN NUTRICIONAL</h3>
<h2 className="h2-tittle-card-3">50€</h2>
<p className="p-tittle-card-3">/MES</p>
<hr className="hr-1-plan-3"/>
<p className="elementor-heading-title-p-plan-choise-3">Dieta en app móvil</p>
<hr className="hr-2-plan-3"/>
<p className="elementor-heading-title-p-plan-choise-b-3">Seguimiento semanal vía mail</p>
<hr className="hr-3-plan-3"/>
<p className="elementor-heading-title-p-plan-choise-c-3">Resolución de dudas</p>
{/* <hr className="hr-4-plan-3"/>
<p className="elementor-heading-title-p-plan-choise-d-3">Resolución de dudas</p> */}
<button className="button-card-1-choise-plan-3" type="submit">CONTRATAR </button>
</div>

<h3 className="h3-tittle-more-options">TENEMOS MÁS OPCIONES</h3>

<img className="img-plan-deportivo-1" src="./assets/img/planes-deportivos-1.jpg"/>
<span className="span-asesoramientos-1">Asesoramientos</span>
<h2 className="h2-asesoramientos-1">GESTIÓN BASIC TRIMESTRAL</h2>
<span className="span-precios-1">€50.00</span>
<p className="p-asesoramientos-1">Impuestos incluidos</p>
<img className="img-plan-deportivo-2" src="./assets/img/planes-deportivos-2.jpg"/>
<span className="span-asesoramientos-2">Asesoramientos</span>
<h2 className="h2-asesoramientos-2">MEDIA GESTIÓN TRIMESTRAL</h2>
<span className="span-precios-2">€125.00</span>
<p className="p-asesoramientos-2">Impuestos incluidos</p>
<img className="img-plan-deportivo-3" src="./assets/img/planes-deportivos-3.jpg"/>
<span className="span-asesoramientos-3">Asesoramientos</span>
<h2 className="h2-asesoramientos-3">GESTIÓN COMPLETA TRIMESTRAL</h2>
<span className="span-precios-3">€150.00</span>
<p className="p-asesoramientos-3">Impuestos incluidos</p>
€
</section>

</React.Fragment>
    );
}







export default PlanChoise;