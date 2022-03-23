import React from "react";
import "./cards.css"

function Cards(props) {
return (
<React.Fragment>
<section id="container-card">
<h3 className="elementor-heading-title-card">NUESTRO MÉTODO</h3>
<div className="card-mb-4" id="box-grid-card">


      <img src="/assets/img/card-images-1.jpg" className="img-fluid" alt="..."/>
        <h2 className="card-title-card">EL ENTRENAMIENTO QUE TE HARÁ MEJORAR</h2>
<p className="card-text-card">
        Diseñaremos una entrenamiento totalmente personalizado y adaptado al material que tengas disponible.
         ¿Gimnasio, bandas, material? Da igual, ¡ES POSIBLE!
        </p>
  </div>

  <div className="card-mb-4-2" id="box-grid-card-2">

{/* segunda tarjeta */}

<img src="/assets/img/card-images-2.jpg" className="img-fluid-2" alt="..."/>
  <h2 className="card-title-card-2">QUE NO TE CANSES DE COMER SIEMPRE LO MISMO</h2>
<p className="card-text-card-2">
Usaremos una app móvil donde tendrás todo tu menú disponible,
formados por siete menús semanales y en los que tendrás varias alternativas por comida.
  </p>
</div>

{/* tercera tarjeta */}


<div className="card-mb-4-3" id="box-grid-card-3">


<img src="/assets/img/card-images-3.jpg" className="img-fluid-3" alt="..."/>
  <h2 className="card-title-card-3">NO IRÁS SOLO EN NINGÚN MOMENTO, TE ACOMPAÑAMOS 100%</h2>
<p className="card-text-card-3">
Tendremos revisiones vÍa mail donde no solo analizaremos los resultados físicos, 
sino también los internos. Cómo te sientes, qué tal te has adaptado al plan,
 has tenido algún problema que te ha dificultado realizar el plan… Somos personas y trabajamos con personas.
  </p>
</div>


</section>

</React.Fragment>
);
}

export default Cards;