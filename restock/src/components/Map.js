import React, { useState } from "react";
import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    Marker,
    InfoWindow
} from "react-google-maps";
import mapStyles from "./mapStyles";

function Mymap() {
    const [selectedShop, setSelectedShop] = useState(null);
    let shops = [{
        name: "KB",
        coords: {
            lat: 48.815563,
            lng: 2.362965
        }
    }, {
        name: "VJ",
        coords: {
            lat: 48.797646,
            lng: 2.357123
        }
    },]
    return (
        <GoogleMap
            defaultZoom={18}
            defaultCenter={{ lat: 48.815563, lng: 2.362965 }}
            defaultOptions={{ styles: mapStyles.hiding }}
        >
            {shops.map((shop) => (
                <Marker key={shop.name}
                    position={{
                        lat: shop.coords.lat,
                        lng: shop.coords.lng
                    }}
                    onClick={() => {
                        setSelectedShop(shop);
                    }}
                />))}
            {selectedShop && (
                <InfoWindow
                    position={{
                        lat: selectedShop.coords.lat,
                        lng: selectedShop.coords.lng
                    }}
                    onCloseClick={() => {
                        setSelectedShop(null);
                    }}
                >
                    <div>
                        Shop details
                    </div>
                </InfoWindow>
            )}
        </GoogleMap>
    );
}

const MapWrapped = withScriptjs(withGoogleMap(Mymap));

export default function Map() {
    return (
        <div style={{ height: '50%', width: '100%', position: 'relative' }}>
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