import './App.css';
import {Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Sidebar from "./components/Sidebar";
import Orders from "./pages/Orders";
import Stocks from "./pages/Stocks";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {checkUserSession} from "./redux/User/user.actions";
import WithAuth from "./utils/withAuth";
import MemberAuth from "./utils/memberAuth";

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
    <div className="flex flex-row h-screen">
      {/* Side bar here */}
        <Sidebar/>
      <div className="w-full">
        <Routes>
          {/* <Route exact path="/" component={Home}/> */}
            <Route exact path="/stock"
                   element={
                       <MemberAuth>
                           <Stocks />
                       </MemberAuth>
                   }
            />
            <Route exact path="/orders"
                   element={
                       <MemberAuth>
                           <Orders />
                       </MemberAuth>
                   }
            />
          <Route exact path="/"
                 element={
                     <MemberAuth>
                         <Dashboard/>
                     </MemberAuth>
                 }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;