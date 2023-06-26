import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const signup = () => {
  const[name,setName] = useState();
  const[email,setEmail] = useState();
  const[password,setPassword] = useState();
  const router = useRouter();
  useEffect(() => { 
    if(localStorage.getItem('token')){
      router.push('/')
    }
},[])

  const handelChange = (e) => { 
    if(e.target.name == "name"){
      setName(e.target.value);
    }
   else if(e.target.name == "email"){
    setEmail(e.target.value);
    }
   else if(e.target.name == "password"){
    setPassword(e.target.value);
    }

  }
  const handelSubmit = async (e) => { 
      e.preventDefault()
      const data = {name,email,password}
      console.log(data)

  try{
      const response = await fetch('http://localhost:3000/api/signup', {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
      if(result.success == true){
        toast.success("Account created successfully")
      }
      console.log(result);
    } catch (error) {
      console.error("Error:", error);
    }
  }


  return (
    <div>
      <ToastContainer/>
       <div>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=pink&shade=600" alt="Your Company"/>
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" method="POST" onSubmit={handelSubmit}>
      <div>
        <label for="Username" className="block text-sm font-medium leading-6 text-gray-900">Username </label>
        <div className="mt-2">
          <input value={name} onChange={handelChange} id="Username" name="name" type="text" autocomplete="Username" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div className="mt-2">
          <input value={email} onChange={handelChange} id="email" name="email" type="email" autocomplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
      <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Password</label>

        <div className="mt-2">
          <input value={password} onChange={handelChange} id="password" name="password" type="password" autocomplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-pink-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600">Sign Up</button>
      </div>
    </form>

    <p className="mt-10 text-center text-sm text-gray-500">
      Already Member Please Login?
      <Link href={'/login'} className="font-semibold leading-6 text-pink-600 hover:text-pink-500">Login Here..</Link>
    </p>
  </div>
</div>
    </div>
    </div>
  )
}

export default signup