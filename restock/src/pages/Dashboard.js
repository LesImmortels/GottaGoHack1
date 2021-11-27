import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { checkUserSession } from "../redux/User/user.actions";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
} from "recharts";
import firebaseInstance from "../services/firebase";

const mapState = (state) => ({
  currentUser: state.user.currentUser,
});

const createData = (data) => {
  if (data.length == 0)
    return [
      {
        "money saved": 0,
        surplus: 0,
        offer: 0,
        demand: 0,
        date: "xx-xx-xxxx",
        "money spent": 0,
      },
    ];
  if (data.length == 1)
    return [
      {
        "money saved": 0,
        surplus: data[0].offer - data[0].demand,
        offer: data[0].offer,
        demand: data[0].demand,
        date: data[0].date,
        "money spent": data[0].spent,
      },
    ];

  const res = [];
  let avg_demand = data[0].demand;
  for (let i = 1; i < data.length; i++) {
    res[i - 1] = {
      "money saved": data[i - 1].spent - data[i].spent,
      surplus: data[i].offer - data[i].demand,
      date: data[i].date,
      offer: data[i].offer,
      demand: data[i].demand,
      "money spent": data[i].spent,
    };
    avg_demand += data[i].demand;
  }
  avg_demand /= data.length;
  const unit_price = data[data.length - 1].spent / data[data.length - 1].offer;
  const offer = Math.round((data[data.length - 1].offer + avg_demand) / 2);
  res[data.length - 1] = {
    "money saved": Math.round(data[data.length - 1].spent - offer * unit_price),
    "money spent": Math.round(offer * unit_price),
    surplus: offer - avg_demand,
    offer: offer,
    demand: avg_demand,
    date: "next week",
  };
  return res;
};

const COLORS = [
  "#00e9fe",
  "#00C49F",
  "#9dff69",
  "#53ff30",
  "#306bff",
  "#5d30ff",
  "#c130ff",
  "#ff30ea",
  "#ff30c4",
  "#ff3072",
  "#ff3030",
  "#ff5930",
  "#ff9b30",
  "#ffd230",
];
const RADIAN = Math.PI / 180;

function Dashboard() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(mapState);

  const [data, setData] = useState([]);
  const [stock, setStock] = useState([]);

  useEffect(() => {
    let data = firebaseInstance.getUserDashboard(currentUser.id);
    data.then((res) => {
      if (typeof res.data() != "undefined") {
        setData(createData(res.data().data));
      }
    });
  }, [data]);

  useEffect(() => {
    let data = firebaseInstance.getStocks();
    data.then((res) => {
      if (typeof res != "undefined") {
        res = res.map((item) => {
          return {
            name: item.name,
            value: item.quantity,
            price: item.price * item.quantity,
          };
        });
        setStock(res);
      }
    });
  }, [stock]);

  console.log(stock);
  return (
    <>
      <div className="w-full h-screen px-24">
        <h1 className="font-black  text-3xl">Dashboard</h1>

        <h1 class=" mt-24 mb-2 font-bold text-lg underline">
          Predicting probable demands :
        </h1>
        <div className="flex flex-row items-center  justify-center  rounded-2xl my-4 p-2 bg-green-50 h-4/6">
          {data && (
            <ResponsiveContainer width="75%" height="75%">
              <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="offer"
                  stroke="#19C087"
                  activeDot={{ r: 8 }}
                />
                <Line
                  type="monotone"
                  dataKey="demand"
                  stroke="#F27A35"
                  activeDot={{ r: 8 }}
                />
                <Line
                  type="monotone"
                  dataKey="surplus"
                  stroke="#82ca9d"
                  activeDot={{ r: 8 }}
                />
                <Line
                  type="monotone"
                  dataKey="money spent"
                  stroke="#00fafa"
                  activeDot={{ r: 8 }}
                />
                <Line
                  type="monotone"
                  dataKey="money saved"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>

        <h1 className=" mt-24 mb-2 font-bold text-lg underline">Stock :</h1>
        <div className="flex flex-row items-center  justify-center  rounded-2xl my-4 p-2 bg-purple-100 h-4/6">
          {stock && (
            <ResponsiveContainer width="100%" height="100%">
              <PieChart width={800} height={800}>
                <Pie
                  data={stock}
                  cx="50%"
                  cy="50%"
                  isAnimationActive={false}
                  label={({
                    cx,
                    cy,
                    midAngle,
                    innerRadius,
                    outerRadius,
                    value,
                    index,
                  }) => {
                    console.log("handling label?");
                    const RADIAN = Math.PI / 180;
                    // eslint-disable-next-line
                    const radius =
                      25 + innerRadius + (outerRadius - innerRadius);
                    // eslint-disable-next-line
                    const x = cx + radius * Math.cos(-midAngle * RADIAN);
                    // eslint-disable-next-line
                    const y = cy + radius * Math.sin(-midAngle * RADIAN);

                    return (
                      <text
                        x={x}
                        y={y}
                        fill="#8884d8"
                        textAnchor={x > cx ? "start" : "end"}
                        dominantBaseline="central"
                      >
                        {stock[index].name} ({value})
                      </text>
                    );
                  }}
                  outerRadius={250}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {stock.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
