import { useParams } from "react-router-dom";
import RecommendStock from "../components/RecommendStock";
import { Popover, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect } from "react";
import firebaseInstance from "../services/firebase";

function ShopInfo() {
    let { id } = useParams();
    const [stocks, setStocks] = useState([]);

    useEffect(() => {
        console.log(id);
        let data = firebaseInstance.getStocks( id );
        console.log(data);
        data.then((res) => {
            setStocks(res);
            console.log(res);

        });
    }, []);

    if (stocks === undefined) {
        return <>Still loading...</>;
      }
    
    return (
        <div className="w-full h-full px-24">
        <h1 className="font-black  text-3xl">What do you usually get?</h1>
        <p>Answer this quick survey to help reduce food waste, and get discounts on your favourite shops.</p>
        <div className="pt-4 ">
            <table class="items-center bg-transparent w-full border-collapse">
                <thead class="bg-gradient-to-r from-green-400 to-green-500 text-white shadow-lg">
                    <tr>
                        <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap text-left">
                            Name
                        </th>
                        <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap text-left">
                            Price
                        </th>
                        <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap text-left">
                            Link
                        </th>
                        <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap text-left">
                            Interested?
                        </th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {stocks && stocks.map((el, i) => {
                        return (
                            <RecommendStock
                                name={el.name}
                                price={el.price}
                                link={el.url}
                                id={id}
                                key={i}
                            />
                        )
                    })}
                </tbody>
            </table>
        </div>
    </div>
    )
}
export default ShopInfo;

