import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from "./pages/Home"
import Login from './components/Login/Login'
import MarketPlace from './components/marketplace/MarketPlace'
import Details from './components/marketplace/Details'
import Group from './components/leftside/Group'
import Pay from './components/Pay/Pay'
import MarketPlaceConfigForm from './components/MarkwtPLaceForm/MarketPlaceConfigForm'
import SellItem from './components/MarkwtPLaceForm/SellItem'

const App = () => {
  return (
    <div>
    <Router>
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/login' element={<Login/>}/>
        <Route  path='/mp/:groupID' element={<MarketPlace/>}/>
        <Route  path='/group' element={<Group/>}/>
        <Route  path='/pay' element={<Pay/>}/>
        <Route  path='/mp/detail' element={<Details/>}/>
        <Route  path='/mp/form/:groupID' element={<MarketPlaceConfigForm/>}/>
        <Route  path='/mp/add/:groupID' element={<SellItem/>}/>
      </Routes>
    </Router>
      {/* <Home /> */}

    </div>
  )
}

export default App