import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import Sign from './pages/Sign'
import SignIns from "./components/SignIns";
import Home from './pages/Home'
import Admin from './pages/Admin'
import SignUp from './components/SignUp';


const App = () => {

  

  return (
    <Router>
      <Routes>
        <Route path='/' element={ <SignIns/>} />
         <Route path='/signup' element={<SignUp />}/>
        <Route path='/home' element={<Home/>} />
        <Route path='/admin' element={<Admin/>} />
      </Routes>
    </Router>
  )
}

export default App