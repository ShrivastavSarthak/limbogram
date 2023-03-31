import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Add from './pages/Add/Add'
import Friends from './pages/Friends/Friends'
import Home from './pages/Home/Home'
import Login from './pages/login/login'
import Signup from './pages/signup/signup'
import Profile from './pages/Profile/Profile'
import EditProfile from './pages/EditProfile/EditProfile'


const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/Home' element={<Home />} />
      <Route path='/addfriends' element={<Friends />} />
      <Route path='/createpost' element={<Add />} />
      <Route path='/profile/:id' element={<Profile />} />
      <Route path='/editprofile' element={<EditProfile/>} />
    </Routes>
  )
}

export default AllRoutes