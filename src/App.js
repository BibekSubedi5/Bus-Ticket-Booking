
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Booking from "./pages/Booking/Booking";
import Home from './pages/Home/Home';
import List from "./pages/List/List";

function App() {
  return (
   
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/items" element={<List/>}/>
      <Route path="/available" element={<Booking/>}/>

     </Routes>
     </BrowserRouter>
    

  );
}

export default App;
