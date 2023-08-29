import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { UserData } from "@/commons/types";

type UserProfileProps = {
    userData: UserData;
    
    userStats: any;
  };

  
const UserProfile: React.FC<UserProfileProps> = ({}) => {
  const router = useRouter();
  const { username } = router.query;
  return (
    <div>
      <h1>

      {username}
      </h1>
    </div>
  )
    
};