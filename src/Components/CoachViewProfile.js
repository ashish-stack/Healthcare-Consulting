import axios from "axios";
import React, { useEffect, useState } from "react";
import NavFirst from "./NavFirst";

function CoachViewProfile(){
    const [coachData, setCoachData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/coaches/:coachId').then((res) => {
            let value = res.data;
            setCoachData(value);
        });
    }, [])

    return(
        <React.Fragment>
            <NavFirst isCoachAuthed={true} isUserAuthed={false}></NavFirst>
            <div style={{width:'50%', marginLeft:'25%', backgroundColor:'black',borderRadius:'10px',marginTop:'13%',color:'white'}}>
                <div className="row" style={{marginTop:'50px',marginBottom:'50px'}}>
                    <div className="col-4">
                        <img src="images/female.png" alt="coach" style={{height:'180px',width:'120px',borderRadius:'50%',margin:'30px 20px 30px 30px'}}></img>
                    </div>

                    <div className="col-8">
                        <p>Coach Id : 1</p>
                        <p>Date Of Birth: 1/1/1996</p>
                        <p>Mobile Number: 1111111111</p>
                        <p>Speciality: Confidence Enhancer</p>    
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CoachViewProfile;