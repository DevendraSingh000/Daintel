import React from 'react'
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Service from './components/Service';
import Blog from './components/Blog';
import Contect from './components/Contect';
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<><Navbar /><Home /></>
    },
    {
      path:'/About',
      element:<><Navbar /><About /></>
    },
    {
      path:'/Services',
      element:<><Navbar /><Service /></>
    },
    {
      path:'/Blog',
      element:<><Navbar /><Blog /></>
    },
    {
      path:'/Contect',
      element:<><Navbar /><Contect /></>
    },
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
