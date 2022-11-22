import React from "react";
import { Outlet } from "react-router-dom";
import MainNavBar from "./Navbar";

const Layout = () => {
  return (
    <>
      <MainNavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
