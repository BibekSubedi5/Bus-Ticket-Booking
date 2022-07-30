import { Link } from 'react-router-dom'
import './footer.css'



const Footer = () => {

  return (

<Link  to="notfound" style={{color:"inherit", textDecoration:"none"}}>
    <div className='footer'>
        <div className="fLists">
            <ul className='fList'>
                <li className='fListItem'>
                  <span className='see'>ABOUT US</span></li>
                <li className='fListItem'>
                  <button className='click' >About</button></li>
                <li className='fListItem'>Reviews</li>
                <li className='fListItem'>FAQS</li>
                <li className='fListItem'>Contact</li>
            </ul>
          
            <ul className='fList'>
                <li className='fListItem'>USEFUL LINKS</li>
                <li className='fListItem'>Holiday</li>
                <li className='fListItem'>Blog</li>
                <li className='fListItem'>Tours</li>
            </ul>
            <ul className='fList'>
                <li className='fListItem'>TOP ROUTES</li>
                <li className='fListItem'>Kathmandu-Pokhara</li>
                <li className='fListItem'>Kathmandu-Chitwan</li>
                
            </ul>
            <ul className='fList'>
                <li className='fListItem'>STAY CONNECTED</li>
                <li className='fListItem'>GET THE APP</li>
                <li className='fListItem'>TOP ROUTES</li>
                <li className='fListItem'>STAY CONNECTED</li>
            </ul>
         </div>
         <div className='fText'> copyright Ⓒ 2022 all right reserved</div>
    </div>
</Link>
 
  )
}

export default Footer