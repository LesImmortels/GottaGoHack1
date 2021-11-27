import StockProduct from "../components/StockProduct";

function Stocks() {
    const stocks = [
        {name: "Fish and Chips", link: "https://sheinxy.com", quantity: "2"},
        {name: "Croquettes", link: "https://paradis-de-lola.fr", quantity: "42"}
    ];
    return (
        <table class="items-center bg-transparent w-full border-collapse">
            <thead class="bg-gray-200">
                <tr>
                    <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap text-left">Name</th>
                    <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap text-left">Link</th>
                    <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap text-left">Quantity</th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-gray-100">
                    <th colspan="3" class="px-6 text-gray-500 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap"><button class="font-bold">Add Product</button></th>
                </tr>
                {stocks.map((el, i) => <StockProduct name={el.name} link={el.link} quantity={el.quantity} key={i}/>)}
            </tbody>
        </table>
    );
}

export default Stocks;