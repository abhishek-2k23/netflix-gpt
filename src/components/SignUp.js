import React from 'react'
import Header from './Header'
import bgImage from '../asset/bgImage.jpg'

const SignUp = () => {

    const submitform = () => {
        console.log("button for submitform")
    }
  return (
      <div className="absolute z-10 top-1/4 w-[40%] left-[30%] space-y-4 text-center">
        <p className="text-7xl text-white font-bold ">Unlimited movies, TV shows and more</p>
        <p className="text-xl text-white font-semibold ">Starts at ₹149. Cancel at any time.</p>
        <p className="text-xl text-white font-semibold pt-10">Ready to watch? Enter your email to create or restart your membership.</p>

        {/* from */}
        <form className='flex gap-3 text-white justify-between items-center'>
            <input type='email' placeholder='Email Address' className='flex-1 border border-gray-500 bg-transparent px-5 py-5 rounded' />
            <div onClick={submitform} className='w-1/3 py-5 bg-red-800 rounded font-bold text-xl'>Get Started {">"}</div>
        </form>
      </div>
  )
}

export default SignUp