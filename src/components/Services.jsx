import { GiWoodCabin } from "react-icons/gi";
import { GiWoodBeam } from "react-icons/gi";
import { GiHandTruck } from "react-icons/gi";
import { PiShippingContainerLight } from "react-icons/pi";

import { navig } from "../utils/navig"
import { useNavigate } from "react-router-dom";

import "../styles/services.css"

export const Services = () => {
  const navigate = useNavigate()
  return (
    <nav className="btn-service-container" id="hola">
      <article className="container-card-service">
        <section className="fondo-service"></section>
        <section className="desc-service">
          <PiShippingContainerLight className="icon-service"/>
          <p className="title-service">Maderex<br/>Exports</p>
        </section>
      </article>
      <article className="container-card-service">
        <section className="fondo-service"></section>
        <section className="desc-service">
          <GiHandTruck className="icon-service"/>
          <p className="title-service">Maderex<br/>Store</p>
        </section>
      </article>
      <article className="container-card-service">
        <section className="fondo-service"></section>
        <section className="desc-service">
          <GiWoodBeam className="icon-service"/>
          <p className="title-service">Maderex<br/>Acerrio</p>
        </section>
      </article>
      <article className="container-card-service">
        <section className="fondo-service"></section>
        <section className="desc-service">
          <GiWoodCabin className="icon-service"/>
          <p className="title-service">Maderex<br/>Buenvivir</p>
        </section>
      </article>
    </nav>
  )
}
