import React, { useState } from 'react'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'

const Sign = () => {
    const [login, setLogin] = useState(true);
  return (
    <div className='w-full h-screen bg-gray-100 flex justify-center items-center'>
        {
            login ? <SignIn login={setLogin} /> : <SignUp login={setLogin}/>
        }
    </div>
  )
}

export default Sign