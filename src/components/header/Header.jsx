
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./header.css"
import { faBus } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"


const Header =()=> {
  return (
    <div>
    <div className="header">
        <div className="headerList">
        <div className="I">
                <div  className="icon">    <FontAwesomeIcon icon={faBus} /> </div>
                  <Link to="/" style = {{color:"inherit"}}>
                    <span  className="icon">
                        Easy bus
                    </span>
                  </Link>

                    </div>
           
            <div className="explore"> <h1  >Travel to explore</h1></div>
                
            <div className="headerListitem">
                <button className="vehicle">Vehicle Hire
            
                </button>
                <button className="vehicle">Bus Ticket</button>   
            </div>

        </div>
        </div>
    </div>
   

  )
}

export default Header