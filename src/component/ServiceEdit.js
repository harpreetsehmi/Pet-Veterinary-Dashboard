import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Sidebar from "../Pages/Sidebar";
import Topmenu from "../Pages/Topmenu";

const ServiceEdit = () => {
    const { serid } = useParams();

    //const [serdata, serdatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:3000/services/" + serid).then((res) => {
            return res.json();
        }).then((resp) => {
            idchange(resp.id);
            namechange(resp.name);
            pricechange(resp.price);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

    const[id,idchange]=useState("");
    const[name,namechange]=useState("");
    const[price,pricechange]=useState("");
    const[validation,valchange]=useState(false);


    const navigate=useNavigate();

    const handlesubmit=(e)=>{
      e.preventDefault();
      const serdata={id,name,price};
      

      fetch("http://localhost:3000/services/"+serid,{
        method:"PUT",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(serdata)
      }).then((res)=>{
        alert('Saved successfully.')
        navigate('/services');
      }).catch((err)=>{
        console.log(err.message)
      })

    }
    return ( 
        <div>
<Sidebar/>
            
            <section className="home-section">
            <Topmenu/>
        <div className="row">
            <div className="offset-lg-3 col-lg-6">
                <form className="container" onSubmit={handlesubmit}>

                    <div className="create-card card" style={{"textAlign":"left"}}>
                        <div className="card-title">
                            <h2>Employee Edit</h2>
                        </div>
                        <div className="card-body">

                            <div className="row">

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>ID</label>
                                        <input value={id} disabled="disabled" className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input required value={name} onMouseDown={e=>valchange(true)} onChange={e=>namechange(e.target.value)} className="form-control"></input>
                                    {name.length==0 && validation && <span className="text-danger">Enter the name</span>}
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Price</label>
                                        <input value={price} onChange={e=>pricechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                
                                <div className="col-lg-12">
                                    <div className="form-group">
                                       <button className="btn btn-success" type="submit">Save</button>
                                       <Link to="/" className="btn btn-danger">Back</Link>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </form>

            </div>
        </div>
        </section>
    </div>
     );
}
 
export default ServiceEdit;