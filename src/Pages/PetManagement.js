import React from 'react'
import PetListing from '../component/PetListing';
import Sidebar from "../Pages/Sidebar";
import Topmenu from "../Pages/Topmenu";

function PetManagement() {
  return (
    <div>
         <Sidebar/>
            
            <section className="home-section">
            <Topmenu/>
            <PetListing/>
            </section>
    </div>
  )
}

export default PetManagement