import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import Sign from './pages/Sign'
import SignIn from "./components/SignIn";
import Home from './pages/Home'
import Admin from './pages/Admin'
import SignUp from './components/SignUp';


const App = () => {

  

  return (
    <Router>
      <Routes>
        <Route path='/' element={ <SignIn/>} />
         <Route path='/signup' element={<SignUp />}/>
        <Route path='/home' element={<Home/>} />
        <Route path='/admin' element={<Admin/>} />
      </Routes>
    </Router>
  )
}

export default App