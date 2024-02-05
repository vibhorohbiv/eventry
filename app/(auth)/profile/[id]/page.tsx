import React from "react";

const Profile = ({ params }: any) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black">
      <h1 className="text-white">Profile Page</h1>
      <div className="text-white text-4xl">This is profile of user <span className="p-2 bg-orange-400 rounded">{params.id}</span></div>
    </div>
  );
};

export default Profile;
