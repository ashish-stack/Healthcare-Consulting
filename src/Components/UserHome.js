import { useEffect } from "react";
import { useState } from "react";
import NavFirst from "./NavFirst";
import React from "react";
import '../Css/UserHome.css';
import {useLocation} from "react-router-dom";
import BookingAppointment from "./BookingAppointment";
import axios from "axios";

function UserHome(){
    const [allCoach, setAllCoach] = useState([]);

    const {state} = useLocation();

    const [coachId,setCoachId] = useState('');
    const [first, setFirst] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:4000/coaches').then((res) => {
            let value = res.data;
            setAllCoach(value);
        });
    }, [])

    return(
        <React.Fragment>
            <NavFirst isCoachAuthed={false} isUserAuthed={true}></NavFirst>
            {!first?
            <div className="coachlist">
                <div className="row" style={{textAlign:'center'}}>
                {allCoach.map((coach) => {
                    return(
                        <div className="col-6" key={coach.id}>
                            <div className="row coachdisp">
                                {coach.gender==='Male'?<div className="col-4"><img src="images/male.png" alt="coach" style={{height:'180px',width:'95%',borderRadius:'50%',margin:'30px 15px 30px 15px'}}></img></div>
                                :<div className="col-4"><img src="images/female.png" alt="coach" style={{height:'180px',width:'95%',borderRadius:'50%',margin:'30px 15px 30px 15px'}}></img></div>}
                            
                                <div className="col-8">
                                    <p style={{fontSize:'30px'}}>{coach.name}</p>
                                    <p style={{fontSize:'20px'}}>Coach Id:{coach.id}</p>
                                    <p style={{fontSize:'15px'}}>Mobile No.{coach.mobileNumber}</p>
                                    <p style={{fontSize:'15px'}}>Speciality: {coach.speciality}</p>
                                    <button className="btn btn-primary" style={{marginBottom:'20px'}} onClick={() => {setFirst(true); setCoachId(coach.id);}}>Book an Appointment</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>
            :
            <BookingAppointment userId={1} coachId={coachId}/>
            }
        </React.Fragment>
    )
}

export default UserHome;