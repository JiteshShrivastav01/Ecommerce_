import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import Home from "./Pages/Home";
import About from './Pages/About';



const App=()=> {
  const router=createBrowserRouter([
    {path:'/' , element: <Home/>},
    {path:'/About' , element : <About/>}
  ])
  return (
      <RouterProvider router={router}/>
  );
}

export default App;