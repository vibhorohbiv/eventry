'use client'
import React from "react";
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const Profile = ({ params }: any) => {
  const router = useRouter()

  const handleLogout = async () => {
    const res = await axios.get('/api/users/logout');
    if (res.status === 200) {
      router.push('/login');
    }
  }
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black">
      <h1 className="text-white">Profile Page</h1>
      <div className="text-white text-4xl">
        This is profile of user{" "}
        <span className="p-2 bg-orange-400 rounded">{params.id}</span>
      </div>
      <hr />
      <Button
        className="my-2 bg-blue-500 text-white font-bold py-2 px-4 rounded"
        onClick={handleLogout}
      >
        Logout
      </Button>
    </div>
  );
};

export default Profile;
