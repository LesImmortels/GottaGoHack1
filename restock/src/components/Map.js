import React, { useState, useEffect } from "react";
import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    Marker,
    InfoWindow
} from "react-google-maps";
import mapStyles from "./mapStyles";
import firebaseInstance from "../services/firebase";

function Mymap() {
    // const [selectedShop, setSelectedShop] = useState(null);
    const [shops, setShop] = useState([]);

    useEffect(() => {
        let data = firebaseInstance.getShops();
        data.then((res) => {
            console.log(res);
            setShop(res);
        });
    }, []);

    return (
        <GoogleMap
            defaultZoom={18}
            defaultCenter={{ Latitude: 48.815563, Longitude: 2.362965 }}
            defaultOptions={{ styles: mapStyles.hiding }}
        >
            {shops.map((shop) => (
                <Marker key={shop.name}
                    position={{
                        lat: shop.coords.latitude,
                        lng: shop.coords.longitude
                    }}
                    // onClick={() => {
                    //     setSelectedShop(shop);
                    // }}
                />))}
            {/* {selectedShop && (
                <InfoWindow
                    position={{
                        lat: selectedShop.coords.latitude,
                        lng: selectedShop.coords.longitude
                    }}
                    onCloseClick={() => {
                        setSelectedShop(null);
                    }}
                >
                    <div>
                        Shop details
                    </div>
                </InfoWindow>
            )} */}
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