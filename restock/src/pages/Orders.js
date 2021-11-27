import Order from "../components/Order";

function Orders() {
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

    return (
        <table className="items-center bg-transparent w-full border-collapse ">
            <thead className="bg-gray-200">
                <tr>
                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Name</th>
                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Price</th>
                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Date</th>
                </tr>
            </thead>
            <tbody>
                {orders.map((order) => {
                    return (
                        <Order order={order} />
                    )
                })}
            </tbody>
        </table>
    )
}

export default Orders;