import React, { useRef, useState } from "react";
import Topbar from "../Components/Topbar/Topbar";
import Footer from "../Components/Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import api from "../assets/api";

export default function Register() {
  const APIroute = import.meta.env?.VITE_BASE_PATH_API;
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [validate, setValidate] = useState(false);
  const [errorMessage, setErrorMessage] = useState([]);
  const hide_show_password = async () => {
    setShow(!show);
  };

  const registerName = useRef(null);
  const registerEmail = useRef(null);
  const registerPassword = useRef(null);
  const registerConfirmPassword = useRef(null);

  const formHandler = async (e) => {
    e.preventDefault();
    try {
      const email = registerEmail.current?.value;
      const name = registerName.current?.value;
      const password = registerPassword.current?.value;
      const confirmPass = registerConfirmPassword.current?.value;

      if (
        email === "" ||
        name === "" ||
        password === "" ||
        confirmPass === ""
      ) {
        setValidate(true);
      } else {
        if (password != confirmPass) {
          registerConfirmPassword.current.setCustomValidity(
            "Passwords do not match"
          );
        } else {
          setValidate(false);
          const response = await fetch(APIroute + "/signUp", {
            method: "POST",
            "Content-Type": "application/json",
            body: JSON.stringify({
              email: email,
              name: name,
              password: password,
              confirmPass: confirmPass,
            }),
          });
          const data = await response.json();
          console.log(data);
          if (data.success) {
            // navigate("/login");
          } else {
            // setErrorMessage(data.message);
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = () => {
    setValidate(false);
  };

  return (
    <>
      <div className="main">
        <Topbar />
        <div className="register-page">
          <form onSubmit={formHandler} className={validate ? "is-invalid" : ""}>
            <h3 className="form-head">Register</h3>

            <div className="form-outline form-floating mb-4">
              <input
                type="text"
                id="registerName"
                className={`form-control${
                  validate || errorMessage["name"] ? " is-invalid" : ""
                }`}
                placeholder="Name"
                ref={registerName}
                onChange={handleInputChange}
              />
              <label className="form-label" htmlFor="registerName">
                Name
              </label>
              <div className="errorMessages">{errorMessage["name"]}</div>
            </div>

            <div className="form-outline form-floating mb-4">
              <input
                type="email"
                id="registerEmail"
                className={`form-control${
                  validate || errorMessage["email"] ? " is-invalid" : ""
                }`}
                placeholder="Email"
                ref={registerEmail}
                onChange={handleInputChange}
              />
              <label className="form-label" htmlFor="registerEmail">
                Email
              </label>
              <div className="errorMessages">{errorMessage["email"]}</div>
            </div>

            <div className="form-outline form-floating mb-4">
              <input
                type="password"
                id="registerPassword"
                className={`form-control${
                  validate || errorMessage["password"] ? " is-invalid" : ""
                }`}
                placeholder="Password"
                ref={registerPassword}
                onChange={handleInputChange}
              />
              <label className="form-label" htmlFor="registerPassword">
                Password
              </label>
              <div className="errorMessages">{errorMessage["password"]}</div>
            </div>

            <div className="form-outline form-floating mb-4">
              <input
                type={show ? "text" : "password"}
                id="registerConfirmPassword"
                className={`form-control${
                  validate || errorMessage["confirm_password"]
                    ? " is-invalid"
                    : ""
                }`}
                placeholder="Confirm Password"
                ref={registerConfirmPassword}
                onChange={handleInputChange}
              />
              <label className="form-label" htmlFor="registerConfirmPassword">
                Repeat password
              </label>
              <div className="errorMessages">
                {errorMessage["confirm_password"]}
              </div>
              <RemoveRedEyeIcon
                className="removePass"
                onClick={hide_show_password}
              />
            </div>

            <button type="submit" className="btn btn-primary btn-block mb-3">
              Register
            </button>

            <div className="text-center">
              <p>
                Already have an account? <Link to={"/login"}>Login</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
