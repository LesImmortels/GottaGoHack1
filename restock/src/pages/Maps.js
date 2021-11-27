import Map from "../components/Map";


import Shoplist from "../components/Shoplist";
import { Popover, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect } from "react";
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
    }, [shops]);

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
                <table class="items-center bg-transparent w-full border-collapse">
                    <thead class="bg-gradient-to-r from-green-400 to-green-500 text-white shadow-lg">
                        <tr>
                            <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap text-left">
                                Name
                            </th>
                            <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap text-left">
                                Address
                            </th>
                            <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap text-left">
                                Link
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {shops.map((shop, i) => (
                            <Shoplist
                                name={shop.name}
                                address={shop.address}
                                link={shop.url}
                                key={i}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

