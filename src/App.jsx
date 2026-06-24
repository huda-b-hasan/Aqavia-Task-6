// Pages 
import './App.css'

import AppRoutes from './routes/Routes'
import { HashRouter, Routes, Route } from 'react-router-dom';
function App() {

  return (
    <HashRouter>
      <AppRoutes/>
    </HashRouter>
  
  )
}

export default App
