import React, { useState, useEffect } from "react";
import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    Marker,
    InfoWindow
} from "react-google-maps";
import mapStyles from "./mapStyles";

function Mymap() {
    return (
        <GoogleMap
            defaultZoom={18}
            defaultCenter={{ lat: 48.815096, lng: 2.362805 }}
            defaultOptions={{ styles: mapStyles.hiding }}
        >
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







/*

import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-map";

function Mymap() {
    return (
        <GoogleMap
            defaultZoom={10}
            defaultCenter={{ lat: 12, lng: 12 }}
        />
    );
}


const WrappedMap = withScriptjs(withGoogleMap(Mymap));

function Map() {

    return <div>
        <WrappedMap googleMapURL={``} />
    </div>
}


export default Map;*/