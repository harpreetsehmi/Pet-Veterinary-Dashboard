import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../component/Layout";
import logo from "../Assets/logo.png"

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validationErrors, setValidationErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (
      localStorage.getItem("token") != "" &&
      localStorage.getItem("token") != null
    ) {
      navigate("/dashboard");
    }
  }, []);

  const registerAction = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    let payload = {
      name: name,
      email: email,
      password: password,
      password_confirmation: confirmPassword,
    };
    axios
      .post("/api/register", payload)
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
      });
  };

  return (
    <div>
      <Layout>
        <div className="inner-wrap">
        <div className="logo"><img src={logo} alt="logo"/></div>
        <h2 className="nomargin">Register</h2>
        <form onSubmit={(e) => registerAction(e)}>
          
            <p className="input-box">
              {" "}
              <input
                type="text"
                placeholder="Enter Your Name"
                className="form-control"
                id="name"
                name="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </p>
            {validationErrors.name != undefined && (
              <div className="flex flex-col">
                <small className="text-danger">
                  {validationErrors.name[0]}
                </small>
              </div>
            )}
          

          
            <p className="input-box">
             {" "}
              <input
               placeholder="Enter Email"
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </p>
          
            {validationErrors.email != undefined && (
              <div className="flex flex-col">
                <small className="text-danger">
                  {validationErrors.email[0]}
                </small>
              </div>
            )}
         
         
            <p className="input-box">
              {" "}
              <input
                type="password"
                placeholder="Enter Password"
                className="form-control"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </p>
           
            
            {validationErrors.password != undefined && (
              <div className="flex flex-col">
                <small className="text-danger">
                  {validationErrors.password[0]}
                </small>
              </div>
            )}
         
         
            <p className="input-box">
              {" "}
              <input
                type="password"
                placeholder="Confirm Password"
                className="form-control"
                id="confirm_password"
                name="confirm_password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </p>
         

          <p>
            <button disabled={isSubmitting} type="submit">
              Register
            </button>
            <p className="text-center auth-bttom">
              Have already an account <Link to="/">Login here</Link>
            </p>
          </p>
        </form>
        </div>
      </Layout>
    </div>
  );
}

export default Register;
