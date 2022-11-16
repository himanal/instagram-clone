

import React, { useContext, useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import FirebaseContext from '../context/firebase'
import background from'../images/backgroundinstagram.jpg'

const Login = () => {
    const {firebase} =useContext(FirebaseContext)

    const [ emailAddress, setEmailAddress]= useState('')
    const [ password, setPassword]= useState('')
    const [ erroe, setError]= useState('')
    const isInvalid = password===''|| emailAddress==='';
    const handleClick=()=>{
    
    }
    useEffect(()=>{
        document.title='login - instagram'
    },[])
  return (
  <div className='container flex min-w-full max-w-screen-md   item-center h-screen'>
    <div className='flex w-full'>
        <img src={background}  alt='instagram background' className='w-full'/>
    </div>

  </div>
  )
}

export default Login