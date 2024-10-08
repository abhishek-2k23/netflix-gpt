import React, { useState, useEffect } from "react"
import logo from "../asset/logo.png"
import { useLocation, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { signOut } from "firebase/auth"
import { auth } from "../utils/firebase"
import { userLogoURL } from "../utils/url"

const Header = () => {
  const { pathname } = useLocation()
  const [isBrowsePage, setIsBrowsePage] = useState(false)
  const [isLogin, setIsLogin] = useState(false);

  const user = useSelector(store => store.user);
  const navigate = useNavigate();

  const handleSignout = () => {
    signOut(auth).then(() => {
      true && navigate("/login");
    })
  }

  useEffect(() => {
    
    if (pathname === "/browse") {
      setIsBrowsePage(true);
      console.log(isBrowsePage)
      
    }
      if (pathname === "/login") setIsLogin(true)
    }, [])

  return (
    <div className={` ${isBrowsePage ? 'bg-transparent w-full px-36 items-center' : 'absolute w-10/12 left-[8.5%]  bg-gradient-to-b from-black to-transparent'} flex justify-between lg:gap-x-80 md:gap-36 gap-16   items-center pt-2`}>
      {/* logo */}
      <img src={logo} alt="logo" className="w-56" />

      {/* buttons  only if signup page*/}
      {(!isLogin && !isBrowsePage) && (
        <div className="z-10 text-white flex gap-5 ">
          {/* first button */}
          <div className="px-7 py-2 cursor-pointer rounded-md border border-gray-500 ">
            English
          </div>

          {/* second button */}
          <div onClick={() => navigate("/login")} className="px-7 py-2 cursor-pointer rounded-md  bg-red-700 font-bold tracking-wider">
            Sign In
          </div>
        </div>
      )}

      {/* buttons only if browse page  */}
      {
        isBrowsePage && (
          <div className="z-10 text-white flex gap-5 ">
          {/* first button */}
          <div className="w-10 h-10 cursor-pointer rounded-md ">
            <img src={(user !== null && user?.photoURL !== null) ? user?.photoURL : userLogoURL} alt="userlogo" />
          </div>

          {/* second button */}
          <div onClick={handleSignout} className="px-3 py-2 cursor-pointer rounded-md  bg-red-700 font-bold tracking-wide">
            Sign out {user?.displayName?.split(' ')[0]}
          </div>
        </div>
        )
      }
    </div>
  )
}

export default Header
