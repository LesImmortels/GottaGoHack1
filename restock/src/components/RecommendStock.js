//import { useEffect } from "react";
import firebaseInstance from "../services/firebase";
import { useState } from "react"
import { useSelector } from "react-redux";
import { Switch } from "@headlessui/react";

const mapState = (state) => ({
    currentUser: state.user.currentUser,
});


function RecommendStock({ name, price, link, id }) {
    const { currentUser } = useSelector(mapState);

    const [enabled, setEnabled] = useState(false)


    function handleChange() {
        if (enabled) {
            firebaseInstance.changeRecommendedStock({id, name, increment:-1})
        
        } else {
            firebaseInstance.changeRecommendedStock({id, name, increment:1})
        }
        setEnabled(!enabled)
    }
    return (
        <tr className="even:bg-gray-100">
        <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap text-left">{name}</th>
        <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap text-left">{price} €</th>
        <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap text-left"><a href={link}>{link}</a></th>
        <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap text-left">
            <Switch
                checked={enabled}
                onChange={handleChange}
                className={`${enabled ? "bg-green-600" : "bg-red-600"}
relative inline-flex flex-shrink-0 h-5 w-10 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
                <span className="sr-only">Use setting</span>
                <span
                    aria-hidden="true"
                    className={`${enabled ? "translate-x-5" : "translate-x-0"}
pointer-events-none inline-block h-4 w-4 rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
                />
            </Switch>
        </th>
    </tr>
    );
}

export default RecommendStock;