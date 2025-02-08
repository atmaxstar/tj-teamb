import React, { useState } from 'react'
import EditProfile from './EditProfile'
import ViewProfile from './ViewProfile'
import HeaderCard from './HeaderCard';

const Home = () => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };
  return (
    <div className="bg-white min-h-screen">
      <HeaderCard />
      {isEditing ? (
        <EditProfile onSave={handleSave} />
      ) : (
        <ViewProfile onEdit={handleEdit} />
      )}
    </div>
  )
}

export default Home
