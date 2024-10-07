import React, { useContext, useEffect, useRef, useState} from "react"
import { validate } from "../utils/validate"
import Login from "./Login"
import { AppContext } from "../context/AppContext"
import { useNavigate } from "react-router-dom"

const SignUp = () => {
  const navigate = useNavigate();

  const {email, errorMessage, setErrorMessage, signupForm, setSignUpForm,  setSignupEmail} = useContext(AppContext);

  useEffect(() => {
    return setErrorMessage(null)
  }, [])

  const handleFormSubmission = () => {
    if (email.current.value === "") {
      setErrorMessage("Email is required")
      return
    }
    //validate the email
    const isEmailValid = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(
      email.current.value,
    )

    if (!isEmailValid) {
      setErrorMessage("Enter correct email")
      console.log(errorMessage)
      return
    }

    setSignUpForm(true)
    setSignupEmail(email.current.value);
    navigate("/signup")
  }

  
  return (
    <div className="absolute z-10 top-1/4 w-[40%] left-[30%] space-y-4 text-center">
      {/* description  */}
      <div>
        <p className="text-7xl text-white font-bold ">
          Unlimited movies, TV shows and more
        </p>
        <p className="text-xl text-white font-semibold ">
          Starts at ₹149. Cancel at any time.
        </p>
        <p className="text-xl text-white font-semibold pt-10">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
      </div>

      {/* from */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className={`flex gap-3 text-white justify-between items-center`}
      >
      {/* email input field / */}
        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="flex-1 border border-gray-500 bg-transparent px-5 py-5 rounded"
        />

        {/* submit button  */}
        <button
          className="w-1/3 py-5 bg-red-700 rounded font-bold text-xl"
          onClick={handleFormSubmission}
        >
          Get Started {">"}
        </button>
      </form>

      <p className="font-semibold text-red-500 text-lg text-start pl-2 ">
        {errorMessage}
      </p>
    </div>
  )
}

export default SignUp
