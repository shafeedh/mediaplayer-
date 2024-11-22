import { useState } from 'react'
import './App.css'
import Landing from './Folder/Landing'
import Home from './Folder/Home'
import History from './Folder/History'
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} theme="colored"/>
       

   <Header/>

   <Routes>
    <Route element={<Landing/>} path='/' />
    
    <Route element={<Home/>} path='/home' />
    <Route element={<History/>}path='/history' />
      
      
   </Routes>
    
  <Footer/>
    </>
  )
}

export default App
