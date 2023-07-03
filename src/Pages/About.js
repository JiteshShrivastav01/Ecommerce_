import MainNavbar from "../Components/Header/MainNavbar"
import AboutContent from '../Components/About/AboutContent'
import MainFooter from "../Components/Header/MainFooter"
import CartContextProvider from "../Components/Context/CartContextProvider"

const About=()=>{
    return(
        <CartContextProvider>
          <MainNavbar/>
          <AboutContent/>
          <MainFooter/>
        </CartContextProvider>
    )
}

export default About