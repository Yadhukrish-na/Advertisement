import React from 'react'
import { Route, Routes } from "react-router-dom";
import HomePage from './Pages/Home/Home';


const Router = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<HomePage/>} > </Route>
    </Routes> 
    </div>
  )
}

export default Router


        
    
    

