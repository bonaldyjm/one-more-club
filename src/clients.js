import React from "react";
import "./clients.css";
import Section from "./section";
function Clients (){
    return (
        <React.Fragment>
<section id="container-section-opiniones">
<h3 class="tittle-clients-page">QUÉ DICEN NUESTRO CLIENTES</h3>
<span className="comillas-cerradas" bis_skin_checked="1"/>

<video className="videoteca-cliente-1" controls></video>
<span className="comentario-cliente-1"> Con ellos es todo mucho más fácil. Estar con ellos es estar en EL EQUIPO GANADOR. </span>
<p class="nombre-clienta-1"> Virginia </p>
<video className="videoteca-cliente-2" controls></video>
<span className="comentario-cliente-2"> No es solo la dieta o el entrenamiento. El apoyo, la motivación, la cercanía... ES ABSOLUTAMENTE BRUTAL. </span>
<p class="nombre-clienta-2"> Lara </p>
</section>
</React.Fragment>
    );
}



export default Clients;