import { useEffect, useState } from 'react'
import './fonts.css'
import './App.css'
import WOW from "wow.js";
import "animate.css";
import '@fortawesome/fontawesome-free/css/all.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import Notfound from './pages/Notfound/Notfound'

function App() {

  useEffect(() => {
    const wow = new WOW({
      boxClass: "wow",
      animateClass: "animate__animated",
      offset: 100,
      mobile: true,
      live: true,
    });

    wow.init();

    return () => {
      wow.sync();
    };
  }, []);

  let routers = createBrowserRouter([
    {
      path: '', element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: '*', element: <Notfound /> }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={routers} />
    </>
  )
}

export default App
