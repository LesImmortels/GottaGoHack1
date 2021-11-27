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
  ResponsiveContainer,
} from "recharts";
import firebaseInstance from "../services/firebase";

const mapState = (state) => ({
  currentUser: state.user.currentUser,
});

const createData = (data) => {
  if (data.length == 0)
      return [{ "money saved": 0, "surplus": 0, "offer": 0, "demand": 0, "date": "xx-xx-xxxx","money spent": 0 }];
  if (data.length == 1)
      return [{ "money saved": 0, "surplus": data[0].offer - data[0].demand, "offer": data[0].offer, "demand": data[0].demand, "date": data[0].date , "money spent": data[0].spent}];

  const res = [];
  let avg_demand = data[0].demand;
  for (let i = 1; i < data.length; i++) {
      res[i - 1] = {
          "money saved": data[i - 1].spent - data[i].spent,
          "surplus": data[i].offer - data[i].demand,
          "date": data[i].date,
          "offer": data[i].offer,
          "demand": data[i].demand,
          "money spent": data[i].spent
      };
      avg_demand += data[i].demand;
  }
  avg_demand /= data.length;
  const unit_price = data[data.length - 1].spent / data[data.length - 1].offer;
  const offer = Math.round((data[data.length - 1].offer + avg_demand) / 2);
  res[data.length - 1] = {
      "money saved": Math.round(data[data.length - 1].spent - offer * unit_price),
      "money spent": Math.round(offer * unit_price),
      "surplus": offer - avg_demand,
      "offer": offer,
      "demand": avg_demand,
      "date": "next week"
  };
  return res;
}

function Dashboard() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(mapState);

  const [data, setData] = useState([]);

  useEffect(() => {
    let data = firebaseInstance.getUserDashboard(currentUser.id);
    data.then((res) => {
      if (typeof res.data() != "undefined") {
        setData(createData(res.data().data));
      }
    });
  }, []);
  return (
    <>
      <div className="w-full h-full px-24">
        <h1 className="font-black  text-3xl">Dashboard</h1>
        <h1 class=" mt-24 mb-2 font-bold text-lg">Predicting probable demands</h1>
        <div class="flex flex-row items-center  justify-center  rounded-xl mt-0 p-2 bg-green-50 h-4/6">
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
                <Line type="monotone" dataKey="offer" stroke="#19C087" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="demand" stroke="#F27A35" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="surplus" stroke="#82ca9d" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="money spent" stroke="#00fafa" activeDot={{ r: 8 }}/>
                    <Line type="monotone" dataKey="money saved" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
