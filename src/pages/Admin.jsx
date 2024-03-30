import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Signin from '../components/SignIns';

const Admin = () => {
    // const [users, setUsers] = useState(Object.keys(localStorage));
    const [users, setUsers] = useState([])
   
    const [refresh, setRefresh] = useState(true);
    const navigate = useNavigate()
    const isadmin=  JSON.parse(localStorage.getItem("currentuser"))?.name=="admin"
    console.log("isadmin",isadmin)
   

    useEffect(() => {
       const getuserlist = JSON.parse(localStorage.getItem("registeredusers"))
       setUsers(getuserlist)
        // setUsers(Object.keys(localStorage))
    }, [refresh])

    

    const handleClick = (deleteuser) => {
        console.log("du",deleteuser)
        // localStorage.removeItem(user);
        const newdata= users.filter((user)=> user.name!==deleteuser)
        console.log("nd",newdata)
        localStorage.removeItem("registeredusers")
        localStorage.setItem("registeredusers", JSON.stringify(newdata))

        setRefresh(!refresh);
    }

    const handleSignOut =() => {
        localStorage.removeItem("currentuser")
        navigate("/")
    }

    if (!isadmin){
        return <Signin />
    }
    
    return (
        <div className='flex justify-center items-center w-full h-screen'>
            <button className='border rounded-lg px-3 font-semibold border-black hover:shadow-lg absolute top-2 right-2 transition-all text-white hover:shadow-gray-800 bg-blue-400' onClick={handleSignOut}>Sign Out</button>
 
            <table className=' bg-blue-400 text-white '>
                <thead className='border border-black '>
                    <tr>
                        <th className='border  border-black  px-10 py-2'>User Name</th>
                        <th className='px-10   '>Actions</th>
                    </tr>
                </thead>
                <tbody className='border  border-black '>
                    {
                       users.length>0 ? users?.map((user, i) => (
                            <tr key={i}>
                                <td className='border text-center py-2  font-semibold border-black  '>{user.name}</td>
                                <td className='text-center border  border-black'>
                                    <button className=' px-2 rounded-lg bg-red-700 text-white font-semibold' onClick={() => handleClick(user.name)}>Remove</button>
                                </td>
                            </tr>
                        )): (
                            <tr className='text-center' >
                                <td ><p className='text-center'>No data to show</p></td>
                            </tr>
                        )

                    }
                </tbody>
            </table>
        </div>
    )
}

export default Admin