import React, { useState, useEffect, useContext } from "react"
import logo from "../asset/logo.png"
import { useLocation, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from "../utils/firebase"
import { userLogoURL } from "../utils/url"
import { addUser, removeUser } from "../redux/Slice/userSlice"
import { setIsSearchPage } from "../redux/Slice/gptSearch"
import { AppContext } from "../context/AppContext"
import toast from "react-hot-toast"
import { Link } from "react-router-dom"

const Header = () => {
  const { pathname } = useLocation()
  const [isBrowsePage, setIsBrowsePage] = useState(false)
  const [isLogin, setIsLogin] = useState(false)
  const dispatch = useDispatch()
  const user = useSelector((store) => store.user)
  const navigate = useNavigate()
  const {setSignupEmail,setIsSignUpForm, isSignupForm} = useContext(AppContext);
  const isSearchPage = useSelector((store) => store.gptSearch.isSearchPage)
  const handleSignout = () => {
    signOut(auth).then(() => { 
      toast.error('You are signed out')
    })
  }

  useEffect(() => {
    if (pathname === "/browse") {
      setIsBrowsePage(true)
    }
    if (pathname === "/login") setIsLogin(true)
  }, [])

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user
        dispatch(addUser({ uid, email, displayName, photoURL }))
        toast.success('welcome to netflix-gpt')
        navigate("/browse")
      } else {
          dispatch(removeUser())
          setSignupEmail(null);
          if(pathname !== '/'){
            navigate("/login")
          }else{
            navigate("/")
          }
      }

      //unsubscribe when the component unmounts
      return () => unsubscribe();
    })
  }, []) //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      className={` ${
        isBrowsePage
          ? " w-full md:px-20 px-2  left-0 top-0 flex-col md:flex-row"
          : " w-11/12 left-[4.5%] md:gap-x-80"
      } absolute md:bg-gradient-to-b from-black 95% to-transparent flex  mx-auto md:mx-0 flex-row justify-between md:gap-36 gap-x-6 gap-y-2 items-center pt-2`}
    >
      {/* logo */}
      <div className="flex gap-2 items-center z-10">
        <img src={logo} alt="logo" className={`${isBrowsePage ? 'w-40':'w-32 md:w-52'}`} onClick={() => {navigate("/"); setIsSignUpForm(true)}}/>
        <div className=" hidden md:flex">
        {
          isBrowsePage && ['Home', 'Tv Shows', 'My List'].map((menu) => (
            <div key={menu} className="flex mx-2"> <p className="text-md text-gray-100">{menu}</p> </div>
          ))
        }

        </div>
      </div>

      {/* buttons  only if signup page*/}
      {(!isLogin && !isBrowsePage && isSignupForm )&& (
        <div className="z-20 text-white flex gap-2 md:gap-5 ">
          {/* first button */}
          <div className="px-2 md:px-7 py-2 text-sm md:text-base cursor-pointer rounded-md border border-gray-500 ">
            English
          </div>

          {/* second button */}
          <Link to="/login"><div onClick={() => setIsSignUpForm(false)}
            className="px-2 md:px-7 py-2 cursor-pointer rounded-md text-sm md:text-base  bg-red-700 font-bold tracking-wider"
          >
            Sign In
          </div></Link>
        </div>
      )}

      {/* buttons only if browse page  */}
      {isBrowsePage && (
        <div className="z-10 text-white flex flex-wrap md:flex-nowrap gap-x-4 gap-y-1 md:gap-5 ">
        {/* search button  */}
        <div
            onClick={() => dispatch(setIsSearchPage())}
            className="px-2 md:px-4 py-2 cursor-pointer rounded-md  bg-[#fc212134] text-red-50 border font-semibold tracking-wide"
          >
            {!isSearchPage ?"Search": "Home"} 
          </div>
        
          {/* first button */}
          <div className="w-10 h-10 cursor-pointer rounded-md ">
            <img
              src={
                user?.photoURL ? user.photoURL :  userLogoURL
              }
              alt="userlogo"
            />
          </div>

          {/* second button */}
          <div
            onClick={handleSignout}
            className="px-3 py-2 cursor-pointer rounded-md  bg-red-700 font-bold tracking-wide"
          >
            Sign out
          </div>
        </div>
      )}
    </div>
  )
}

export default Header
