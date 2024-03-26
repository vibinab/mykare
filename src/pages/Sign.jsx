import React, { useState } from 'react'
import Login from '../components/Login';
import Signin from '../components/Signin';

const Sign = () => {
    const [login, setLogin] = useState(true);
  return (
    <div className='w-full h-screen bg-gray-100 flex justify-center items-center'>
        {
            login ? <Login login={setLogin} /> : <Signin login={setLogin}/>
        }
    </div>
  )
}

export default Sign