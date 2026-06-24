// Pages 
import './App.css'

import AppRoutes from './routes/Routes'
import { HashRouter } from 'react-router/dist/development'
function App() {

  return (
    <HashRouter>
      <AppRoutes/>
    </HashRouter>
  
  )
}

export default App
