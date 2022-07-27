
import Header from "../../components/header/Header"
import Navbar from "../../components/NavBar/Navbar"
import Find from "../../components/FInd/Find"
import "./home.css"
import Featured from "../../components/featured/Featured"
import { Bus } from "../../components/Bustype/Bus"
import Mail from "../../components/mail/Mail"
import Footer from "../../components/footer/Footer"
import Tour from "../../components/tour/Tour"



const Home =()=> {
    return(
        <div>
      < Navbar />

   <Header />
      
   <div className="homecontainer">
   <Featured />
   <Bus /> 
   
   </div>
   <Tour/>
   <Mail />
   <Footer/>

        </div>
 

    )
}
export default Home