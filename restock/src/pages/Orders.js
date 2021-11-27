import Order from "../components/Order";

function Orders() {
    let orders = [
        {name:"order1", price:"123", date:"Yesterday"},
        {name:"order2", price:"123", date:"Yesterday"}
    ]

    return(
        <div className="px-16">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {orders.map((order) => {
                    return (
                        <Order order={order}/>
                    )
                })
                }
            </tbody>
        </div>
    )
}

export default Orders;