import "./booking.css"
import Find from '../../components/FInd/Find'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Mail from '../../components/mail/Mail'
import Navbar from '../../components/NavBar/Navbar'


import useFetch from '../../Hook/fetch';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';
import Reserve from "../../components/reserve/Reserve"


const Booking = () => {
  const location =useLocation();
  
  
  
  const id= location.pathname.split("/")[2];
  const [openModal,setOpenModal]=useState(false);
   const { data , loading, error} = useFetch(`/bus/${id}`);
  
 
  const navigate =useNavigate();
const {user} = useContext(AuthContext);
  const handleClick =()=>{
    if (user){
setOpenModal(true)
    }else{
navigate("/login")
    }
  }
  

  
  return (
    <div>
        <Navbar/>
       <Header/>
 
       <div className="BusSeat">
        <span>Total:{data.name}</span>
     
     <button onClick={handleClick}> Book your seat Here!</button>
     {openModal && <Reserve setOpen={setOpenModal} busId={id} />}
       </div>
       <Mail/>
       <Footer/> 

       
    </div>
  )
}

export default Booking