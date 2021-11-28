import ProductInfo from "../components/ProductInfo";
import React from "react";
import { useParams } from "react-router-dom";

function OrderInfo() {
  let { id } = useParams();

  let orders = [
    {
      name: "order1",
      price: "123",
      date: "Yesterday",
      id: "123456789",
      products: [
        {
          name: "Product1",
          seller: "superSeller",
          quantity: "1",
          price: "120",
        },
        {
          name: "Product1",
          seller: "superSeller",
          quantity: "1",
          price: "120",
        },
        {
          name: "Product1",
          seller: "superSeller",
          quantity: "1",
          price: "120",
        },
        {
          name: "Product2",
          seller: "superSeller",
          quantity: "1",
          price: "120",
        },
      ],
    },
    {
      name: "order1",
      price: "123",
      date: "Yesterday",
      id: "123456789",
      products: [
        {
          name: "Product1",
          seller: "superSeller",
          quantity: "1",
          price: "120",
        },
        {
          name: "Product1",
          seller: "superSeller",
          quantity: "1",
          price: "120",
        },
        {
          name: "Product1",
          seller: "superSeller",
          quantity: "1",
          price: "120",
        },
        {
          name: "Product2",
          seller: "superSeller",
          quantity: "1",
          price: "120",
        },
      ],
    },
    {
      name: "order1",
      price: "123",
      date: "Yesterday",
      id: "123456789",
      products: [
        {
          name: "Product1",
          seller: "superSeller",
          quantity: "1",
          price: "120",
        },
        {
          name: "Product1",
          seller: "superSeller",
          quantity: "1",
          price: "120",
        },
        {
          name: "Product1",
          seller: "superSeller",
          quantity: "1",
          price: "120",
        },
        {
          name: "Product2",
          seller: "superSeller",
          quantity: "1",
          price: "120",
        },
      ],
    },
    {
      name: "order2",
      price: "123",
      date: "Yesterday",
      id: "987654321",
      products: [
        {
          name: "Product1",
          seller: "superSeller",
          quantity: "1",
          price: "120",
        },
        {
          name: "Product1",
          seller: "superSeller",
          quantity: "1",
          price: "120",
        },
        {
          name: "Product1",
          seller: "superSeller",
          quantity: "1",
          price: "120",
        },
        {
          name: "Product2",
          seller: "superSeller",
          quantity: "1",
          price: "120",
        },
      ],
    },
  ];

  let order;
  for (let i = 0; i < orders.length; i++) {
    if (orders[i].id === id) {
      order = orders[i];
      break;
    }
  }

  let products = order.products;

  return (
    <div className="w-full h-full px-24">
      <h1 className="font-black  text-3xl">Order: #{id} </h1>
      <div className="pt-4 ">
        <table class="items-center bg-transparent w-full border-collapse ">
          <thead class="bg-gradient-to-r from-green-400 to-green-500 text-white shadow-lg">
            <tr>
              <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Product
              </th>
              <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Seller
              </th>
              <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Quantity
              </th>
              <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {products && products.map((product) => {
              return <ProductInfo product={product} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderInfo;
