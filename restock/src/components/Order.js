import { Link } from "react-router-dom";

function Order({ order }) {
  return (
    <tr className="even:bg-gray-50">
      <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
        <Link to={`/orders/${order.id}`}>{order.name}</Link>
      </th>
      <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
        {order.price} €
      </th>
      <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
        {order.date}
      </th>
      <th className="align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
        <Link to={`/orders/${order.id}`}>
          <svg
            fill="none"
            className="w-6 h-6 -mx-1"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 8l4 4m0 0l-4 4m4-4H3"
              strokeLinecap="round"
              strokeWidth="2"
            />
          </svg>
        </Link>
      </th>
    </tr>
  );
}

export default Order;
