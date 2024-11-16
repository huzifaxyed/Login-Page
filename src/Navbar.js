import React from "react";
import { Link, Outlet } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link to="login">Login</Link>
          </li>
          <li>
            <Link to="signup">Sign up</Link>
          </li>
          <li>
            <Link to="todos">Todos</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
