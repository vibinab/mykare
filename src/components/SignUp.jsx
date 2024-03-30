import React, { useState ,useEffect} from 'react'
import { NavLink ,useNavigate } from 'react-router-dom'

const SignUp = () => {
  const navigate= useNavigate()

  
  
  // const dummydata= [ 
  //   {
  //     name:"vibin",
  //     email:"abvibin4@gmail.com",
  //     password:"tds",
  //     confirmpassword:"tds"
  //   },
  //   {
  //     name:"jithin",
  //     email:"jithin@gmail.com",
  //     password:"hello",
  //     confirmpassword:"hello"
  //   },

  // ]

  const [userData, setUserData] = useState({
    name:"",
    email:"",
    password:"",
    confirmpassword:""
  }) 

  const [errorData, setErrorData]= useState({
      name:"",
      email:"",
      password:"",
      confirmpassword:"",
  }) 
  const [ success, setSuccess] = useState("")

  const handleInput= (e) => {
    console.log(e.target.name)
    console.log(e.target.value)
    setUserData( {
      ...userData,
      [e.target.name]:e.target.value

    })
  }

  const submitHandler=(e)=> {
   e.preventDefault()

    let initalError= {
      name:"",
      email:"",
      password:"",
      confirmpassowrd:""
    }

    // const existinguser= dummydata.find((user)=>user.email==userData.email)
    // console.log("ff",existinguser)
    // if(existinguser){
    //   setErrorData({
    //     ...initalError,
    //     email:"user already exit"
    //   })
    //   return
    // }

    if(!userData.name){
      setErrorData( {
        ...initalError,
        name:"Name is required"
      })
      return;
    }
    if(!userData.email){
      setErrorData({
        ...initalError,
        email:"Email is required"

      })
      return
    }
    if (!userData.password){
      setErrorData({
        ...initalError,
        password:"Password cannot be blank"
      })
      return

    }
    if(!userData.confirmpassword){
      setErrorData({
        ...initalError,
        confirmpassword:"please enter passowrd"
      })
      return
    }
    if(userData.password!==userData.confirmpassword){
      setErrorData({
        ...initalError,
        confirmpassword:"password doesnot match"

      })
      return
    }

        const registeredusers= JSON.parse(localStorage.getItem("registeredusers"))||[]
        if (registeredusers.find((user)=> user.name==userData.name)){
          setErrorData({
            ...initalError,
            name:"User name already taken"
          })
          return 
        }
        else {
            const adduserdata= {
              name:userData.name,
              email:userData.email,
              password:userData.password
            }
            registeredusers.push(adduserdata)

            // localStorage.setItem("currentuser",JSON.stringify(adduserdata))
            localStorage.setItem("registeredusers", JSON.stringify(registeredusers))
        }

        setErrorData(initalError)
        setSuccess(" User Successfully Registered")
        setTimeout(()=> {
          navigate("/")
        },3000)

        
  }





  return (
    <div className=" flex w-full h-screen justify-center items-center" style={{backgroundColor:"gray"}}>
      <div className="bg-white py-10 px-10 rounded-3xl"  >
        {
          success && (
            <div className="text-green-500 text-center">{success}</div>
          )
        }
        <h1 className="text-xl text-center font-semibold">Register</h1>
        <form onSubmit={submitHandler}>
        <div class="mt-4">
          <input 
          type="text" 
          name="name"
          value={userData.name}
          placeholder='full name'
          className='w-full border-2 border-gray-100 rounded-xl p-1 mt-1 bg-transparent'
          onChange={(e)=>handleInput(e)}
          
          />
          <p class="text-red-500">{errorData.name}</p>
        </div>
        <div class="mt-4" >
          <input 
          type="text"
          name="email"
          value={userData.email}
          placeholder='Enter your Email'
          className='w-full border-2 border-gray-100 rounded-xl p-1 mt-1 bg-transparent'
          onChange={(e)=>handleInput(e)}
          />
          <p class="text-red-500">{errorData.email}</p>

          </div>
          <div class="mt-4">
            <input 
            type="password" 
            name="password"
            value={userData.password}
            placeholder='Password' 
            className='w-full border-2 border-gray-100 rounded-xl p-1 mt-1 bg-transparent'
            onChange={(e)=> handleInput(e)}

            />
          <p class="text-red-500">{errorData.password}</p>

          </div>
          <div class="mt-4">
            <input 
            type="password" 
            name="confirmpassword"
            value={userData.confirmpassword}
            placeholder='Confirm Password'
            className='w-full border-2 border-gray-100 rounded-xl p-1 mt-1 bg-transparent'
            onChange={(e)=>handleInput(e)}
      />
          <p className="text-red-500">{errorData.confirmpassword}</p>

          </div>
          <div class="mt-4">
            <button className="w-full bg-violet-500 text-white text-md font-bold py-1">Sign Up</button> 
          </div>
          <div className="mt-4 flex justify-center items-center">
            <p className="font-medium text-base mr-4">Already have account </p>
            <NavLink to="/">Sign In</NavLink>
          </div>
          </form>
      </div>

    </div>
  )
}

export default SignUp