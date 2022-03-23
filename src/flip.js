import React from "react";
import "./flip.css"

function Flip () {

    return (
<React.Fragment>
    <section id="container-section-flip">
    <div className="box-flip-container" id="box-flip-container">
    <p className="p__box-flip-1"> Únete a nuestra comunidad de casi 50.000 personas </p>
    </div>
    <div className="box-flip-container-2" id="box-flip-container-2">
    <p className="p__box-flip-2"> Nuestro lado más personal en Telegram </p>
    </div>
<div className="container__card-flip">

    <div className="card__father">
        <div className="card">
            <div className="card__front">
            <div className="bg"></div>
            <div className="body__card_front">
            <h1 className="pp-flipbox-heading"> ¡Juntos somos OneMore! </h1>
            <p className="parrafo_flip">¡Juntos somos Workouts by OneMore! Creamos esta comunidad con el objetivo de acercar el fitness con rigor y sentido común a todos aquellos que, aún no disponiendo de grandes medios económicos, quisieran asegurarse la obtención de un material de calidad. Por eso nuestros programas no tienen rival cuando hablamos de calidad- precio. No se puede dar más por menos, pero nosotros lo hacemos. ¿Por qué podemos hacer esto? Fácil, porque no queremos amasar una fortuna con este proyecto. Ambos tenemos otros medios a través de los cuales nos ganamos la vida honradamente, y ello nos permite manejar precios muy bajos que permitan a todo el mundo optar a hacer a las cosas bien en este mundillo donde hay tanta información que uno ya no sabe qué es cierto y qué no. En Workouts by OneMore queremos ayudar a alcanzar tus metas, pero no queremos que para ello tengas que tirar la casa por la ventana. ¡Entrena y mejora como nunca antes, ahora ya no hay excusa alguna!</p>
             </div>
              </div>
        <div className="card__back">
            <div className="body__card_back">
            <h1 className="pp-flipbox-back"> ¿PREPARADO PARA UNIRTE A NUESTRO EQUIPO? </h1>
            </div>
        </div>
    </div>
    </div>
    </div>


</section>
 </React.Fragment>
    );
}

export default Flip;