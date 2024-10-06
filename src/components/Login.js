import React, { useState } from 'react'

const Login = () => {
  const [rememberMe, setRememberMe] = useState(true);
  function handleChange(e) {
    setRememberMe(!e.target.checked);
    console.log(rememberMe)
 }
  const submitform = () => {
    console.log("submit form from Login");
  }
  
  return (
    <div className="absolute z-10 top-[15%] w-[30%] left-[35%] space-y-4 flex justify-center items-center  text-white bg-[#0000009d]">

      {/* content  */}
      <div className='w-3/4 py-12 flex flex-col gap-4'>
        {/* heading  */}
        <h1 className='text-4xl font-bold tracking-wide mb-8'>Sign In</h1>

        {/* form  */}
        <form className='flex flex-col gap-5 text-white'>
            <input type='email' placeholder='Email Address' className='flex-1 border border-gray-500 bg-transparent px-5 py-5 rounded' />
            <input type='password' placeholder='Password' className='flex-1 border border-gray-500 bg-transparent px-5 py-5 rounded' />

            {/* signin button  */}
            <div className='flex-1 bg-red-700 text-center rounded-md py-4 font-bold tracking-wide text-lg'>Sign In</div>
        </form>


        <p className='text-center text-lg'>OR</p>

        {/* signin using google  */}
        <div className='flex-1 py-3 text-center text-white  bg-[#dbdbdb39] rounded-md'><span className='text-white opacity-100'>Sign In Using Google</span></div>

        {/* forgot password  */}
        <p className='text-center hover:text-gray-300 text-lg hover:cursor-pointer hover:underline'>Forgot password?</p>

        {/* check box  */}
        <div className='flex gap-3 items-center'>
        <input value = "false" type = "checkbox" onChange = {handleChange} className='w-4 h-4'/>
         <p className='text-lg'> Remember Me</p> 
        </div>

          {/* signup now  */}
        <p className='text-lg'> New to Netflix? <span className='text-center hover:text-gray-300 text-lg hover:cursor-pointer hover:underline'>Sign up now</span></p>

        <p className='text-sm mt-2'> This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className='text-center text-blue-700 hover:text-gray-300 text-lg hover:cursor-pointer hover:underline'>Learn more. </span> </p>
      </div>
    </div>
  )
}

export default Login