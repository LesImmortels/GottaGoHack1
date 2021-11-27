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

const renderCustomAxisTick = ({ x, y, payload }) => {
  console.log(payload);

  return <text>Hello</text>;
};

function Dashboard() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(mapState);

  const [data, setData] = useState([]);

  useEffect(() => {
    let data = firebaseInstance.getUserDashboard(currentUser.id);
    data.then((res) => {
      if (typeof res.data() != "undefined") {
        setData(res.data().data);
      }
    });
  }, []);
  return (
    <>
      <div className="w-full h-full px-24">
        <h1 className="font-black  text-3xl">Dashboard</h1>
        <h1 class=" mt-24 mb-2 font-bold text-lg">I like trains</h1>
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
                <XAxis dataKey="date" tick={renderCustomAxisTick} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="money saved"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="waste" stroke="#82ca9d" />
                <Line
                  type="monotone"
                  dataKey="total costs evolution"
                  stroke="#00fafa"
                />
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
