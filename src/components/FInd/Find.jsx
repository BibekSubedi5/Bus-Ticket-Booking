import "./find.css"




const Find = ({type}) => {
  
  return (
 
   <div>
        { type !=="items" && 
        <div className="find">
          <span>What's up</span>
          <span>😛</span>
        </div>
      
  }
 </div>
  )
}

export default Find