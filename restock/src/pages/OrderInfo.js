import ProductInfo from "../components/ProductInfo";

function OrderInfo() {
   let products = [
        {name: "Product1", seller: "ma couille", quantity: "x1", price:"120e"},
        {name: "Product2", seller: "ma couille", quantity: "x1", price:"120e"}
   ]

    return (
        <div className="px-16" >
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Seller</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
            {products.map((product) => {
                return (
                    <ProductInfo product={product}/>
                )
            })}
            </tbody>
        </div>
    )
}

export default OrderInfo;