import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { UserData } from "@/commons/types";

type DisplayDataProps = {
    userData: UserData;
    
    userStats: any;
  };