//import { useEffect } from "react";
import firebaseInstance from "../services/firebase";

function SalesProduct({ name, price, link, quantity, date }) {
    function handleIncrement(increment = 1) {
        firebaseInstance.changeSales({ name, increment })
    }
    return (
        <tr className="even:bg-gray-100">
            <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap text-left">{name}</th>
            <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap text-left">{price} €</th>
            <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap text-left"><a href={link}>{link}</a></th>
            <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap text-left">{date}</th>
            {/* <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap text-left"><a href={link}>{/(?:[\w-]+\.)+[\w-]+/.exec(link)[0]}</a></th> */}
            <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap text-left"><button onClick={() => handleIncrement(1)} className="text-green-500 mx-2 w-5 h-5 text-m bg-white border-gray-500 border rounded-full">+</button>{quantity}<button onClick={() => handleIncrement(-1)} className="text-red-500 mx-2 w-5 h-5 text-m bg-white border-gray-500 border rounded-full">-</button></th>
        </tr>
    );
}

export default SalesProduct;