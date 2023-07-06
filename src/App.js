import {Route} from 'react-router-dom'
import Home from "./Pages/Home";
import About from './Pages/About';
import CartContextProvider from './Components/Context/CartContextProvider';
import Store from './Pages/Store';
import RootPage from './Pages/RootPage';
import ContactUs from './Pages/ContactUs';



const App=()=> {
  // const router=createBrowserRouter([
  //   {path:'/' , 
  //   element : <RootPage/> ,
  //   children : [
  //     {path:'/' , element: <Home/>},
  //     {path:'/store' , element : <Store/>},
  //     {path:'/About' , element : <About/>}
  //   ]},
  // ])
  return (

      <CartContextProvider>
        {/* <RouterProvider router={router}/> */}

        <RootPage>
            <Route exact path='/'><Home/></Route>
            <Route path='/store'><Store/></Route>
            <Route path='/about'><About/></Route>
            <Route path='/contactus'><ContactUs/></Route>
        </RootPage>

      </CartContextProvider>
  );
}

export default App;