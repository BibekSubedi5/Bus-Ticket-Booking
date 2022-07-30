import Header from '../../components/header/Header'
import Navbar from '../../components/NavBar/Navbar'
import Mail from '../../components/mail/Mail'
import Footer from '../../components/footer/Footer'


import './booked.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const Booked = () => {

  
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const handlePasswordChange =(event)=>{
      setPasswordInput(event.target.value);
  }
  const togglePassword =()=>{
    if(passwordType==="password")
    {
     setPasswordType("text")
     return;
    }
    setPasswordType("password")
  }
  return (
    <div className='aBooked'>
        
        <Navbar/>
        <Header/>

        <div className='bBooked'>
          <div className='dBooked'>
<span> Easy Bus</span>
<label> Enter your details here </label>

        <div className='cBooked'>
        <span>Name</span>
        <input  placeholder='Enter your Name'/>
        </div>
        <div className='cBooked'>
        <span>Email Address</span>
        <input  placeholder='Enter your Email'/>
        </div>  <div className='cBooked'>
        <span>Phone No</span>
        <input  placeholder='Enter your Phone Number'/>
        </div>  <div className='cBooked'>
        <span>Password</span>
        <input type={passwordType}
         onChange={handlePasswordChange} 
        value={passwordInput} 
        name="password"
         class="form-control"
          placeholder="Password" />
        </div>
        <button>

        <Link to="/done">
        <span>Book now</span>
        </Link>
        </button>


        <h1>
          Having problem click here
        </h1>
        </div>
     
        </div>
        <Mail/>
        <Footer/>
    </div>
  )
}
