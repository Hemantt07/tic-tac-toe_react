import React, { useRef, useState } from "react";
import Topbar from "../Components/Topbar/Topbar";
import Footer from "../Components/Footer/Footer";
import { Link, Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

export default function Login() {
  const APIroute = import.meta.env?.VITE_BASE_PATH_API;
  const [show, setShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState([]);
  const [validate, setValidate] = useState(false);
  const hide_show_password = async () => {
    setShow(!show);
  };

  const loginEmail = useRef(null);
  const loginPassword = useRef(null);

  const formHandler = async (e) => {
    e.preventDefault();
    try {
      const email = loginEmail.current?.value;
      const password = loginPassword.current?.value;

      if (email === "" || password === "") {
        setValidate(true);
      } else {
        setValidate(false);
        const body = JSON.stringify({
          email: email,
          password: password,
        });
        console.log(body);
        const response = await fetch(APIroute + "/signIn", {
          method: "POST",
          body: body,
        });

        const data = await response.json();
        console.log(data);
        if (data.success) {
          // toast(data);
        } else {
          setErrorMessage(data.message);
        }
      }
    } catch (error) {
      toast.error(error);
    }
  };

  const handleInputChange = () => {
    setValidate(false);
  };

  return (
    <>
      <div className="main">
        <Topbar />
        <div className="login-page">
          <form onSubmit={formHandler} autoComplete="off">
            <h3 className="form-head">Login</h3>
            <div className="form-outline form-floating mb-4">
              <input
                type="email"
                id="loginEmail"
                className={`form-control${
                  validate || errorMessage["email"] ? " is-invalid" : ""
                }`}
                placeholder="Email"
                ref={loginEmail}
                onChange={handleInputChange}
              />
              <label className="form-label" htmlFor="loginEmail">
                Email
              </label>
              <div className="errorMessages">{errorMessage["email"]}</div>
            </div>

            <div className="form-outline form-floating mb-4">
              <input
                type={show ? "text" : "password"}
                id="loginPassword"
                className={`form-control${
                  validate || errorMessage["password"] ? " is-invalid" : ""
                }`}
                placeholder="Password"
                ref={loginPassword}
                onChange={handleInputChange}
              />
              <label className="form-label" htmlFor="loginPassword">
                Password
              </label>
              <div className="errorMessages">{errorMessage["password"]}</div>
              <RemoveRedEyeIcon
                className="removePass"
                onClick={hide_show_password}
              />
            </div>

            <button type="submit" className="btn btn-primary btn-block mb-4">
              Log in
            </button>

            <div className="text-center">
              <p>
                Not a member? <Link to={"/register"}>Register</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
