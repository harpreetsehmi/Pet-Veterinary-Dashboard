import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../component/Layout";
import logo from "../Assets/logo.png"

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validationErrors, setValidationErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (
      localStorage.getItem("token") != "" &&
      localStorage.getItem("token") != null
    ) {
      navigate("/dashboard");
    }
    console.log(localStorage.getItem("token"));
  }, []);

  const loginAction = (e) => {
    setValidationErrors({});
    e.preventDefault();
    setIsSubmitting(true);
    let payload = {
      email: email,
      password: password,
    };
    axios
      .post("/api/login", payload)
      .then((r) => {
        setIsSubmitting(false);
        localStorage.setItem("token", r.data.token);
        navigate("/dashboard");
      })
      .catch((e) => {
        setIsSubmitting(false);
        if (e.response.data.errors != undefined) {
          setValidationErrors(e.response.data.errors);
        }
        if (e.response.data.error != undefined) {
          setValidationErrors(e.response.data.error);
        }
      });
  };

  return (
    <div>
      <Layout>
      <div className="inner-wrap">
      <div className="logo"><img src={logo} alt="logo"/></div>
        <h2 className="nomargin">Login</h2>
        <form
          onSubmit={(e) => {
            loginAction(e);
          }}
        >
          {Object.keys(validationErrors).length != 0 && (
            <p className="alert alert-danger">
              <small className="text-danger">Incorrect Email or Password</small>
            </p>
          )}

          <p className="input-box">
            
              {" "}
              <input
               placeholder="Enter Email"
                type="email"
                id="email"
                name="email"
                className="form-control"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            
          </p>

          <p className="input-box">
            
              {" "}
              <input
                type="password"
                placeholder="Enter Password"
                className="form-control"
                id="password"
                name="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            
          </p>

          
            <button disabled={isSubmitting} type="submit">
              Login
            </button>
            <p className="text-center auth-bttom">
              Don't have account? <Link to="/register">Register here</Link>
            </p>
          
        </form>
        </div>
      </Layout>
    </div>
  );
}

export default Login;
