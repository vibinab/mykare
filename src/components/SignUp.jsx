import React, { useState } from 'react'

const SignUp = ({login}) => {
    const [userName, setuserName] = useState("");
    const [password, setPassword] = useState("");
    const [rePass, setRePass] = useState("");

    const handleClick = () => {
        if (!userName || !password || !rePass) {
            alert("inputs cannot be empty");
        } else {
            if (rePass != password) {
                alert("passwords are not same ");
            } else {
              const exist = localStorage.getItem(`${userName}`);
              if (exist) {
                alert("already you have an account");
              } else {
                localStorage.setItem(`${userName}`, password);
                login(true)
              }
            }
        }
    }
  return (
    <>
         <div className='xl:w-1/4 lg:w-1/3 md:w-1/3 sm:w-2/4 w-full mx-10 sm:mx-0  h-2/3 bg-blue-400 rounded-lg shadow-lg shadow-gray-500 flex justify-center flex-col items-center gap-8'>
                <div >
                    <h1 className='text-white text-2xl font-bold'>Sign Up</h1>
                </div>
                <div >
                    <h1 className='text-white font-semibold mb-2'>UserName</h1>
                    <input type="text" value={userName} className='rounded-lg px-3 py-1' onChange={(e) => setuserName(e.target.value)}  />
                </div>
                <div>
                    <h1 className='text-white font-semibold mb-2'>Password</h1>
                    <input type="text" value={password} className='rounded-lg px-3 py-1' onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <h1 className='text-white font-semibold mb-2'>Re Enter Password</h1>
                    <input type="text" className='rounded-lg px-3 py-1' onChange={(e) => setRePass(e.target.value)}/>
                </div>
                <button className='border rounded-lg px-2 font-semibold text-gray-700 hover:shadow-lg hover:shadow-gray-700 transition-all bg-white ' onClick={handleClick}>Sing Up</button>
                <div>
                    <button className='font-semibold text-sm text-gray-700 ' onClick={() => login(true)}>Already have an account</button>
                </div>
            </div>
    </>
  )
}

export default SignUp