import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Sidebar from "./components/Sidebar";
import Orders from "./pages/Orders";
import Stocks from "./pages/Stocks";

const mapState = (state) => ({
  currentUser: state.user.currentUser,
});

function App(props) {

  const dispatch = useDispatch();
  const { currentUser } = useSelector(mapState);

  return (
    <div className="flex flex-row h-screen">
      {/* Side bar here */}
      <Sidebar />
      <div className="w-full">
        <Routes>
          {/* <Route exact path="/" component={Home}/> */}

        </Routes>
      </div>
    </div>
  );
}

export default App;