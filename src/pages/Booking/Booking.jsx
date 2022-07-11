import "./booking.css"
import Find from '../../components/FInd/Find'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Mail from '../../components/mail/Mail'
import Navbar from '../../components/NavBar/Navbar'
import Seat from "../../components/seats/Seat"

const Booking = () => {
  return (
    <div>
        <Navbar/>
       <Header/>
       <Find type="items"/>
       <div className="BusSeat">
     <Seat/>
       </div>
       <Mail/>
       <Footer/> 
    </div>
  )
}

export default Booking