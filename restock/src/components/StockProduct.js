function StockProduct({ name, link, quantity }) {
    
    return (
        <tr class="even:bg-gray-100">
            <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap text-left">{name}</th>
            <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap text-left"><a href={link}>{link}</a></th>
            {/* <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap text-left"><a href={link}>{/(?:[\w-]+\.)+[\w-]+/.exec(link)[0]}</a></th> */}
            <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap text-left"><button class="text-green-500 mx-2 w-5 h-5 text-m bg-white border-gray-500 border rounded-full">+</button>{quantity}<button class="text-red-500 mx-2 w-5 h-5 text-m bg-white border-gray-500 border rounded-full">-</button></th>
        </tr>
    );
}

export default StockProduct;