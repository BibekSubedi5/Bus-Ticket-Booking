import { Link } from 'react-router-dom'
import './tour.css'


const Tour = () => {


  return (
    
    <Link to="notfound" style={{ color: "inherit", textDecoration: "none" }} >
    <div className='tourPackage'>
    <div className='tourUpdate'>
 
        <div className='tourPlace'>
        <h1>Tours Package Available</h1>
             <div className='tourSource'>
                <div className='tourDest1'>
                    <div className='aTour'>
                 <img src="https://bussewa.com/faces/designCollection/new-design/images/manakamana.jpg" alt="" 
                 className="pic" />
                 <h1>Gorkha </h1>
                 <h2>Manakamana Darshan</h2>
                 <span>Manakamana Devi temple is 
                    highly venerated
                    scared place of Hindu Goddess Bhagwati , an incarnation of 
                    parvati. It is beleived that the Goddess Bhagwati rewards 
                    those who make the pilgrimage to her shrine by granting their wishes.
                 </span>
                    </div>
                </div>
                <div className='tourDest2'>

                <div className='aTour'>
                 <img src="https://bussewa.com/faces/designCollection/new-design/images/bungy.jpg" alt="" 
                 className="pic" />
                 <h1>Sindhupalchowk</h1>
                 <h2>Bungey Nepal</h2>
                 <span>The Last Resort offers amazing adventures in spectacular settings, 
                  including the world famous bungy jump, the amazing new Tandem Swing , 
                  and thrilling White Water Rafting. The natural surroundings the spa make t
                  he resort also a great destination to those looking to just relax.......



                    
                 </span>
                    </div>
                    </div>   <div className='tourDest3'>
                    <div className='aTour'>
                 <img src="https://bussewa.com/faces/designCollection/new-design/images/kathmandu-paragliding.jpg" alt="" 
                 className="pic" />
                 <h1>Kathmandu</h1>
                 <h2>Kathmandu Paragliding</h2>
                 <span>Paragliding in Kathmandu -is now a reality. 
                  20 min,  flight at 2100m above sea level in Godavari with 15 yrs.
                   Panorama view of Highest  Peaks and Mountains. 
                  City and Valley View from Eagle Eye. Soar above the clouds. View of the only botanical garden of Nepal.
                 </span>
                    </div>
                    </div>
            </div>
        </div>
     
    </div>

        <div className='newsUpdate'>
            <div className='newsFlex'>
            <div className='newsTitle'>
                <h1>News And Updates</h1>
                < div className='newSpace'>
              


                    <h1>  
                      <li> Tour to India</li> </h1>
                    <h1>  <li> Jagdamba A/C Deluxe </li> </h1>
                     <h1>  <li>  Chitwan Safari Travel</li></h1>
                    <h1>     <li>  The Last Resort Bungy Nepal</li></h1>
                    <h1> 
                       <li> Buy directly from E-Sewa Zone at over 200 locations. </li></h1>
                   
                
               
                 <button >Browse all news And updates</button>

                </div>
            </div>
            <div className='newsPics'>
                <div className='picFlex'>
                    <img src="https://assets.traveltriangle.com/blog/wp-content/uploads/2019/02/durbar-square-e1557212740314.jpg" alt="" className="pic" />
                <img src="https://www.planetware.com/photos-large/IND/india-top-attractions-varanasi.jpg" alt="" className="pic" />
                </div>
                <div className='picsFlex'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b3/Ice_%26_sun_on_Gosaikunda_lake.jpg" alt="" className="pic" />
                <img src="https://bussewa.com/faces/designCollection/new-design/images/phewa-lake-pokhara.jpg" alt="" className="pic" />
                </div>
            </div>
            </div>

        </div>

        <div className='tourUpdate'>
            
                

        <div className='tourPlace'>
        <h1>Our Bus Feature</h1>
             <div className='tourSource'>
                <div className='tourDest1'>
                    <div className='aTour'>
                 <img src="https://bussewa.com/customer/bussewaUpload/MaitriBhagya_1575874717129_1582133390023.jpg" alt="" 
                 className="pic" />
                 <h1>MaitriBhagya Yatayat  </h1>
                 <h2>Pokhara Travels</h2>
               <span>
                <li>Wifi </li>
                <li> A/c and Fan system</li>
                <li> Music System </li>
                <li> Comfortable Seats</li>
                <li> First Aid Kits</li>
                <li>Mobile Charger </li>
                <li>Mineral Water </li>
                <li>Friendly Staff </li>
                <li>On Time deaparture </li>


                

               </span>
                    </div>
                </div>
                <div className='tourDest2'>

                <div className='aTour'>
                 <img src="https://bussewa.com/customer/bussewaUpload/namaste_kapilvastu_1575875010943_1582133227319.jpg" alt="" 
                 className="pic" />
                 <h1>Pokhara Travels  </h1>
                 <h2>Tourist Bus</h2>
               <span>
                <li>Wifi </li>
                <li> A/c and Fan system</li>
                <li> Music System </li>
                <li> LED TV</li>
                <li> COmfortable Seat</li>
                <li>Coffee </li>
                <li>Cold Drink </li>
                
                

                

               </span>
                    </div>
                    </div>   <div className='tourDest3'>
                    <div className='aTour'>
                 <img src="https://bussewa.com/customer/bussewaUpload/facebook_bus_1575875292105.jpg" alt="" 
                 className="pic" />
               <h1>Facebook Delux  </h1>
                 <h2>Normal Bus</h2>
               <span>
                <li>Wifi </li>
                <li> LED TV</li>
                <li> Comfortable Seats </li>
                <li> Air Cooler</li>
                <li> Passenger Insurance</li>
                <li>Mobile Charger </li>
                <li>Mineral Water </li>
                


                

               </span>
                    </div>
                    </div>
            </div>
        </div>
            

        </div>
    </div>
    </Link>
  )
}

export default Tour