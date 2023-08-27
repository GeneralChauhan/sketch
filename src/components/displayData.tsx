import React, { useState, useEffect } from "react";
import { UserData } from "@/commons/types";

type UserProfileProps = {
    userData: UserData;
    
    userStats: any;
  };