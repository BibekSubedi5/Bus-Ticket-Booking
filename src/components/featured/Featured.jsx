import './featured.css'
import { useState } from 'react';

import { format } from 'date-fns';
import { DateRange } from 'react-date-range';

import { useNavigate } from "react-router-dom"


import SimpleImageSlider from "react-simple-image-slider";

const images=[
  
  {url: "https://qph.cf2.quoracdn.net/main-qimg-9a4e9d6289c083c708a30be1e7435c84-lq"},
 
  {url:"https://www.oyorooms.com/blog/wp-content/uploads/2018/08/TILICHO-LAKE-min.jpg"},
  {url :"https://www.intrepidtravel.com/adventures/wp-content/uploads/2018/10/17.-Intrepid-Travel-nepal_kathmandu_stupa-bodnat-flowers-flag.jpg"},
];

const Featured = () => {

 const [openDate,setOpenDate]=useState(false)
  const [source,setSource]=useState("")
  const [destination,setDestination]=useState("")


  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const navigate =useNavigate()

  const handleSearch= () =>{
    navigate ("/items", {state:{source,destination,date}}) 

  }
  


  
  // const location = useLocation()
  // const [openDate,setOpenDate]=useState(false)
  // const [date,setDate]=useState(location.state.date)
  // const [source,setSource]=useState(location.state.source)
  // const [destination,setDestination]=useState(location.state.destination)

  return (
    <div className='feature'>
      <div className='features'>

      <div className='featuredImg'>
    
      

      
      <div >
        <SimpleImageSlider
          width={1200}
          height= {700}
          images={images}
          showBullets={true}
          showNavs={true}
        autoPlay={true}
        autoPlayDelay={4}
        />
        
      </div>
 
        </div>
      <div className='aSource'>
        <div className='bSource'>
          <div className='cSource'>
            <h1>Search</h1>
      <div className='featuredItem'>
        <label>Leaving From</label>
       <input placeholder='Source'
       onChange={e=>setSource(e.target.value)}/>
        </div>
        <div className='featuredItem'>
          <label>Going Destination</label>
          <input placeholder='Destination'
           onChange={e=>setDestination(e.target.value)}/>
        </div>
        <div className='featuredItem'>
        
      <label>Date</label>
      <span onClick={()=>setOpenDate(!openDate)} className="source">{`${format(date[0].startDate, "MM/dd/yyyy")} `}</span>
     {openDate && <DateRange
  editableDateInputs={true}
  onChange={item => setDate([item.selection])}
  moveRangeOnFirstSelection={false}
  ranges={date}
  className="aDate"
  minDate={new Date()}
/>}
        </div>
      </div>
      <div className="aSearch">
   <button className="search" onClick={handleSearch}>Search</button>
   </div>
   </div>

   </div>
   </div>


        </div>

  )
}

export default Featured