import './App.css';
import {Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Sidebar from "./components/Sidebar";
import Orders from "./pages/Orders";
import Stocks from "./pages/Stocks";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {checkUserSession} from "./redux/User/user.actions";

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
            <Route exact path="/stock" element={<Stocks/>}/>
            <Route exact path="/orders" element={<Orders user={currentUser}/>}/>
          <Route exact path="/" element={<Dashboard/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;