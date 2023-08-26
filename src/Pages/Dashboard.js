import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import PetListing from "../component/PetListing";
import ServiceList from "../component/ServiceList";
import Sidebar from "./Sidebar";
import peticon from "../Assets/dog.png";
import sericon from "../Assets/features.png";
import Topmenu from "./Topmenu";

function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  useEffect(() => {
    if (
      localStorage.getItem("token") == "" ||
      localStorage.getItem("token") == null
    ) {
      navigate("/");
    } else {
      getUser();
    }
  }, []);

  const getUser = () => {
    axios
      .get("/api/user", {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((r) => {
        setUser(r.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // const logoutAction = () => {
  //   axios
  //     .post(
  //       "/api/logout",
  //       {},
  //       {
  //         headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  //       }
  //     )
  //     .then((r) => {
  //       localStorage.setItem("token", "");
  //       navigate("/");
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };

  return (
    <div>
      <Sidebar></Sidebar>
      <section className="home-section">
      <Topmenu/>
       <div className="d-wrap">
       <div className="container"><div className="wrap welcome-txt">Welcome! {user.name}</div>
       <div className="grid">
       
       <div className="pet-grid">
       <Link to="/petmanagement">
          <div>
          <h4>Pet </h4>
          <p>Management</p>
          </div>

          <img src={peticon} alt="pet"/>
          </Link>
        </div>
      
     
        <div className="service-grid">
        <Link to="/services">
       <div>
       
       <h4>Service </h4>
        <p>Management</p>
       </div>
        <img src={sericon} alt="service"/>
        </Link>
        </div>
       
       </div>
       </div>
      <div className="listings">
      <PetListing></PetListing>
        <ServiceList></ServiceList>

      </div>
        
       </div>
    </section>
    </div>
  );
}

export default Dashboard;
