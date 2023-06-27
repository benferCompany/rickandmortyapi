import { Outlet } from "react-router-dom";

import React from "react";
import Nav from "../Nav/nav";

function Layout() {
  return (
    <>
      <div>
        <Nav />
        <Outlet />
      </div>
    </>
  );
}

export default Layout;