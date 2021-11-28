import Map from "../components/Map";


import Shop from "../components/Shop";
import { Popover, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import firebaseInstance from "../services/firebase";

export function Maps() {
    return (
        <Map />
    );
}

export function Shops() {

    const [formData, setFormData] = useState({
        name: "",
        address: "",
        url: "",
    });
    const [shops, setShops] = useState([]);

    useEffect(() => {
        let data = firebaseInstance.getShops();
        data.then((res) => {
            setShops(res);
        });
    }, []);

    
    const handleSubmit = (e) => {
        e.preventDefault();
        firebaseInstance.addProductToStock(formData);
        resetForm();
    };

    const resetForm = () => {
        setFormData({
            name: "",
            address: "",
            url: "",
        });
    };

    return (
        <div className="w-full h-full px-24">
            <Map />
            <div className="pt-4 ">
                <table className="items-center bg-transparent w-full border-collapse">
                    <thead className="bg-gradient-to-r from-green-400 to-green-500 text-white shadow-lg">
                        <tr>
                            <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap text-left">
                                Name
                            </th>
                            <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap text-left">
                                Address
                            </th>
                            <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap text-left">
                                Link
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {shops && shops.map((shop, i) => {
                            return (
                                <Shop
                                    shop={shop}
                                    key={i}
                                />
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

