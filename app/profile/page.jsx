"use client";

import { useState, useEffect } from "react";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Profile from '@components/profile'


const MyProfile = () => {

    const handleEdit = () => {

    }
    
    const handleDelete = () => {

    }
  return (
    <div>
      <Profile 
      name="MY"
      desc="Welcome to your personalized profile page" 
      data={[]}
      handleEdit={handleEdit}
      handleDelete={handleDelete}/>

    </div>
  )
}

export default MyProfile;
