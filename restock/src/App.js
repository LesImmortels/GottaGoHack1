import './App.css';
import {Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Sidebar from "./components/Sidebar";
import Orders from "./pages/Orders";
import Stocks from "./pages/Stocks";

function App() {
  return (
    <div className="flex flex-row h-screen">
      {/* Side bar here */}
        <Sidebar/>
      <div className="w-full">
        <Routes>
          {/* <Route exact path="/" component={Home}/> */}
            <Route exact path="/stock" element={<Stocks/>}/>
            <Route exact path="/orders" element={<Orders/>}/>
          <Route exact path="/" element={<Dashboard/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;