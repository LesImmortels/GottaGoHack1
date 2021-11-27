//import { useEffect } from "react";
import firebaseInstance from "../services/firebase";

function StockProduct({ name, price, link, quantity }) {
    function handleIncrement(increment = 1) {
        firebaseInstance.changeStock({ name, increment })
    }
    function removeStock() {
        firebaseInstance.removeStock({name})
    }
    return (
        <tr class="even:bg-gray-100">
            <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap text-left">{name}</th>
            <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap text-left">{price} €</th>
            <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap text-left"><a href={link}>{link}</a></th>
            {/* <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap text-left"><a href={link}>{/(?:[\w-]+\.)+[\w-]+/.exec(link)[0]}</a></th> */}
            <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap text-left"><button onClick={() => handleIncrement(1)} class="text-green-500 mx-2 w-5 h-5 text-m bg-white border-gray-500 border rounded-full">+</button>{quantity}<button onClick={() => handleIncrement(-1)} class="text-red-500 mx-2 w-5 h-5 text-m bg-white border-gray-500 border rounded-full">-</button></th>
            <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap text-left"><button onClick={() => removeStock()} class="mx-2 w-5 h-5bg-white border-gray-500 border rounded-full">
                <svg height="19" width="19" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 18L18 6M6 6L18 18" stroke="#4A5568" strokeLinecap="round" strokeWidth="2"/>
                </svg></button></th>

        </tr>
    );
}

export default StockProduct;