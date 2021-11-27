import StockProduct from "../components/StockProduct";
import { Popover, Transition } from '@headlessui/react'
import {Fragment, useState} from 'react'
import firebaseInstance from "../services/firebase";

function Stocks() {

    const [formData, setFormData] = useState({
        name: "",
        quantity: 0,
        price: 0,
        url: "",
    })
    const [name, setName] = useState("")
    const [quantity, setQuantity] = useState(0)
    const [price, setPrice] = useState(0)
    const [url, setUrl] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        firebaseInstance.addProductToStock(formData)
    }


    const stocks = [
        { name: "Fish and Chips", link: "https://sheinxy.com", quantity: "2" },
        { name: "Croquettes", link: "https://paradis-de-lola.fr", quantity: "42" }
    ];
    return (
        <div>
        <table class="items-center bg-transparent w-full border-collapse">
            <thead class="bg-gradient-to-r from-green-400 to-green-500 text-white shadow-lg">
                <tr>
                    <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap text-left">Name</th>
                    <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap text-left">Link</th>
                    <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap text-left">Quantity</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th colspan="3" class="px-6 text-gray-500 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap">
                        <Popover className="relative">
                            {({ open }) => (
                                <>
                                    <Popover.Button
                                        className={`
                ${open ? '' : 'text-opacity-90'} group px-3 rounded-md inline-flex items-center  font-semibold hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                                    >
                                        <span>Add Product</span>
                                    </Popover.Button>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0 translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1"
                                    >
                                        <Popover.Panel className="absolute z-10 w-screen max-w-sm px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-3xl">
                                            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                                <div className="relative  bg-white p-4">
                                                    <form onSubmit={handleSubmit} className="ml-4 text-left space-y-4">
                                                        <div className="w-full px-3">
                                                            <label
                                                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                                htmlFor="grid-last-name">
                                                                Product:
                                                            </label>
                                                            <input
                                                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                                                value={formData.name}
                                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                                id="grid-last-name" name="name" type="text" placeholder="Chicken"/>
                                                        </div>
                                                        <div className="w-full px-3">
                                                            <label
                                                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                                htmlFor="grid-last-name">
                                                                Price:
                                                            </label>
                                                            <input
                                                                onChange={(e) => setFormData({...formData, price: e.target.value})}
                                                                value={formData.price}
                                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                                id="grid-last-name" name="price" type="number" placeholder="3"/>
                                                        </div>
                                                        <div className="w-full px-3">
                                                            <label
                                                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                                htmlFor="grid-last-name">
                                                                URL:
                                                            </label>
                                                            <input
                                                                onChange={(e) => setFormData({...formData, url: e.target.value})}
                                                                value={formData.url}
                                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                                id="grid-last-name" name="url" type="text" placeholder="www.urlhere.com/product1/"/>
                                                        </div>
                                                        <div className="w-full px-3">
                                                            <label
                                                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                                htmlFor="grid-last-name">
                                                                Quantity:
                                                            </label>
                                                            <input
                                                                onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                                                                value={formData.quantity}
                                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                                id="grid-last-name" name="quantity" type="number" placeholder="5"/>
                                                        </div>
                                                        <div className="w-full px-3 py-1">
                                                            <button type="submit" value="Submit" className="text-sm font-semibold text-white bg-green-500 px-4 py-2 shadow rounded">
                                                                Add Product
                                                            </button>
                                                        </div>

                                                    </form>
                                                </div>
                                            </div>
                                        </Popover.Panel>
                                    </Transition>
                                </>
                            )}
                        </Popover>


                    </th>
                </tr>
                {stocks.map((el, i) => <StockProduct name={el.name} link={el.link} quantity={el.quantity} key={i} />)}
            </tbody>
        </table>
        </div>
    );
}

export default Stocks;