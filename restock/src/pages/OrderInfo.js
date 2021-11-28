import ProductInfo from "../components/ProductInfo";
import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import firebaseInstance from "../services/firebase";

function OrderInfo() {
    let { id } = useParams();

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        let data = firebaseInstance.getOrders();
        data.then((res) => {
            setOrders(res);
        });
    }, [orders]);

    let order;
    for (let i = 0; i < orders.length; i++) {
        if (orders[i].id === id) {
            order = orders[i];
            break;
        }
    }

    let products = order.products;

    return (
        <div className="w-full h-full px-24">
            <h1 className="font-black  text-3xl">Order: #{id} </h1>
            <div className="pt-4 ">
                <table class="items-center bg-transparent w-full border-collapse ">
                    <thead class="bg-gradient-to-r from-green-400 to-green-500 text-white shadow-lg">
                        <tr>
                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                Product
                            </th>
                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                Seller
                            </th>
                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                Quantity
                            </th>
                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                Price
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {products && products.map((product) => {
                            return <ProductInfo product={product} />;
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default OrderInfo;
