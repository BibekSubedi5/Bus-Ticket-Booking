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
        <div className="busDetali">
        Transportation
Public Transportation:

There are many buses, minibuses and micro buses available at Ratnapark (Old Bus Park) which depart to different destinations in the valley. Three wheelers run by battery are also available for Kathmandu commuters.

Metered Taxi:

Consult Kathmandu valley map to find out the direction of your destination. Hail a taxi, which is easily recognized by its taxi sign on top and black license plate. As a rough guide, a taxi will charge Rs. 30 per kilometer. No tip is expected. Private taxis may charge slightly higher. Night taxi service can also be arranged and operated by major hotels. Fare is slightly higher than metered taxi. One can rent a private car through a travel agent or a car rental company.

Sajha Bus:

The Sajha Yatayat has resumed bus services along two routes in the valley. It is currently operating along kalanki, kalimati, Tirpureshwor, Naya Banseshwor, Sinmangal and Airport and long Satdobato, Jawalakhel, Tripureshwor, Jamal, Teaching Hospital and Naya Bus Park. The buses are easily recognized by their green color an the name Sajha Yatayat on thems.

Hired Mountain Bike/ Ordinary Bicycle:

Mountain bikes and ordinary bicycles are cheap and the best form of transportation for economy tourists. One can hire them at Thamel, Rani Pokhari and Jhochhen, all in Kathmandu.

Long Distance Bus Service:

Long distance day or night bus services are available from Kathmandu to all cities of Nepal. New Bus Park at Gongabu at Ring Road near Balaju, Kathmandu, from where buses depart to different destinations. Six seater Sumo Tata van, 12 seater van and air-conditioned mini buses are also available for long distance travel.

Domestic Air Service:

Nepal Airlines has an extensive network of air services to major parts of the country. Besides Nepal Airlines, other domestic airlines (there are more than 18 in operation) provide regular and chartered services to popular domestic destinations.

[Source : Ministry of Culture, Tourism and Civil Aviation]
        </div>
     
     
   
       <div className="bookSeat">
        
     <button onClick={handleClick}> Book your seat Here!</button>
     {openModal && <Reserve setOpen={setOpenModal} busId={id} />}
       </div>
       </div>
       <Mail/>
       <Footer/> 

       
    </div>
  )
}

export default Booking