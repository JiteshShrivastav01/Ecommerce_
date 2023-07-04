import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import Home from "./Pages/Home";
import About from './Pages/About';
import RootPage from './Pages/RootPage';
import CartContextProvider from './Components/Context/CartContextProvider';



const App=()=> {
  const router=createBrowserRouter([
    {path:'/' , 
    element : <RootPage/> ,
    children : [
      {path:'/' , element: <Home/>},
      {path:'/About' , element : <About/>}
    ]}
  ])
  return (
      <CartContextProvider>
        <RouterProvider router={router}/>
      </CartContextProvider>
  );
}

export default App;