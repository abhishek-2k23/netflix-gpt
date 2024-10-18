import React, { useEffect, useState } from 'react'
import Header from './Header'
import bgImage from '../asset/bgImage.jpg'
import SignUp from './SignUp'
import { Outlet, useLocation } from 'react-router-dom'
const Home = () => {
  const {pathname} = useLocation();
  const [login, setLogin] = useState(false);

  useEffect(() => {
      setLogin(pathname === '/login' );
  }, [])

return (
<div className='relative h-screen '>
  {/* gradient applied to the whole screen */}
  <div className={`absolute inset-0 bg-gradient-to-b ${login ?'from-[#000000af] to-[#0000008f]': 'from-[#000000bd]  to-[#000000b0] '} `}></div>

  {/* Header */}
    <Header />

  {/* backgroud image  */}
  <img src={bgImage} alt='backgroud-image' className='fixed -z-10 w-screen h-screen object-cover'/>

  
  {/* {
    login?<Login />:<SignUp />
  } */}
  {pathname === '/' ? <SignUp /> : <Outlet />}
  

  
</div>
)
}

export default Home