import React from 'react';
import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home';
import SignUp from './SignUp'
const Body = () => {

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