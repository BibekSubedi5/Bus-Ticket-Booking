import "./searchItem.css";
import { useNavigate } from "react-router-dom"


const SearchItem = (item) => {

  const navigate =useNavigate()

  const handleSearch= () =>{
    navigate ("/available ") 

  }
  
  return (
    <div className="searchItem">
      <img
        src="https://bussewa.com/customer/bussewaUpload/MaitriBhagya_1575874717129_1582133390023.jpg"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siSheets">{item.seat}</span>
        <span className="siTaxiOp">{item.booked}</span>
    
        <span className="siFeatures">
         Ac Delux with full comfort
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">{item.price}</span>
          <span className="siPrice">{item.time}</span>
          <span className="siTaxOp">Includes taxes </span>
          <button className="siCheckButton" onClick={handleSearch}>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;