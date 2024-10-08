import React, { useContext, useEffect } from 'react';
import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home';
import SignUp from './SignUp'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../redux/Slice/userSlice';
import { AppContext } from '../context/AppContext';


const Body = () => {
    const dispatch = useDispatch();
    const {setIsLoading} = useContext(AppContext);

    const appRouter = createBrowserRouter([
      {
        path: '/',
        element: <Home />,
        children: [
          {
            path: '/',
            element: <SignUp />
          },
          {
            path: '/login',
            element: <Login />
          },
          {
            path: '/signup',
            element: <Login /> //signform is also in login component
          },

        ]
      },
      {
        path: '/browse',
        element: <Browse />
      }
    ])

    

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  )
}

export default Body