import ProductInfo from "../components/ProductInfo";
import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import firebaseInstance from "../services/firebase";

const mapState = (state) => ({
    currentUser: state.user.currentUser,
});

function getProducts(orders, id) {
    if (!orders) return [];
    for (let i = 0; i < orders.length; i++) {
        if (orders[i].id == id) {
            return orders[i].products;
        }
    }
    return [];
}

function OrderInfo() {
    let { id } = useParams();
    const { currentUser } = useSelector(mapState);

    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (currentUser != null) {
            let data = firebaseInstance.getOrders(currentUser.id);
            data.then((res) => {
                setProducts(() => getProducts(res, id));
            });
        }
    }, [currentUser, id]);

    return (
        <div className="w-full h-full px-24">
            <h1 className="font-black  text-3xl">Order: #{id} </h1>
            <div className="pt-4 ">
                <table className="items-center bg-transparent w-full border-collapse ">
                    <thead className="bg-gradient-to-r from-green-400 to-green-500 text-white shadow-lg">
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
