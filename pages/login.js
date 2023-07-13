import Link from 'next/link'
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { setUserData,setUserToken } from '@/reducer/UserSlice';

import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const login = () => {
  const[name,setName] = useState();
  const[email,setEmail] = useState();
  const[password,setPassword] = useState();


  const rstate = useSelector((state) => state.user);
  const dispatch = useDispatch();

  console.log(rstate);

  const router = useRouter();

  useEffect(() => { 
      if(localStorage.getItem('token')){
        router.push('/')
      }
  },[])



  const handelChange = (e) => { 

   if(e.target.name == "email"){
    setEmail(e.target.value);
    }
   else if(e.target.name == "password"){
    setPassword(e.target.value);
    }

  }
  const handelSubmit = async (e) => { 
      e.preventDefault()
      const data = {email,password}
     
    console.log(data);

  try{
      const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/login`,{
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
     
      
     
      if(result.code == 200){
        localStorage.setItem('token',result.tokenweb);
        dispatch(setUserData({email:result.email,username:result.username}));
        dispatch(setUserToken(result.tokenweb));
        setEmail('')
        setPassword('')
        toast("Login Successfully");
        router.push('/')
      }else{
        toast.error("Something wrong on server");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something wrong on server");
    }
  }
  return (
    <div>
      <ToastContainer/>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=pink&shade=600" alt="Your Company"/>
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6"  onSubmit={handelSubmit} method="POST">
      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div className="mt-2">
          <input onChange={handelChange} value={email} id="email" name="email" type="email" autocomplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
          <div className="text-sm">
            <a href="#" className="font-semibold text-pink-600 hover:text-pink-500">Forgot password?</a>
          </div>
        </div>
        <div className="mt-2">
          <input onChange={handelChange} value={password} id="password" name="password" type="password" autocomplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-pink-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600">Sign in</button>
      </div>
    </form>

    <p className="mt-10 text-center text-sm text-gray-500">
      Not a member?
      <Link href={'/signup'} className="font-semibold leading-6 text-pink-600 hover:text-pink-500">Please Sign Up</Link>
    </p>
  </div>
</div>
    </div>
  )
}

export default login