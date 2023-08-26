import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Sidebar from "../Pages/Sidebar";
import Topmenu from "../Pages/Topmenu";


const ServiceDetail = () => {
    const { serid } = useParams();

    const [serdata, serdatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:3000/services/" + serid).then((res) => {
            return res.json();
        }).then((resp) => {
            serdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);
    return (
        <div>
            {/* <div className="row">
                <div className="offset-lg-3 col-lg-6"> */}
<Sidebar/>
            
            <section className="home-section">
            <Topmenu/>
            <div className="row">
              <div className="container pt-50">
                
                <div className="create-card card " style={{ "textAlign": "left" }}>
                    <div className="inner-wrap-card">
                    <div className="card-title">
                        <h2>Service Details</h2>
                    </div>
                   
    
                    {serdata &&
                        <div className="details">
                            <p>ID : <b>{serdata.id}</b></p>
                            <p>Service name: <b>{serdata.name}</b>  </p>
                            <p>Price :
                            <b>{serdata.price}</b></p>
                            
    
                            <Link className="btn btn-danger" to="/services"><button className="button-wrap ">Back to Listing</button></Link>
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

export default ServiceDetail;