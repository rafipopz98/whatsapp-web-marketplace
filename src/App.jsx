import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from "./pages/Home"
import Login from './components/Login/Login'
import MarketPlace from './components/marketplace/MarketPlace'
import Details from './components/marketplace/Details'
import Group from './components/leftside/Group'
import Pay from './components/Pay/Pay'

const App = () => {
  return (
    <div>
    <Router>
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/login' element={<Login/>}/>
        <Route  path='/mp' element={<MarketPlace/>}/>
        <Route  path='/group' element={<Group/>}/>
        <Route  path='/pay' element={<Pay/>}/>
        <Route  path='/mp/detail' element={<Details/>}/>
      </Routes>
    </Router>
      {/* <Home /> */}

    </div>
  )
}

export default App