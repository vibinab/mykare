import React, { useState } from 'react'
import { NavLink,useNavigate } from 'react-router-dom'

const SignIn = () => {
  const navigate= useNavigate(); 
  const [userlogin, setUserLogin] = useState({
      name:"",
      password:""
  })

  const [error, setError] = useState({
    name:"",
    password:""

  })

  const [isadmin, setIsAdmin]= useState(false)

  const handlelogin=(e)=> {
    console.log(e.target.name) 
    console.log(e.target.value)
    setUserLogin({
        ...userlogin,
        [e.target.name]:e.target.value
    })

  }

  const loginSubmit=(e)=> {
    e.preventDefault()
    console.log("user login",userlogin)
    // const isadmin= userlogin.email="admin" && userlogin.password="admin";
    if (userlogin.name=="admin" && userlogin.password=="admin"){
        // console.log("exdee")
        const admindata= {
            name:userlogin.name,
            email:"admin@gmail.com",
            password:userlogin.password
          }
        localStorage.setItem("currentuser", JSON.stringify(admindata))
        navigate("/admin")
    }

    let inital= {
        name:"",
        password:""
    }
    if(!userlogin.name){
        console.log("no suer")
        setError({
                ...inital,
                name:"please enter your username"
        })
        return 
    } 

    if(!userlogin.password){
        console.log("no pass")
        setError({
            ...inital,
            password:"please enter password"
        })
        return
    }

    

    
    
    const getUserList= JSON.parse(localStorage.getItem("registeredusers"))||[]
    const checkuser= getUserList.find((user)=> user.name==userlogin.name && user.password==userlogin.password)

   
    if(checkuser){
       localStorage.setItem("currentuser", JSON.stringify(checkuser))
        navigate("/home")
    }
    else {
        setError({
            ...inital,
            name:"Invalid user name or passowrd"
        })
    }
    
    

  }

  return (
    <div className='flex w-full h-screen' style={{backgroundColor:"gray"}}>
        <div className='w-full flex items-center justify-center'> 
        <div className='bg-white px-10 py-10 rounded-3xl'>
         <h1 className='text-2xl font-semibold text-center'>Login Here</h1>
         <div className='mt-4'>
            <form onSubmit={loginSubmit}>
            <div>
                <label className='text-md font-medium'>User name</label>
                <input 
                name="name"
                value={userlogin.name}
                className='w-full border-2 border-gray-100 rounded-xl p-2 mt-1 bg-transparent'
                type="text"
                placeholder='Enter your username'
                onChange={(e)=>handlelogin(e)}
                
                />
            <p class="text-red-500">{error.name}</p>
            </div>
            <div className='mt-2'>
                <label className='text-md font-medium'>Password</label>
                <input 
                value={userlogin.password}
                name="password"
                className='w-full border-2 border-gray-100 rounded-xl p-2 mt-1 bg-transparent'
                type="password"
                placeholder="Enter your Password"
                onChange={(e)=>handlelogin(e)}
                
                />
            <p className="text-red-500">{error.password}</p>
            </div>
            <div className='mt-4 text-center'>
                <button className='py-2 w-full  rounded-xl bg-violet-500 text-white text-md font-bold '>Sign In</button>
            </div>
            <div className='mt-4 flex justify-center items-center'>
                <p className='font-medium text-base mr-2'>Don't have an account</p>
                <NavLink to="/signup">Sign Up</NavLink>
                
            </div>
            </form>
         </div>
        </div>
        </div>
    </div>
  )
}

export default SignIn