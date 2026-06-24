// Pages 
import './App.css'

import AppRoutes from './routes/Routes'
import {  Routes, Route, BrowserRouter } from 'react-router-dom';
function App() {

  return (
    <BrowserRouter basename="/Aqavia-Task-6" >
      <AppRoutes/>
    </BrowserRouter>
  
  )
}

export default App
