import React from 'react'
import ServiceList from '../component/ServiceList';
import Sidebar from "../Pages/Sidebar";
import Topmenu from "../Pages/Topmenu";

function Services() {
  return (
    <div>
        <Sidebar/>
            
            <section className="home-section">
            <Topmenu/>
            <ServiceList/>
            </section>
    </div>
  )
}

export default Services