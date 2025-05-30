import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Inicio from './components/Inicio.jsx'
import Planos from './components/Planos.jsx'
import Depoimentos from './components/Depoimentos.jsx'
import {createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Funcionalidades from "./components/funcionalidades.jsx"



const router = createBrowserRouter([{
  path:"/",
  element:<App/>,

  children:[
    {
      path: "/",
      element: <Inicio/>
    },
    {
      path:"Planos",
      element:<Planos/>
    },
    {
      path:"Depoimentos",
      element:<Depoimentos/>
    },
    {
      path:"Funcionalidades",
      element:<Funcionalidades/>
    },
   
  ]

},
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
