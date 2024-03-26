import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Admin = () => {
    const [users, setUsers] = useState(Object.keys(localStorage));
    const [refresh, setRefresh] = useState(true);
    const navigate = useNavigate()

    useEffect(() => {
        setUsers(Object.keys(localStorage))
    }, [refresh])

    const handleClick = (user) => {
        localStorage.removeItem(user);
        setRefresh(!refresh);
    }
    return (
        <div className='flex justify-center items-center w-full h-screen'>
            <button className='border rounded-lg px-3 font-semibold border-black hover:shadow-lg absolute top-2 right-2 transition-all text-white hover:shadow-gray-800 bg-blue-400' onClick={() => navigate('/')}>Sign Out</button>
 
            <table className=' bg-blue-400 text-white '>
                <thead className='border border-black '>
                    <tr>
                        <th className='border  border-black  px-10 py-2'>User Name</th>
                        <th className='px-10   '>Actions</th>
                    </tr>
                </thead>
                <tbody className='border  border-black '>
                    {
                        users.map((user, i) => (
                            <tr key={i}>
                                <td className='border text-center py-2  font-semibold border-black  '>{user}</td>
                                <td className='text-center border  border-black'>
                                    <button className=' px-2 rounded-lg bg-red-700 text-white font-semibold' onClick={() => handleClick(user)}>Remove</button>
                                </td>
                            </tr>
                        ))

                    }
                </tbody>
            </table>
        </div>
    )
}

export default Admin