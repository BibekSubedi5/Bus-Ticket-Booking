import './seat.css'
import ChairIcon from '@mui/icons-material/Chair';
import ChairOutlinedIcon from '@mui/icons-material/ChairOutlined';
import ChairTwoToneIcon from '@mui/icons-material/ChairTwoTone';
import Slider from '../slider/Slider';

const Seat = () => {
  return (
    <div className='seat'>
    
<div  className='flex'> 
<div className='aFlex'>
   

  

  <div className='selected'>
    <span>
      <ChairOutlinedIcon/>
      <span>Available</span>
    </span>

    <span>
        <ChairIcon/>
     <span>Booked</span>
     </span> 
      
    <span>
        <ChairTwoToneIcon/>
        <span>Selected</span>
     </span>
   

  </div>

        <div className='seats'>

        <div className='aSeat'>
            <div className='cSeat'>
           <ChairIcon/> <ChairIcon/>
         
            
            </div>
              <div className='cSeat'>
           <ChairIcon/> <ChairIcon/>
           
            
            </div>
            <div className='cSeat'>
           <ChairIcon/> <ChairIcon/>
           
            
            </div>     <div className='cSeat'>
           <ChairIcon/> <ChairIcon/>
           
            
            </div>     <div className='cSeat'>
           <ChairIcon/> <ChairIcon/>
           
            
            </div>     <div className='cSeat'>
           <ChairIcon/> <ChairIcon/>
           
            
            </div>

        </div>
        <div className='bSeat'>
        <div className='cSeat'>
           <ChairIcon/> <ChairIcon/>
           
            
            </div>
            <div className='cSeat'>
           <ChairIcon/> <ChairIcon/>
           
            
            </div>
            <div className='cSeat'>
           <ChairIcon/> <ChairIcon/>
           
            
            </div>
            <div className='cSeat'>
           <ChairIcon/> <ChairIcon/>
           
            
            </div>
            <div className='cSeat'>
           <ChairIcon/> <ChairIcon/>
           
            
            </div>
            <div className='cSeat'>
           <ChairIcon/> <ChairIcon/>
           
            
            </div>
            <div className='cSeat'>
           <ChairIcon/> <ChairIcon/>
           
            
            </div>


        </div>
  </div>

        
        <div className='Book'>
          <div className='aBook'>
          <span> Selected Seat(s):</span>
       <span> Total Prize: NPR</span>
          </div>
        <button>Book Now</button>    

        </div>
</div>


<div className='bFlex'>
    <Slider/>
</div>
</div>


    </div>
  )
}

export default Seat