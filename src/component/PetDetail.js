import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Sidebar from "../Pages/Sidebar";
import Topmenu from "../Pages/Topmenu";


const PetDetail = () => {
    const { petid } = useParams();

    const [petdata, petdatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:3000/pet/" + petid).then((res) => {
            return res.json();
        }).then((resp) => {
            petdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);
    return (
        <div>
            {/* <div className="row">
                <div className="offset-lg-3 col-lg-6"> */}
  <Sidebar/>
            
            <section class="home-section">
            <Topmenu/>
              <div className="row">
              <div className="container pt-50">
                
                <div className="create-card card " style={{ "textAlign": "left" }}>
                    <div className="inner-wrap-card">
                    <div className="card-title">
                        <h2>Pet Details</h2>
                    </div>
                   
    
                    {petdata &&
                        <div className="details">
                            <p>Customer name: <b>{petdata.customer}</b>  </p>
                            <p>Pet name :
                            <b>{petdata.name}</b></p>
                            <p>Email : <b>{petdata.email}</b></p>
    
                            <Link className="btn btn-danger" to="/petmanagement"><button className="button-wrap ">Back to Listing</button></Link>
                        </div>
                    }
                    </div>
                </div>
                </div>
              </div>
            {/* </div>
            </div> */}
            </section>
        </div >
    );
}

export default PetDetail;