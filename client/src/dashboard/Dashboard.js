import React, { useState, useEffect } from "react";
import DashboardInfo from "./DashboardInfo";
import { Toaster } from "react-hot-toast";

import "./Dashboard.css";
import UseGetProfile from "../Shared/useCases/useGetProfile";

function Dashboard() {
  const [profile, setProfile] = useState(undefined);
  const [firstTimeUser, setFirstTimeUser] = useState(false);

  useEffect(async () => {
    let mounted = true;
    if (mounted) {
      const response = await UseGetProfile();
      if (response.firstTimeUser) {
        setFirstTimeUser(true);
      } else {
        setProfile(response.data);
      }
    }
    return () => {
      mounted = false;
    };
  }, [UseGetProfile]);

  return (
    <div className="dashboard-container">
      <Toaster position="top-center" reverseOrder={true} />
      <DashboardInfo profile={profile} firstTimeUser={firstTimeUser} />
    </div>
  );
}

export default Dashboard;
