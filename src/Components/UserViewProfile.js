import React from "react";
import NavFirst from "./NavFirst";

function UserViewProfile(){
    return(
        <React.Fragment>
            <NavFirst isCoachAuthed={false} isUserAuthed={true}></NavFirst>
            <div style={{width:'50%', marginLeft:'25%', backgroundColor:'black',borderRadius:'10px',marginTop:'10%',color:'white'}}>
                <div className="row" style={{marginTop:'50px',marginBottom:'50px'}}>
                    <div className="col-4">
                        <img src="images/female.png" alt="coach" style={{height:'180px',width:'120px',borderRadius:'50%',margin:'30px 20px 30px 30px'}}></img>
                    </div>

                    <div className="col-8">
                        <p style={{fontSize:'40px'}}>Maria</p>
                        <p>Date of Birth: 1/1/1996</p>
                        <p style={{lineHeight:'1'}}>Email Id: maria@gmail.com</p>
                        <p style={{lineHeight:'1'}}>Mobile Number:1234567890</p>
                        <p style={{lineHeight:'1'}}>Address:Banglore,Karnataka India</p>
                        <p style={{lineHeight:'1'}}>Pincode: 123456</p>
                        <button className="btn btn-info" style={{color:"white",width:"40%",marginBottom:"15px",float:"right",marginRight:"20px"}} onClick={() => window.location.assign('/userhome')}><i className="fas fa-arrow-left" style={{marginRight:'8px'}}></i>Go Back</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default UserViewProfile;