import { Link } from "react-router-dom";

function Shop({ shop }) {
    return (
        <tr className="even:bg-gray-50">
            <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                <Link to={`/shop/${shop.id}`}>{shop.name}</Link>
            </th>
            <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                {shop.address}
            </th>
            <th className="align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                {shop.link}
            </th>
        </tr>
    )
}

export default Shop;