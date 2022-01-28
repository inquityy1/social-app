import React, { useState, useEffect } from "react";
import DashboardInfo from "./DashboardInfo";
import { Toaster } from "react-hot-toast";

import "./Dashboard.css";
import UseGetProfile from "../Shared/useCases/useGetProfile";

function Dashboard() {
  const [ profile, setProfile ] = useState(undefined)

  useEffect(async () => {
    let mounted = true;
    if (mounted) {
      try {
        const response = await UseGetProfile();
        setProfile(response.data)
      } catch (error) {
        throw error;
      }
    }
    return () => {
      mounted = false;
    }
  }, [UseGetProfile])

  return (
    <div className="dashboard-container">
      <Toaster position="top-center" reverseOrder={true} />
      <DashboardInfo profile={profile} />
    </div>
  );
}

export default Dashboard;
