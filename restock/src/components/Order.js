function Order({order}) {
    
    return (
        <div className="flex justify-between">
            <div>{order.name}</div>
            <div>{order.price}</div>
            <div>{order.date}</div>
        </div>
    )
}

export default Order;