import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "../styles/contactMap.scss";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

const Contact: React.FC = () => {
    const [position] = useState({ lat: 49.8209, lng: 17.8794 });
    const [mapLoaded, setMapLoaded] = useState(false);

    useEffect(() => {
        setMapLoaded(true);
    }, []);

    return (
        <section className="oneHundertDVH " id="Home" tabIndex={0}>
            <div className="map">
                <div className="contact">
                    <span className="squareSpan"></span>
                    <div className="content">
                        <h2>Kontakt</h2>
                        <p className="firstParagraph">SK Blind Guardians</p>
                        <p>
                            <span>Adresa:</span> Leskovec 22, Březová, Czech
                            Republic
                        </p>
                        <p>
                            <span>Telefon:</span> +420 777 082 915
                        </p>
                    </div>
                </div>
                {mapLoaded && (
                    <MapContainer
                        center={[position.lat, position.lng]}
                        zoom={13}
                        className="contact-map"
                    >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution="&copy; OpenStreetMap contributors"
                        />
                        <Marker
                            position={[position.lat, position.lng]}
                            icon={DefaultIcon}
                        >
                            <Popup>
                                Kontaktní adresa: Leskovec 22, Březová
                            </Popup>
                        </Marker>
                    </MapContainer>
                )}
            </div>
        </section>
    );
};

export default Contact;
