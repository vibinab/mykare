import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Sign from './pages/Sign'
import Home from './pages/Home'
import Admin from './pages/Admin'

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Sign/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/admin' element={<Admin/>} />
      </Routes>
    </Router>
  )
}

export default App