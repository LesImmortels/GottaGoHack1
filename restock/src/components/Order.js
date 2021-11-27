import { Link } from "react-router-dom";


function Order({ order }) {

    return (
        <tr className="even:bg-gray-100">
            <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                <Link to={`orderinfo/${order.id}`}>{order.name}</Link>
            </th>
            <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">{order.price} €</th>
            <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">{order.date}</th>
        </tr>
    )

}

export default Order;