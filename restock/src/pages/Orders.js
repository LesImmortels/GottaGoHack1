import Order from "../components/Order";

function Orders() {
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

  return (
    <div className="w-full h-full px-24">
      <h1 className="font-black  text-3xl">Orders</h1>
      <div className="pt-4 ">
        <table className="items-center  w-full ">
          <thead className="bg-gradient-to-r from-green-400 to-green-500 text-white shadow-lg ">
            <tr>
              <th className="px-6 align-middle border border-solid  py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Name
              </th>
              <th className="px-6 align-middle border border-solid  py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Price
              </th>
              <th className="px-6 align-middle border border-solid  py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Date
              </th>
              <th />
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => {
              return <Order order={order} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Orders;
