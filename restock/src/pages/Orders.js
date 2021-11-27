import Order from "../components/Order";
import { Popover, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect } from "react";
import firebaseInstance from "../services/firebase";

function Orders() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        let data = firebaseInstance.getOrders();
        data.then((res) => {
            setOrders(res);
        });
    }, [orders]);

    return (
        <div className="w-full h-full px-24">
            <h1 className="font-black  text-3xl">Orders</h1>
            <div className="pt-4 ">
                <table className="items-center  w-full ">
                    <thead className="bg-gradient-to-r from-green-400 to-green-500 text-white shadow-lg ">
                        <tr>
                            <th className="px-6 align-middle border border-solid  py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                Name
                            </th>
                            <th className="px-6 align-middle border border-solid  py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                Price
                            </th>
                            <th className="px-6 align-middle border border-solid  py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                Date
                            </th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => {
                            return <Order order={order} />;
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Orders;
