function ProductInfo({product}) {
    
    return (
        <tr> 
            <td>{product.name}</td>
            <td>{product.seller}</td>
            <td>{product.quantity}</td>
            <td>{product.price}</td>
        </tr>
    )
}

export default ProductInfo;
