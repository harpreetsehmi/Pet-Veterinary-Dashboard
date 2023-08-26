import React from 'react'
import menu from "../Assets/ion_menu.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";



function Topmenu() {
    const navigate = useNavigate();
    const logoutAction = () => {
        axios
          .post(
            "/api/logout",
            {},
            {
              headers: { Authorization: "Bearer " + localStorage.getItem("token") },
            }
          )
          .then((r) => {
            localStorage.setItem("token", "");
            navigate("/");
          })
          .catch((e) => {
            console.log(e);
          });
      };
  return (
    <div className="menu">
          <i><img src={menu} alt="menu-icon"/></i>
          <h2>Dashboard</h2>
          <button className="button-wrap" onClick={() => logoutAction()}>Logout</button>
        </div>
  )
}

export default Topmenu