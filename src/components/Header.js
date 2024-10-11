import React, { useState, useEffect, useContext } from "react"
import logo from "../asset/logo.png"
import { useLocation, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from "../utils/firebase"
import { userLogoURL } from "../utils/url"
import { addUser, removeUser } from "../redux/Slice/userSlice"
import { AppContext } from "../context/AppContext"

const Header = () => {
  const { pathname } = useLocation()
  const [isBrowsePage, setIsBrowsePage] = useState(false)
  const [isLogin, setIsLogin] = useState(false)
  const dispatch = useDispatch()
  const user = useSelector((store) => store.user)
  const navigate = useNavigate()
  const {setSignupEmail} = useContext(AppContext);

  const handleSignout = () => {
    signOut(auth).then(() => {
      
    })
  }

  useEffect(() => {
    if (pathname === "/browse") {
      setIsBrowsePage(true)
      console.log(isBrowsePage)
    }
    if (pathname === "/login") setIsLogin(true)
  }, [])

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user
        dispatch(addUser({ uid, email, displayName, photoURL }))
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
    })
  }, []) //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      className={` ${
        isBrowsePage
          ? "bg-transparent w-full px-36 items-center"
          : "absolute w-10/12 left-[8.5%]  bg-gradient-to-b from-black to-transparent"
      } flex justify-between lg:gap-x-80 md:gap-36 gap-16   items-center pt-2`}
    >
      {/* logo */}
      <img src={logo} alt="logo" className="w-56" onClick={() => navigate("/")}/>

      {/* buttons  only if signup page*/}
      {!isLogin && !isBrowsePage && (
        <div className="z-10 text-white flex gap-5 ">
          {/* first button */}
          <div className="px-7 py-2 cursor-pointer rounded-md border border-gray-500 ">
            English
          </div>

          {/* second button */}
          <div
            onClick={() => navigate("/login")}
            className="px-7 py-2 cursor-pointer rounded-md  bg-red-700 font-bold tracking-wider"
          >
            Sign In
          </div>
        </div>
      )}

      {/* buttons only if browse page  */}
      {isBrowsePage && (
        <div className="z-10 text-white flex gap-5 ">
          {/* first button */}
          <div className="w-10 h-10 cursor-pointer rounded-md ">
            <img
              src={
                user !== null && user?.photoURL !== null
                  ? user?.photoURL
                  : userLogoURL
              }
              alt="userlogo"
            />
          </div>

          {/* second button */}
          <div
            onClick={handleSignout}
            className="px-3 py-2 cursor-pointer rounded-md  bg-red-700 font-bold tracking-wide"
          >
            Sign out {user?.displayName?.split(" ")[0]}
          </div>
        </div>
      )}
    </div>
  )
}

export default Header
