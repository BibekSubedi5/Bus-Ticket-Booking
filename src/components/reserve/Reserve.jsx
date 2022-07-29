import   './reserve.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleXmark} from '@fortawesome/free-solid-svg-icons'
import useFetch  from "../../Hook/fetch";
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


 const Reserve = ({setOpen, busId}) => {
  const {data ,loading , error} = useFetch(`/bus/seat/${busId}`)
  const [selectedSeats, setSelectedSeats] = useState([])
  const navigate =useNavigate()

  //   const { dates } = useContext(SearchContext);

//   const getDatesInRange = (startDate, endDate) =>{
//     const date =new Date(start)
//   }


  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedSeats(
      checked
        ? [...selectedSeats, value]
        : selectedSeats.filter((item) => item !== value)
    );
  };
  const isAvailable = (seatNumber) => {
    const isFound = seatNumber.some( 
   
    );

    return !isFound;
  };

  
  const handleClick = async () => {
    try {
      await Promise.all(
        selectedSeats.map((seatId) => {
          const res = axios.put(`/seat/availability/${seatId}`);
          return res.data;
        })
      );
      setOpen(false);
      navigate("/booked");
    } catch (err) {}
  };
  return (
    <div className='reserve'>
<div className='rContainer'>
    <FontAwesomeIcon
    icon={faCircleXmark}
    className="rClose"
    onClick={()=> setOpen(false)}
    />
    <span>Select Your seat</span>
    {data.map(item=>(
        <div className="rItem">
            <div className="rItemInfo">
              
            </div>
        
            <div className="rSelectRooms">
              {item.seatNumbers.map((seatNumber) => (
                <div className="room">
                  <label>{seatNumber.number}</label>
                  <input
                    type="checkbox"
                    value={seatNumber._id}
                    onChange={handleSelect}
                    // disabled={!isAvailable(seatNumber)}
                  />
                </div>
              ))}
            </div>
            <div className="rSelectRooms">
              {item.seatNumbers.map((seatNumber) => (
                <div className="room">
                  <label>{seatNumber.number}</label>
                  <input
                    type="checkbox"
                    value={seatNumber._id}
                    onChange={handleSelect}
                    // disabled={!isAvailable(seatNumber)}
                  />
                </div>
              ))}
            </div>
       
            <div className="rItemInfo">
              
              </div>
          
              <div className="rSelectRooms">
                {item.seatNumbers.map((seatNumber) => (
                  <div className="room">
                    <label>{seatNumber.number}</label>
                    <input
                      type="checkbox"
                      value={seatNumber._id}
                      onChange={handleSelect}
                      // disabled={!isAvailable(seatNumber)}
                    />
                  </div>
                ))}
              </div>
              <div className="rSelectRooms">
                {item.seatNumbers.map((seatNumber) => (
                  <div className="room">
                    <label>{seatNumber.number}</label>
                    <input
                      type="checkbox"
                      value={seatNumber._id}
                      onChange={handleSelect}
                      // disabled={!isAvailable(seatNumber)}
                    />
                  </div>
                ))}
              </div>

        </div>
    ))}
    <button onClick={handleClick}
        disabled={!isAvailable}
        className="rButton">Book Now</button>
</div>

        </div>
  )
}

export default Reserve