import {Route,Switch,Redirect} from 'react-router-dom'
import Home from "./Pages/Home";
import About from './Pages/About';
import Store from './Pages/Store';
import RootPage from './Pages/RootPage';
import ContactUs from './Pages/ContactUs';
import ProductDetails from './Components/Products/Product-details';
import Login from './Components/Login/Login'
import SignUP from './Components/Login/SignUp';


const App=()=> {

  return (
      <Switch>
        <RootPage>
            <Route exact path='/'><Home/></Route>
            <Route path='/store'><Store/></Route>
            <Route path='/about'><About/></Route>
            <Route path='/contactus'><ContactUs/></Route>
            <Route path='/product-details/:productID'><ProductDetails/></Route>
            <Route path='/login'><Login/></Route>
            <Route path='/signup'><SignUP/></Route>

            <Route path='*'><Redirect path='/'/></Route>
        </RootPage>
      </Switch>
  );
}

export default App;