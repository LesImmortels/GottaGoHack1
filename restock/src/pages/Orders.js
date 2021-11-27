import Order from "../components/Order";

function Orders() {
    let orders = [
        {name:"order1", price:"123", date:"Yesterday"},
        {name:"order2", price:"123", date:"Yesterday"}
    ]

    return(
        <div className="px-16">
            <div className="flex justify-between">
                <p>Name</p>
                <p>Price</p>
                <p>Date</p>
            </div>
            {orders.map((order) => {
                return (
                    <Order order={order}/>
                )
            })
            }
        </div>
    )
}

export default Orders;