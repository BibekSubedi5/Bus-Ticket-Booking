import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Mail from '../../components/mail/Mail'
import Navbar from '../../components/NavBar/Navbar'
import  './done.css'

const Done = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
<div className='aDone'>
    <div className="bDone">
   
    <h1>Congratulation Your Ticket is booked !</h1>
    <h2>Collect ticket details from your Email </h2>
     <h3>Enjoy your journey!</h3>
   
    
    
    </div>
    
    </div>
<Mail/>
<Footer/>
    </div>
  )
}


export default Done