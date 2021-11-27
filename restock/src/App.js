import './App.css';
import Orders from './pages/Orders';
import {Route, Routes } from 'react-router-dom';
import Order from './components/Order';
import OrderInfo from './pages/OrderInfo';

function App() {
  return (
    <div className="App">
      {/* Side bar here */}
      <div>
        <Routes>
          {/* <Route exact path="/" component={Home}/> */}

          <Route exact path="/orders" element={<Orders/>} />
          <Route exact path="/orders/orderinfo" element={<OrderInfo/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
