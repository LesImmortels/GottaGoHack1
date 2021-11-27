function ProductInfo({ product }) {

    return (
        <tr className="even:bg-gray-100">
            <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">{product.name}</th>
            <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                <a href="https://www.mycouilleseller.com">{product.seller}</a>

            </th>
            <th className="px-6 align-middle border border-solid py-3 text-xs lowercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">x {product.quantity}</th>
            <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">{product.price} €</th>
        </tr>
    )
}

export default ProductInfo;
