import React from "react";
import "./navbar.css";
function Navbar(props) {
    return (
      <React.Fragment>
       <nav id="navbarNav">
        <img className="img" src="/assets/img/one-more-club.png"  alt="logo"/>
           <li className="nav-item1">
             <a className="nav-link1" href="#">ASESORAMIENTOS</a> </li>
               <li className="nav-item2">
                 <a className="nav-link2" href="#">PROGRAMA MENSUAL</a> </li>
                   <li className="nav-item3">
                     <a className="nav-link3" href="#">MAX TU GLUTEO</a> </li>
                      <li className="nav-item4">
                        <a className="nav-link4" href="#">CONTACTO</a> </li>
                        <bdi className="money">
                        <span class="woocommerce-Price-currencySymbol">€</span>
                        0.00
                        </bdi>
              </nav>
          </React.Fragment>
    );
  }

  export default Navbar;