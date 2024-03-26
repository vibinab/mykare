import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Sign from './pages/Sign'

const App = () => {
  return (
    <Router>
      <Routes>
        {/* route for login page */}
        <Route path='/' element={<Sign/>} />
      </Routes>
    </Router>
  )
}

export default App