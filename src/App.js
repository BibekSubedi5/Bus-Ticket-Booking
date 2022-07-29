
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Booked } from "./pages/Booked/Booked";
import Booking from "./pages/Booking/Booking";
import Home from './pages/Home/Home';
import List from "./pages/List/List";
import Login from "./pages/login/Login";

function App() {
  return (
   
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/items" element={<List/>}/>
      <Route path="/bus/:id" element={<Booking/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/booked" element={<Booked/>}/>


     </Routes>
     </BrowserRouter>
    

  );
}

export default App;
