import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from "./pages/Home"
import Login from './components/Login/Login'
import MarketPlace from './components/marketplace/MarketPlace'

const App = () => {
  return (
    <div>
    <Router>
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/login' element={<Login/>}/>
        <Route  path='/mp' element={<MarketPlace/>}/>
      </Routes>
    </Router>
      {/* <Home /> */}

    </div>
  )
}

export default App