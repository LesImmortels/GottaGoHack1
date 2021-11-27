import ProductInfo from "../components/ProductInfo";

function OrderInfo() {
   let products = [
        {name: "Product1", seller: "ma couille", quantity: "x1", price:"120e"},
        {name: "Product2", seller: "ma couille", quantity: "x1", price:"120e"}
   ]

    return (
        <table class="items-center bg-transparent w-full border-collapse ">
            <thead>
                <tr>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Product</th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Seller</th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Quantity</th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Price</th>
                </tr>
            </thead>
            <tbody>
            {products.map((product) => {
                return (
                    <ProductInfo product={product}/>
                )
            })}
            </tbody>
        </table>
    )
}

export default OrderInfo;