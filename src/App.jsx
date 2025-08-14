import React from 'react'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import AppLayout from './Components/AppLayout'
import About from './Components/About'
import Home from './Components/Home'
import Service from './Components/Service'
import Feedback from './Components/Feedback'

const App = () => {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/service",
          element:<Service/>
        },
        {
          path:"/feedback",
          element:<Feedback/>
        },
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App