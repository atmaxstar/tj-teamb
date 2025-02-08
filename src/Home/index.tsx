import React from 'react'
import EditProfile from './EditProfile'
import ViewProfile from './ViewProfile'

const Home = () => {
  return (
    <div className="bg-white min-h-screen">
      <EditProfile />
      <ViewProfile />
    </div>
  )
}

export default Home
