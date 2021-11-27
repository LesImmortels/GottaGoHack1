function ProductInfo({product}) {
    
    return (
        <div className="flex justify-between">
            <div>{product.name}</div>
            <div>{product.seller}</div>
            <div>{product.quantity}</div>
            <div>{product.price}</div>
        </div>
    )
}

export default ProductInfo;
