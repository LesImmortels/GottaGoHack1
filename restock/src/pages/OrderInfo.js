import ProductInfo from "../components/ProductInfo";
import React from "react";
import { useParams } from "react-router-dom";


function OrderInfo() {
    let { id } = useParams();

    let orders = [
        {
            name: "order1", price: "123", date: "Yesterday", id: "123456789", products: [
                { name: "Product1", seller: "ma couille", quantity: "x1", price: "120e" },
                { name: "Product2", seller: "ma couille", quantity: "x1", price: "120e" }
            ]
        },
        {
            name: "order2", price: "123", date: "Yesterday", id: "987654321", products: [
                { name: "Product1", seller: "ma couille", quantity: "x1", price: "120e" },
                { name: "Product2", seller: "ma couille", quantity: "x1", price: "120e" }
            ]
        }
    ]

    let order;
    for (let i = 0; i < orders.length; i++) {
        if (orders[i].id === id) {
            order = orders[i]
            break
        }

    }

    let products = order.products

    return (
        <table class="items-center bg-transparent w-full border-collapse ">
            <thead className="bg-gray-200">
                <tr>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Product</th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Seller</th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Quantity</th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Price</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => {
                    return (
                        <ProductInfo product={product} />
                    )
                })}
            </tbody>
        </table>
    )
}

export default OrderInfo;