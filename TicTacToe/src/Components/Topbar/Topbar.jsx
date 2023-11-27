import "./Topbar.css";
import React from "react";
import { Link } from "react-router-dom";
import ThemeToggler from "../ThemeToggler/ThemeToggler";

export default function Topbar() {
  return (
    <div className="topbar flex container mx-auto justify-between items-center mb-5">
      <div className="logo p-2">
        <Link to={"/"}>
          <img src="/icon.png" alt="logo" className="img-fluid" />
        </Link>
      </div>

      <div className="nav justify-end	 w-75">
        <ul className="navbar flex justify-around m-0 w-75">
          <li className="text">
            <ThemeToggler />
          </li>
          <li className="text">
            <Link to={"/login"}>Login</Link>
          </li>
          <li className="text">
            <Link to={"/register"}>Register</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
