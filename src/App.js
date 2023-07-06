import {Route,Switch} from 'react-router-dom'
import Home from "./Pages/Home";
import About from './Pages/About';
import CartContextProvider from './Components/Context/CartContextProvider';
import Store from './Pages/Store';
import RootPage from './Pages/RootPage';
import ContactUs from './Pages/ContactUs';
import ProductDetails from './Components/Products/Product-details';


const App=()=> {
  return (
    <CartContextProvider>
      <Switch>
        <RootPage>
            <Route exact path='/'><Home/></Route>
            <Route path='/store'><Store/></Route>
            <Route path='/about'><About/></Route>
            <Route path='/contactus'><ContactUs/></Route>
            <Route path='/product-details/:productID'><ProductDetails/></Route>
        </RootPage>
      </Switch>
    </CartContextProvider>
  );
}

export default App;