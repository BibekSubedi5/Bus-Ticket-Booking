import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Mail from '../../components/mail/Mail'
import Navbar from '../../components/NavBar/Navbar'
import  './notfound.css'

const Notfound = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <div className='aNot'>
          <h1>
              404 not found !
              </h1>

        </div>
    {/* <Mail/>
    <Footer/> */}
    </div>
  )
}


export default Notfound