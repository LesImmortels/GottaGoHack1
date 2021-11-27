import './App.css';
import {Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex flex-row h-screen">
      {/* Side bar here */}
        <Sidebar/>
      <div className="w-full">
        <Routes>
          {/* <Route exact path="/" component={Home}/> */}

          <Route exact path="/" element={<Dashboard/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;