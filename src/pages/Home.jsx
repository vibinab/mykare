import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className='w-full flex justify-center items-center h-screen bg-blue-400'>
      <button className='border rounded-lg px-3 font-semibold border-black hover:shadow-lg absolute top-2 right-2 transition-all text-white hover:shadow-gray-800' onClick={() => navigate("/")}>Sign Out</button>
      <h1 className='font-extrabold text-white text-5xl'>Welcome</h1>
    </div>
  )
}

export default Home