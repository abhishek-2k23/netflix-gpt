import React, { useContext, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { AppContext } from "../context/AppContext"
import useLoginUser from "../hooks/useLoginUser"

const Login = () => {
  const navigate = useNavigate()
  const {
    email,
    password,
    name,
    errorMessage,
    setErrorMessage,
    rememberMe,
    setRememberMe,
    isSignupForm,
    setIsSignUpForm,
    signupEmail,setSignupEmail
  } = useContext(AppContext)
  
  const {handleChange, handleSubmitForm, handleGoogleLogin} = useLoginUser();

  //check the pathname
  const { pathname } = useLocation()

  useEffect(() => {
    setIsSignUpForm(pathname === "/signup")
    setErrorMessage(null)
  }, []);

  //toggle the form
  const toggle = () => {
    if (isSignupForm) {
    
      navigate("/login")
    } else {
      navigate("/signup")
    }
    setIsSignUpForm(!isSignupForm)
  }

  return (
    <div className="absolute z-10 top-[15%] md:top-[8%] w-11/12 md:w-[30%] left-[4.5%] md:left-[35%] md:space-y-4 flex justify-center items-center  text-white bg-[#0000009d] rounded-md">
      {/* content  */}
      <div className="px-4 md:px-0 md:w-3/4 pt-5 md:py-12 flex flex-col gap-2 md:gap-4">
        {/* heading  */}
        <h1 className="text-2xl md:text-4xl font-bold md:font-bold tracking-wide mb-2 md:mb-6">
          {isSignupForm ? "Sign up" : "Log in"}
        </h1>

        {/* form  */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-3 md:gap-5 text-white"
        >
          {isSignupForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="flex-1 border border-gray-500 bg-transparent px-5 py-3 md:py-5 rounded"
            />
          )}
          <input
            ref={email}
            type="email"
            value={signupEmail && signupEmail }
            onChange={(e) => setSignupEmail(e.target.value)}
            placeholder="Email Address"
            className="flex-1 border border-gray-500 bg-transparent px-5 py-3 md:py-5 rounded"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="flex-1 border border-gray-500 bg-transparent px-5 py-3 md:py-5 rounded"
          />

          {/* Error message */}
          {errorMessage != null && (
            <p className="pl-5 text-red-500 font-semibold text-lg">
              {errorMessage}
            </p>
          )}
          {/* signin button  */}
          <button
            className="flex-1 bg-red-700 text-center rounded-md py-3 md:py-4 font-bold tracking-wide md:text-lg"
            onClick={handleSubmitForm}
          >
            {isSignupForm ? "Sign up" : "Log in"}
          </button>
        </form>

        <p className="text-center md:text-lg">OR</p>

        {/* signin using google  */}
        <div onClick={handleGoogleLogin} className="flex-1 py-3 text-center text-white  bg-[#dbdbdb39] rounded-md">
          <span className="text-white opacity-100">
            {isSignupForm ? "Sign up Using Google" : "Sign In Using Google"}
          </span>
        </div>

        {/* forgot password  */}
        {!isSignupForm && (
          <p className="text-center hover:text-gray-300 md:text-lg hover:cursor-pointer hover:underline">
            Forgot password?
          </p>
        )}

        {/* check box  */}
        {!isSignupForm && (
          <div className="flex gap-3 items-center">
            <input
              value="false"
              type="checkbox"
              onChange={handleChange}
              className="md:w-4 w-3 h-3 md:h-4"
            />
            <p className="md:text-lg"> Remember Me</p>
          </div>
        )}

        {/* signup now  */}
        <p className="md:text-lg">
          {" "}
          {isSignupForm ? "Already a user? " : "New to Netflix? "}
          <span
            onClick={toggle}
            className="text-center hover:text-gray-300 md:text-lg hover:cursor-pointer hover:underline"
          >
            {isSignupForm ? "SignIn Now" : "SignUp Now"}
          </span>
        </p>

        <p className="text-sm text-justify my-2">
          {" "}
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <span className="text-center text-blue-700 hover:text-gray-300 text-sm md:text-lg hover:cursor-pointer hover:underline">
            Learn more.{" "}
          </span>{" "}
        </p>
      </div>
    </div>
  )
}

export default Login
