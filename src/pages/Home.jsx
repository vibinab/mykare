import React from 'react'
import { useNavigate } from 'react-router-dom'
import Signin from '../components/SignIns';

const Home = () => {
  const navigate = useNavigate();
    const isuser=  JSON.parse(localStorage.getItem("currentuser"))?.name
  console.log("isuser",isuser)

  const handleSignOut =()=> {
    localStorage.removeItem("currentuser")
    navigate("/")
  }
  if (isuser=="admin" || isuser==undefined){
    return <Signin />
  }

  return (
    <div className='w-full flex justify-center items-center h-screen bg-blue-400'>
      <button className='border rounded-lg px-3 font-semibold border-black hover:shadow-lg absolute top-2 right-2 transition-all text-white hover:shadow-gray-800' onClick={handleSignOut}>Sign Out</button>
      <h1 className='font-extrabold text-white text-5xl'>Welcome {isuser}</h1>
    </div>
  )
}

export default Home