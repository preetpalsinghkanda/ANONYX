import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const GuestRoutes = () => {
  const token = localStorage.getItem("token");
  return token ? <Navigate to="/dashboard" replace /> : <Outlet />;
};

export default GuestRoutes;
