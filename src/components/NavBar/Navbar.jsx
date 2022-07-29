import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./navbar.css"

const Navbar =()=> {


const {user} = useContext(AuthContext);

    return(
        
             <div className="navbar">
         <div className="navContainer">
            <span className="logo">Bus Booking</span>
            <div className="navItems">
                
            <button className="navButton">Contact</button>
            <button className="navButton">About Us</button>
                {user ? user.username : (
                <div>
                <Link to='/login'>
                <button className="navButton">Login</button>
                <button className="navButton">Register</button>
                </Link>

                </div>
                )}
               {user ? <div className="logout">
                    <button>Logout</button>
                    </div>: null
                }
                </div> 
            
            </div>
       </div>
          

                
     
      

       
    )
}
export default Navbar

