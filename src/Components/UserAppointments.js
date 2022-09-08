const { useEffect } = require("react");
const { useState } = require("react");
import NavFirst from "./NavFirst";
import React from "react";
import '../Css/UserHome.css';
import RescheduleAndDelete from "./RescheduleAndDelete";
import Popup from "reactjs-popup";

function UserAppointments(){
    const [appointments, setAppointments] = useState([]);
    const [reschedule, setReschedule] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:4000/bookings').then((res) =>{
            let value = res.data;
            setAppointments(value);
        });
    },[])

    return(
        <React.Fragment>
            <NavFirst isCoachAuthed={false} isUserAuthed={true}></NavFirst>
            {!reschedule ?
                <div className="appointlist">
                    <div className="row">
                        {appointments.map(appointment =>{
                            return(
                                <div className="col-6" key={appointment.bookingId}>
                                    <div className="appointdisp">
                                        <p style={{fontSize:'40px', fontWeight:'lighter'}}>Appointment Date:<br></br>{appointment.date}</p>
                                        <p style={{fontSize:'30px', fontWeight:'lighter'}}>Slot: {appointment.slot}</p>
                                        <p style={{fontSize:'20px', fontWeight:'lighter'}}>Booking Id: {appointment.bookingId}</p>
                                        <p style={{fontSize:'20px', fontWeight:'lighter'}}>User Id:{appointment.userId}</p>
                                        <p style={{fontSize:'20px', fontWeight:'lighter'}}>Coach Id: {appointment.coachId}</p>
                                        <button className="btn btn-info" style={{color:'white'}} onClick={() => setReschedule(true)}>Reschedule Appointment</button>
                                        <br></br>
                                        <Popup trigger={<button className="btn btn-danger">Cancel Appointment</button>} position="right center">
                                            <div style={{width:'100%', backgroundColor:'white',borderRadius:'10px', height:'100px'}}>
                                                <p>Are you sure want to cancel the appointment?</p>
                                                <button className="btn btn-success">Yes</button>
                                                <button className="btn btn-danger">No</button>
                                            </div>
                                        </Popup>
                                    </div>
                                </div>
                            )
                        })

                        }
                    </div>
                    <button className="btn btn-info" style={{color:"white", width:"150px", marginBottom:"15px", marginRight:"20px", marginTop:"20px", textAlign:"center"}} onClick={() => window.location.assign('/userhome')}><i className="fas fa-arrow-left" style={{marginRight:'8px'}}></i>Go Back</button>
                </div>:
                <RescheduleAndDelete />
            }
        </React.Fragment>
    )
}

export default UserAppointments;