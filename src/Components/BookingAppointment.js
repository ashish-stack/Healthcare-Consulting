import axios from "axios";
import React, {useState} from "react";
import "../Css/UserHome.css";

function BookingAppointment(props){
    const [second, setSecond] = useState(false);
    const [dateOfAppointment, setDateOfAppointment] = useState('');
    const [slot, setSlot] = useState('');
    const [doaError, setDoaError] = useState(' ');

    const handleSubmit = (e) => {
        const todayDate = new Date();
        const doaDate = new Date(dateOfAppointment);

        if(dateOfAppointment==='' || (doaDate.getTime()-todayDate.getTime())/(60*60*24*1000)>7){
            setDoaError("Appointment days should be any upcoming 7 days");
        }else{
           setDoaError('');
        }
        console.log(doaError);

        if(doaError===''){
            let newBooking = {date:dateOfAppointment, slot:slot, userId:props.userId, coachId:props.coachId};

            axios.post('http://localhost:4000/bookings', newBooking,{headers:{"Content-Type":"application/json"}}).then((res) => {
                setSecond(true);
            })
        }
    }

    function SubmitButton(){
        if(dateOfAppointment && slot){
            return (
                <React.Fragment>
            <button onClick={handleSubmit} type="button" className="btn btn-success" style={{width:'90%', marginTop:'20px', marginBottom:'30px'}}> Confirm your Appointment </button>
            </React.Fragment>
            )
        } else{
            return (
                <React.Fragment>
                <button onClick={handleSubmit} type="button" className="btn btn-success" style={{width:'90%', marginTop:'20px', marginBottom:'30px'}} disabled> Confirm your Appointment </button>
                </React.Fragment>
                )
        };
    };

    return(
        <React.Fragment>
        {!second ?
            <div className="booking">
            <div style={{paddingTop:'50px', paddingBottom:'20px'}}><img src='images/Notepad_icon.svg.png' alt="Notepad" style={{height:'50px', width:'45px', marginRight:'15px'}}></img><p style={{display:'inline', fontSize:'30px',fontWeight:'lighter'}}>Proceed with your Appointment</p></div>
            <form>
                <div className="form-group">
                    <label htmlFor="dob">Date of Appointment:</label>
                    <input style={{width:"100%"}} type="date" className="form-control" id="dob" placeholder="mm/dd/yyyy" name="dateOfAppointment"
                    value={dateOfAppointment}
                    onChange={(event) => setDateOfAppointment(event.target.value)} />
                </div>

                <div className="form-group">
                    <p>Preferred Slot</p>

                    <div className="form-check-inline" value={slot} onChange={(event) => setSlot(event.target.value)}>
                        <label className="form-check-label" htmlFor="slot">
                        <input type="radio" className="form-check-input" id="slot" name="slot" value="9 AM to 10 AM" /> 90 AM to 10 AM
                        </label>
                    </div>

                    <div className="form-check-inline" value={slot} onChange={(event) => setSlot(event.target.value)}>
                        <label className="form-check-label" htmlFor="slot">
                        <input type="radio" className="form-check-input" id="slot" name="slot" value="10 AM to 11 AM" /> 10 AM to 11 AM
                        </label>
                    </div>

                    <div className="form-check-inline" value={slot} onChange={(event) => setSlot(event.target.value)}>
                        <label className="form-check-label" htmlFor="slot">
                        <input type="radio" className="form-check-input" id="slot" name="slot" value="11 AM to 12 AM" /> 11 AM to 12 AM
                        </label>
                    </div>

                    <div className="form-check-inline" value={slot} onChange={(event) => setSlot(event.target.value)}>
                        <label className="form-check-label" htmlFor="slot">
                        <input type="radio" className="form-check-input" id="slot" name="slot" value="2 PM to 3 PM" /> 2 PM to 3 PM
                        </label>
                    </div>

                    <div className="form-check-inline" value={slot} onChange={(event) => setSlot(event.target.value)}>
                        <label className="form-check-label" htmlFor="slot">
                        <input type="radio" className="form-check-input" id="slot" name="slot" value="3 PM to 4 PM" /> 3 PM to 4 PM
                        </label>
                    </div>

                    <div className="form-check-inline" value={slot} onChange={(event) => setSlot(event.target.value)}>
                        <label className="form-check-label" htmlFor="slot">
                        <input type="radio" className="form-check-input" id="slot" name="slot" value="4 PM to 5 PM" /> 4 PM to 5 PM
                        </label>
                    </div>
                </div>

                <SubmitButton />
                {doaError?<div className="text-danger">{doaError}</div>:null}
            </form>
            </div>
        :
        <div style={{backgroundColor:'black',color:'white', width:'40%', marginLeft:'30%',borderRadius:'10px',textAlign:'center',marginTop:'15%', marginBottom:'15%'}}>
            <h4 style={{paddingTop:'20px', marginBottom:'30px',fontWeight:'lighter'}}> Your appointment is scheduled Successfully
            </h4>
            <button className="btn btn-info" style={{width:'40%', marginBottom:'30px', marginRight:'20px', marginLeft:'10%', color:'white'}} onClick={() => window.location.assign('/userhome')}><i className="fas fa-arrow-left" style={{marginRight:'8px'}}></i>Go Back</button>
        </div>
        }
        </React.Fragment>
    )
}

export default BookingAppointment;