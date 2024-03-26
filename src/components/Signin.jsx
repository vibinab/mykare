import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SignIn = ({ login }) => {
    const [userName, setuserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleClick = () => {
        if (!userName || !password) {
            alert("inputs cannot be empty");
        } else {
            if (userName == "admin" && password == "admin") {
                navigate('/admin')
            } else {
                const exist = localStorage.getItem(`${userName}`);
                if (!exist) {
                    alert("you dont have an account");
                } else {
                    if (exist != password) {
                        alert("incorrect password");
                    } else {
                        navigate('/home')
                    }
                }
            }
        }
    }

    return (
        <>
            <div className='xl:w-1/4 lg:w-1/3 md:w-1/3 sm:w-2/4 w-full mx-10 sm:mx-0  h-2/3 bg-blue-400 rounded-lg shadow-lg shadow-gray-500 flex justify-center flex-col items-center gap-8'>
                <div >
                    <h1 className='text-white text-2xl font-bold'>Sign In</h1>
                </div>
                <div >
                    <h1 className='text-white font-semibold mb-2'>UserName</h1>
                    <input type="text" value={userName} className='rounded-lg px-3 py-1' onChange={(e) => setuserName(e.target.value)} />
                </div>
                <div>
                    <h1 className='text-white font-semibold mb-2'>Password</h1>
                    <input type="text" value={password} className='rounded-lg px-3 py-1' onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className='border rounded-lg px-2 font-semibold text-gray-700 hover:shadow-lg hover:shadow-gray-700 transition-all bg-white ' onClick={handleClick}>Sing In</button>
                <div>
                    <button className='font-semibold text-sm text-gray-700 ' onClick={() => { login(false) }}>Create an account</button>
                </div>
            </div>
        </>
    )
}

export default SignIn