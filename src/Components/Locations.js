import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import "../Styles/Locations.css"

function Locations() {

    const position1 = [43.648180, -79.375750];
    const position2 = [-30.323690, 149.785500];
    const position3 = [51.728687, -3.858072];
    const customIcon = new Icon({
        iconUrl: require("../Images/location.png"),
        iconSize: [33, 33],
        iconAnchor: [15, 55],
        shadowUrl: require("../Images/location_anchor.png"),
        shadowAnchor: [0, 32],
        shadowSize: [4, 30],
        popupAnchor: [0, -55]
    })

    useEffect(() => {
        document.body.scrollTop = document.documentElement.scrollTop = 0
    }, [])

    return (
        <div className='Location'>
            <div className='Location__Card1'>
                <div className='Location__Caption'>
                    <p className='Location__Title'>Canada</p>
                    <div className='Location__Sections'>
                        <div className='Location__AddCont'>
                            <p className='Location__Caption2'>Designo Central Office</p>
                            <p className='Location__Caption3'>3886 Wellington Street</p>
                            <p className='Location__Caption4'>Toronto, Ontario M9C 3J5</p>
                        </div>
                        <div className='Location__AddCont'>
                            <p className='Location__Caption2'>Contact</p>
                            <p className='Location__Caption3'>P : +1 253-863-8967</p>
                            <p className='Location__Caption4'>M : contact@designo.co</p>
                        </div>
                    </div>
                </div>
                <div className="map" id="map" >
                    <MapContainer center={position1} zoom={14} scrollWheelZoom={true}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={position1} icon={customIcon}>
                            <Popup>
                                Designo Central Office
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <div className='Location__Card2'>
                <div className='Location__Caption'>
                    <p className='Location__Title'>Australia</p>
                    <div className='Location__Sections'>
                        <div className='Location__AddCont'>
                            <p className='Location__Caption2'>Designo AU Office</p>
                            <p className='Location__Caption3'>19 Balonne Street</p>
                            <p className='Location__Caption4'>New South Wales 2443</p>
                        </div>
                        <div className='Location__AddCont'>
                            <p className='Location__Caption2'>Contact</p>
                            <p className='Location__Caption3'>P : (02) 6720 9092</p>
                            <p className='Location__Caption4'>M : contact@designo.au</p>
                        </div>
                    </div>
                </div>
                <div className="map" id="map" >
                    <MapContainer center={position2} zoom={14} scrollWheelZoom={true}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={position2} icon={customIcon}>
                            <Popup>
                                Designo AU Office
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <div className='Location__Card3'>
                <div className='Location__Caption'>
                    <p className='Location__Title'>United Kingdom</p>
                    <div className='Location__Sections'>
                        <div className='Location__AddCont'>
                            <p className='Location__Caption2'>Designo UK Office</p>
                            <p className='Location__Caption3'>13 Colorado Way</p>
                            <p className='Location__Caption4'>Rhyd-y-fro SA8 9GA</p>
                        </div>
                        <div className='Location__AddCont'>
                            <p className='Location__Caption2'>Contact</p>
                            <p className='Location__Caption3'>P : 078 3115 1400</p>
                            <p className='Location__Caption4'>M : contact@designo.uk</p>
                        </div>
                    </div>
                </div>
                <div className="map" id="map" >
                    <MapContainer center={position3} zoom={14} scrollWheelZoom={true}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={position3} icon={customIcon}>
                            <Popup>
                                Designo UK Office
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </div>
    );
}

export default Locations;