function Order({order}) {
    
    return (
        <tr> 
            <td>{order.name}</td>
            <td>{order.price}</td>
            <td>{order.date}</td>
        </tr>
    )
}

export default Order;