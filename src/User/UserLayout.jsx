import React from "react";
import ResponsiveAppBar from "../Components/Header";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Outlet />
    </>
  );
};

export default UserLayout;
