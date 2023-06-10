import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Home from "./page/home/Home";
import View from "./page/view/View";
import Order from "./page/order/Order";
import OrderList from "./page/order-list/OrderList";
import Header from "./components/Header";
import { Toaster } from 'react-hot-toast';
import Details from "./page/view/Details";
import Edit from "./page/view/Edit";
import OrderDetails from "./page/order-list/orderDetails";
import EditOrder from "./page/order-list/EditOrder";

function App() {
  return <>
  <Router>
    <Toaster/>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/view" element={<View/>}/>
      <Route path="/view/:id" element={<Details/>}/>
      <Route path="/edit/:id" element={<Edit/>}/>
      <Route path="/order" element={<Order/>}/>
      <Route path="/orderlist" element={<OrderList/>}/>
      <Route path="/orderdetails/:id" element={<OrderDetails/>}/>
      <Route path="/edit-order/:id" element={<EditOrder/>}/>
    </Routes>
  </Router>
  </>;
}

export default App;
