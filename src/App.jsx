import { useState } from 'react'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer'
import {Outlet} from 'react-router-dom';


function App() {


  return (
        <div className="d-flex flex-column min-vh-100">
    <Header/>
    <div className="flex-grow-1">
        <Outlet />
      </div>
    <Footer/>
      </div>
  )
}

export default App
