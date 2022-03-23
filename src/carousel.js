import React from "react";
import "./carousel.css";

//  const slider = document.querySelector("#slider");
//  let sliderSection =  document.querySelectorAll(".slider__section");
//  let sliderSectionLast =  sliderSection[sliderSection.length -1];

//  const btnLeft = document.querySelector("#btn-left");
//  const btnRight = document.querySelector("#btn-right");

//  slider.insertAdjacentElement('afterbegin', sliderSectionLast);

//  function next () {
//      let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
//      slider.style.marginLeft = "-200%";
//      slider.style.transition = "all 0.5s";
//      setTimeout(() => {
//         slider.style.transition = "none";
//          slider.insertAdjacentElement('beforeend', sliderSectionFirst);
//       }, 500);
//       btnRight.addEventListener('click', () => { next();
//       });
//  }
//  function prev () {
//     let sliderSection = document.querySelectorAll(".slider__section");
//     let sliderSectionLast =  sliderSection[sliderSection.length -1];
//     slider.style.marginLeft = "0";
//     slider.style.transition = "all 0.5s";
//     setTimeout(() => {
//        slider.style.transition = "none";
//         slider.insertAdjacentElement('afterbegin', sliderSectionLast);
//         slider.style.marginLeft = "-100%";
//      }, 500);
//      btnLeft.addEventListener('click', () => { next();
//      });
// }
function Carousel () {

    return (
<React.Fragment>
<h3 class="h3-elementor-carousel">ÚNETE A UNA COMUNIDAD DE ÉXITO</h3>
<div className="container-slider" id="body-body">
  <div className="slider" id="slider">
    <div className="slider__section">
<img className="slider__img" src="assets/img/transformacion-fisica-1.jpg"/>
    </div>
    <div className="slider__section">
<img className="slider__img" src="assets/img/transformacion-fisica-2.jpg"/>
    </div>
    <div className="slider__section">
<img className="slider__img" src="assets/img/transformacion-fisica-3.jpg"/>
    </div>
  </div>
  <div  className="slider__btn slider__btn--left"> {"<"}</div>
  /* <div  className="slider__btn slider__btn--right"> {">"}</div> 
</div>
 </React.Fragment>
    );
}

export default Carousel;