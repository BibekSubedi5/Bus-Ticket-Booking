import Header from '../../components/header/Header'
import Navbar from '../../components/NavBar/Navbar'
import './booked.css'

export const Booked = () => {
  return (
    <div className='aBooked'>
        
        <Navbar/>
        <Header/>

        <div className='bBooked'>
            your seat is booked
        </div>
        <div className='cBooked'>
        Enjoy youur journey
        </div>
    </div>
  )
}
