import React from 'react'

const Signin = ({login}) => {
  return (
    <>
         <div className='xl:w-1/4 lg:w-1/3 md:w-1/3 sm:w-2/4 w-full mx-10 sm:mx-0  h-2/3 bg-blue-400 rounded-lg shadow-lg shadow-gray-500 flex justify-center flex-col items-center gap-8'>
                <div >
                    <h1 className='text-white text-2xl font-bold'>Sign In</h1>
                </div>
                <div >
                    <h1 className='text-white font-semibold mb-2'>email</h1>
                    <input type="text" className='rounded-lg px-3 py-1'  />
                </div>
                <div>
                    <h1 className='text-white font-semibold mb-2'>password</h1>
                    <input type="text" className='rounded-lg px-3 py-1'/>
                </div>
                <div>
                    <button className='font-semibold text-sm text-gray-700 ' onClick={() => login(true)}>already have an account</button>
                </div>
            </div>
    </>
  )
}

export default Signin