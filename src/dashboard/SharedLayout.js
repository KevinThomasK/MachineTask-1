import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Sidebar } from "../components";

const SharedLayout = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default SharedLayout;
