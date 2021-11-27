import ProductInfo from "../components/ProductInfo";

function OrderInfo() {
   let products = [
        {name: "Product1", seller: "ma couille", quantity: "x1", price:"120e"}
   ]

    return (
        <div className="px-16">
            <div className="flex justify-between">
                <p>Product</p>
                <p>Seller</p>
                <p>Quantity</p>
                <p>Price</p>
            </div>
            {products.map((product) => {
                return (
                    <ProductInfo product={product}/>
                )
            })}
        </div>
    )
}

export default OrderInfo;