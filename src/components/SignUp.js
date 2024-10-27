import React, { useContext, useEffect } from "react"
import { AppContext } from "../context/AppContext"
import { useNavigate } from "react-router-dom"
import { MdKeyboardArrowRight } from "react-icons/md"

const SignUp = () => {
  const navigate = useNavigate()

  const {
    email,
    errorMessage,
    setErrorMessage,
    setSignUpForm,
    setSignupEmail,
  } = useContext(AppContext)

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
      return
    }

    setSignUpForm(true)
    setSignupEmail(email.current.value)
    navigate("/signup")
  }

  return (
    <div className="absolute w-screen h-screen flex flex-col text-center justify-center items-center z-10">
      {/* description  */}
      <div className="">
        {/* text for the large screen  */}
        <p className="md:block hidden text-6xl text-white font-bold mb-3">
          Unlimited movies,<br></br> TV shows and more
        </p>
        <p className="md:hidden text-white font-bold mb-1 md:mb-0 mx-auto">
          <div className="text-4xl md:text-7xl">Unlimited</div>{" "}
          <div className="text-4xl md:text-7xl">movies, TV </div>{" "}
          <div className="text-4xl md:text-7xl">shows and more</div>
        </p>
        <p className="text-lg md:text-2xl text-white font-semibold ">
          Starts at ₹149. Cancel at any time.
        </p>
        <p className="text-lg md:text-xl text-white font-semibold pt-1 md:pt-10 px-2">
          Ready to watch? Enter your email<br className="md:hidden"></br> to
          create or restart your membership.
        </p>
      </div>

      {/* from */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className={`w-3/4 sm:w-[38%] flex sm:flex-row flex-col pt-5 md:pt-2 gap-3 text-white justify-between items-center`}
      >
        {/* email input field / */}
        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="w-full sm:flex-1 border border-gray-500 bg-transparent px-5 py-3 md:py-5 rounded"
        />

        {/* submit button  */}
        <button
          className="w-full sm:w-1/3 px-4 md:px-0 py-3 md:py-5 bg-red-700 rounded font-bold md:text-xl text-lg flex gap-2 items-center justify-center"
          onClick={handleFormSubmission}
        >
          Get Started{" "}
          <span className="text-3xl">
            <MdKeyboardArrowRight />
          </span>
        </button>
      </form>

      <p className="font-semibold text-red-500 text-base md:text-lg text-center md:text-start pt-2 md:pt-0 md:pl-2 ">
        {errorMessage}
      </p>
    </div>
  )
}

export default SignUp
