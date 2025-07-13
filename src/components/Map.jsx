import "../styles/map.css"

export const Map = () => {
    return (
        <section className="map-container">
            <hr className="divisor-left" />
            <h2 className="map-title">Nuestra ubicación</h2>
            <iframe 
            title="Mapa"
            className="map-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.326020424104!2d-75.89465162495657!3d8.755364193212264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e5a2f61c3ba7d9d%3A0x39f91f9300214858!2sMaderex%20TK%20International!5e0!3m2!1ses-419!2sco!4v1752155770217!5m2!1ses-419!2sco"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <p className="map-direc">Carrera 3w No. 24a-80, Villanueva, Montería, Córdoba</p>
        </section>
    )
}
