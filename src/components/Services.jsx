import { GiWoodCabin } from "react-icons/gi";
import { GiWoodBeam } from "react-icons/gi";
import { GiHandTruck } from "react-icons/gi";
import { PiShippingContainerLight } from "react-icons/pi";
import "../styles/services.css"

export const Services = () => {
  return (
    <nav className="btn-service-container" id="hola">
      <section className="container-btn-sub">
        <div className="btn-service-context">
          <GiHandTruck className="service-icon" />
          <p className="service-text">MADEREX<br/>STORE</p>
        </div>
        <div className="btn-service-context">
          <GiWoodBeam className="service-icon" />
          <p className="service-text">MADEREX ACERRIO</p>
        </div>
      </section>
      <section className="container-btn-sub">
        <div className="btn-service-context">
          <PiShippingContainerLight className="service-icon" />
          <p className="service-text">MADEREX EXPORTS</p>
        </div>
        <div className="btn-service-context">
          <GiWoodCabin className="service-icon" />
          <p className="service-text">MADEREX BUENVIVIR</p>
        </div>
      </section>
    </nav>
  )
}
