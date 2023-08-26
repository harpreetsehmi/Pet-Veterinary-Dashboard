import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../Pages/Sidebar";
import Topmenu from "../Pages/Topmenu";


const PetCreate = () => {

    const[id,idchange]=useState("");
    const[name,namechange]=useState("");
    const[customer,customerchange]=useState("");
    const[email,emailchange]=useState("");
    const[validation,valchange]=useState(false);


    const navigate=useNavigate();

    const handlesubmit=(e)=>{
      e.preventDefault();
      const petdata={name,email,customer};
      

      fetch("http://localhost:3000/pet",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(petdata)
      }).then((res)=>{
        alert('Saved successfully.')
        navigate('/petmanagement');
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
                                <h2>Customer Create</h2>
                            </div>
                            <div className="card-body">

                                <div className="row">

                                  <div style={{display: "flex"}}>
                                  <div className="col-lg-6">
                                        <div className="form-group">
                                            <label>ID</label>
                                            <input value={id} disabled="disabled" className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input required value={name} onMouseDown={e=>valchange(true)} onChange={e=>namechange(e.target.value)} className="form-control"></input>
                                       
                                        </div>
                                    </div>
                                  </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Customer</label>
                                            <input required value={customer}  onChange={e=>customerchange(e.target.value)} className="form-control"></input>
                                           
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input value={email} onChange={e=>emailchange(e.target.value)} className="form-control"></input>
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

export default PetCreate;