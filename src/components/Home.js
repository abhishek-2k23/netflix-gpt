import React, { useState } from 'react'
import Header from './Header'
import bgImage from '../asset/bgImage.jpg'
import SignUp from './SignUp'
import Login from './Login'
const Home = () => {
  const [login, setLogin] = useState(true);
  const submitform = () => {
    console.log("button for submitform")
}
return (
<div className='relative   '>
  {/* gradient applied  */}
  <div className='absolute inset-0 bg-gradient-to-b from-[#000000d0] to-transparent '></div>
  <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent '></div>

  {/* Header */}
    <Header />

  {/* backgroud image  */}
  <img src={bgImage} alt='backgroud-image' />

  
  {
    login?<Login />:<SignUp />
  }

  
</div>
)
}

export default Home