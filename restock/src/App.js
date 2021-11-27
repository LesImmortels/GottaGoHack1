import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar";
import Orders from "./pages/Orders";
import Stocks from "./pages/Stocks";
import Sales from "./pages/Sales";
import { Map, Shops } from "./pages/Maps";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkUserSession } from "./redux/User/user.actions";
import WithAuth from "./utils/withAuth";
import MemberAuth from "./utils/memberAuth";
import UserAuth from "./utils/userAuth";
import OrderInfo from "./pages/OrderInfo";
import Homepage from "./pages/Homepage";

const mapState = (state) => ({
  currentUser: state.user.currentUser,
});

function App(props) {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(mapState);

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <div className="flex flex-row h-screen font">
      {/* Side bar here */}
      <Sidebar />
      <div className="w-full pt-10">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            exact
            path="/stock"
            element={
              <MemberAuth>
                <Stocks />
              </MemberAuth>
            }
          />
          <Route
            exact
            path="/sales"
            element={
              <MemberAuth>
                <Sales />
              </MemberAuth>
            }
          />
          <Route
            exact
            path="/orders"
            element={
              <MemberAuth>
                <Orders />
              </MemberAuth>
            }
          />
          <Route
            exact
            path="/dashboard"
            element={
              <MemberAuth>
                <Dashboard />
              </MemberAuth>
            }
          />
          <Route exact path="/orders/:id" element={<OrderInfo />} />
          <Route
            exact
            path="/map"
            element={
              <UserAuth>
                <Shops />
              </UserAuth>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
