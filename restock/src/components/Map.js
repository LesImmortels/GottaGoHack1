import React from "react";
import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    Marker,
} from "react-google-maps";
import mapStyles from "./mapStyles";

function Mymap() {
    return (
        <GoogleMap
            defaultZoom={18}
            defaultCenter={{ lat: 48.815096, lng: 2.362805 }}
            defaultOptions={{ styles: mapStyles.hiding }}
        >
            <Marker
                position={{
                    lat: 48.815096,
                    lng: 2.362805
                }}
            /*onClick={() => {
                setSelectedPark(park);
            }}*/
            /*icon={{
                url: `/Usual Icon.webp`,
                scaledSize: new window.google.maps.Size(50, 50)
            }}*/
            />
        </GoogleMap>
    );
}

const MapWrapped = withScriptjs(withGoogleMap(Mymap));

export default function Map() {
    return (
        <div style={{ height: '60%', width: '60%', position: 'relative' }}>
            <MapWrapped
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY
                    }`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </div>
    );
}
