import React from 'react';
import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home';
import SignUp from './SignUp';
const Body = () => {

    const appRouter = createBrowserRouter([
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: 'signup', 
        element: <SignUp />
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