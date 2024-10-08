import React, { useContext, useEffect } from "react"
import { validate } from "../utils/validate"
import { useLocation, useNavigate } from "react-router-dom"
import { AppContext } from "../context/AppContext"
import { auth } from "../utils/firebase"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth"
import { useSelector, useDispatch } from "react-redux"
import { addUser } from "../redux/Slice/userSlice"

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
    signupEmail,
  } = useContext(AppContext)
  const user = useSelector((store) => store.user)
  const dispatch = useDispatch()
  //check the pathname
  const { pathname } = useLocation()

  useEffect(() => {
    setIsSignUpForm(pathname === "/signup")
    setErrorMessage(null)
  }, [])

  //for checkbox change
  function handleChange(e) {
    setRememberMe(!e.target.checked)
    console.log(rememberMe)
  }

  //login form submission function
  const handleSubmitForm = () => {
    //email and password validation
    const message = validate(email.current.value, password.current.value)
    setErrorMessage(message)
    if (message !== null) return

    //make the loading true

    if (isSignupForm) {
      //signup the new user
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // update the user profile by adding name and photo
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp",
          })
            .then(() => {
              console.log("updated user ; ", auth.currentUser);
              const { uid, email, displayName, photoURL } = auth.currentUser
              dispatch(addUser({ uid, email, displayName, photoURL }))
            })
            .catch((error) => {
              setErrorMessage(error.errorMessage)
            })
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          console.log(errorCode, errorMessage)
          setErrorMessage(errorMessage)
        })
    } else {
      // login the user
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          //now move the user to browse page
          console.log(userCredential.user)
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          console.log(errorCode, errorMessage)
          setErrorMessage(errorMessage)
        })
    }
  }

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
    <div className="absolute z-10 top-[8%] w-[30%] left-[35%] space-y-4 flex justify-center items-center  text-white bg-[#0000009d] rounded-md">
      {/* content  */}
      <div className="w-3/4 py-12 flex flex-col gap-4">
        {/* heading  */}
        <h1 className="text-4xl font-bold tracking-wide mb-8">
          {isSignupForm ? "Sign up" : "Log in"}
        </h1>

        {/* form  */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-5 text-white"
        >
          {isSignupForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="flex-1 border border-gray-500 bg-transparent px-5 py-5 rounded"
            />
          )}
          <input
            ref={email}
            type="email"
            value={signupEmail && signupEmail}
            disabled={isSignupForm && signupEmail !== null}
            placeholder="Email Address"
            className="flex-1 border border-gray-500 bg-transparent px-5 py-5 rounded"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="flex-1 border border-gray-500 bg-transparent px-5 py-5 rounded"
          />

          {/* Error message */}
          {errorMessage != null && (
            <p className="pl-5 text-red-500 font-semibold text-lg">
              {errorMessage}
            </p>
          )}
          {/* signin button  */}
          <button
            className="flex-1 bg-red-700 text-center rounded-md py-4 font-bold tracking-wide text-lg"
            onClick={handleSubmitForm}
          >
            {isSignupForm ? "Sign up" : "Log in"}
          </button>
        </form>

        <p className="text-center text-lg">OR</p>

        {/* signin using google  */}
        <div className="flex-1 py-3 text-center text-white  bg-[#dbdbdb39] rounded-md">
          <span className="text-white opacity-100">
            {isSignupForm ? "Sign up Using Google" : "Sign In Using Google"}
          </span>
        </div>

        {/* forgot password  */}
        {!isSignupForm && (
          <p className="text-center hover:text-gray-300 text-lg hover:cursor-pointer hover:underline">
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
              className="w-4 h-4"
            />
            <p className="text-lg"> Remember Me</p>
          </div>
        )}

        {/* signup now  */}
        <p className="text-lg">
          {" "}
          {isSignupForm ? "Already a user? " : "New to Netflix? "}
          <span
            onClick={toggle}
            className="text-center hover:text-gray-300 text-lg hover:cursor-pointer hover:underline"
          >
            {isSignupForm ? "SignIn Now" : "SignUp Now"}
          </span>
        </p>

        <p className="text-sm mt-2">
          {" "}
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <span className="text-center text-blue-700 hover:text-gray-300 text-lg hover:cursor-pointer hover:underline">
            Learn more.{" "}
          </span>{" "}
        </p>
      </div>
    </div>
  )
}

export default Login
