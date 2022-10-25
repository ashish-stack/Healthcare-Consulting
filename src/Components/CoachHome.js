import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import React from "react";
import NavFirst from "./NavFirst";
import '../Css/CoachHome.css';

function CoachHome(){
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/bookings').then((res) => {
            let value = res.data;
            setAppointments(value);
        });
    }, [])

    return(
        <React.Fragment>
            <NavFirst isCoachAuthed={true} isUserAuthed={false} />
            {appointments.length!==0 ?
                <div className="appoint">
                    <div className="row">
                        {appointments.map(appointment => {
                            return (
                                <div className="col-6" key={appointment.bookingId}>
                                    <div className="appointcol">
                                    <h2>Appointment Date:</h2>
                                    <h3>{appointment.date}</h3>
                                    <h2>Slot:{appointment.slot}</h2>
                                    <h5>Booking Id:{appointment.bookingId}</h5>
                                    <h5>User Id:{appointment.userId}</h5>
                                    </div>
                                </div>
                            )
                        })

                        }
                    </div>
                </div>
                :
                <div className="noappoint">
                    <img src="images/Notepad_icon.svg.png" alt="none" style={{height:'100px', width:'95px', marginRight:'15px'}}></img>
                    <p>No Planned <br></br>schedules yet</p>
                </div>
            }
        </React.Fragment>
    )
}

export default CoachHome;