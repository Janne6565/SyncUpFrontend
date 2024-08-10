import { Link } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

interface Props {}

function Layout(props: Props) {
  const {} = props;

  return (
    <>
      <h1>Syncup</h1>
      <ul>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/maps"}>Maps</Link>
        </li>
        <li>
          <Link href={"/search"}>Search</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}

export default Layout;
