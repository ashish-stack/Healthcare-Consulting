import { useState } from "react";
import NavFirst from "./NavFirst";
import axios from "axios";
import React from "react";
import '../Css/Coach.css'


function CoachSignup(){
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [gender, setGender] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [speciality, setSpeciality] = useState('');
    const [success, setSuccess] = useState('');

    const [nameError, setNameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [dobError, setDobError] = useState('');
    const [genderError, setGenderError] = useState('');
    const [mobileError, setMobileError] = useState('');
    const [specError, setSpecError] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();

        if(name.length<3 || name.length>50){
            setNameError("Name should have 3 to 50 characters");
            setSuccess('');
        }else{
            setNameError('');
        }

        if(password.length<5 || password.length>10){
            setPasswordError("Password should have 5 to 10 characters");
            
        }else{
            setPasswordError('');
        }


        const birthDate = new Date(dateOfBirth);
        const todayDate = new Date();

        if(dateOfBirth==='' || (todayDate.getFullYear()-birthDate.getFullYear())<20 || (todayDate.getFullYear()-birthDate.getFullYear())>100){
            setDobError("Age should be between 20 and 100 years");
            setSuccess('');
        }else{
            setDobError('');
        }

        if(gender===''){
            setGenderError("required");
            setSuccess('');
        }else{
            setGenderError('');
        }

        if(mobileNumber.length!==10){
            setMobileError("Mobile Number should have 10 digits");
            setSuccess('');
        }else{
            setMobileError('');
        }

        if(speciality.length<10 || speciality.length>50){
            setSpecError("Speciality should have 10 to 50 characters");
            setSuccess('');
        }else{
            setSpecError('');
        }

        if(nameError==='' && passwordError==='' && dobError==='' && genderError==='' && mobileError==='' && specError===''){
            let newCoach = {name: name, password:password, dateOfBirth:dateOfBirth, gender:gender, mobileNumber:mobileNumber, speciality:speciality};
            axios.post('http://localhost:4000/coaches',newCoach).then((res) =>{
                setSuccess(`Your Coach Id is ${res.data.id}`);
                console.log(success);
            })
        }else{
            setSuccess('');
        }
        console.log(success);

    }

    const coachloginhandle = () =>{
        window.location.assign('/coachlogin');
    }

    if(!success){
        return(
            <React.Fragment>
                <NavFirst />
                <div className="coachsignform">
                    <div className="coachsignuptitle">
                        <span><img src="images/LifeCoachLogin.jpg" alt="coach" style={{height:'50px', weight:'45px', marginRight:'15px'}}></img></span>
                        <h1 style={{display:'inline'}}> Life Coach Profile</h1>
                    </div>

                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className="row">

                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="name">Name:</label>
                                        <input 
                                        style={{width:"100%"}}
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        value={name}
                                        onChange={(event) => setName(event.target.value)}
                                        />
                                        {nameError?<div className="text-danger">{nameError}</div>:null}
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="pwd">Password:</label>
                                        <input 
                                        style={{width:"100%"}}
                                        type="password"
                                        className="form-control"
                                        id="pwd"
                                        name="password"
                                        value={password}
                                        onChange={(event) => setPassword(event.target.value)}
                                        />
                                        {passwordError?<div className="text-danger">{passwordError}</div>:null}
                                    </div>
                                </div>
                            </div>

                            <div className="row">

                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="dob">Date of Birth:</label>
                                        <input 
                                        style={{width:"100%"}}
                                        type="date"
                                        className="form-control"
                                        id="dob"
                                        placeholder="mm/dd/yyyy"
                                        name="dateOfBirth"
                                        value={dateOfBirth}
                                        onChange={(event) => setDateOfBirth(event.target.value)}
                                        />
                                        {dobError?<div className="text-danger">{dobError}</div>:null}
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className="form-group">
                                        <p>Gender</p>
                                        <div className="form-check-inline" value={gender} onChange={(event) => setGender(event.target.value)}>
                                            <label className="form-check-label" htmlFor="male">
                                            <input type="radio" className="form-check-input" id="male" name="gender" value="Male" />Male
                                            </label>
                                        </div>
                                        <div className="form-check-inline" value={gender} onChange={(event) => setGender(event.target.value)}>
                                            <label className="form-check-label" htmlFor="female">
                                            <input type="radio" className="form-check-input" id="female" name="gender" value="Female" />Female
                                            </label>
                                        </div>
                                        {genderError?<div className="text-danger">{genderError}</div>:null}
                                    </div>
                                </div>

                            </div>

                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="mobile">Mobile Number</label>
                                        <input 
                                        style={{width:"100%"}}
                                        type="number"
                                        className="form-control"
                                        id="mobile"
                                        name="mobileNumber"
                                        value={mobileNumber}
                                        onChange={(event) => setMobileNumber(event.target.value)}
                                        />
                                        {mobileError?<div className="text-danger">{mobileError}</div>:null}
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="speciality">Speciality</label>
                                        <input 
                                        style={{width:"100%"}}
                                        type="text"
                                        className="form-control"
                                        id="speciality"
                                        name="speciality"
                                        value={speciality}
                                        onChange={(event) => setSpeciality(event.target.value)}
                                        />
                                        {specError?<div className="text-danger">{specError}</div>:null}
                                    </div>
                                </div>

                            </div>
                            <button type="submit" className="btn btn-success" style={{marginTop:'5%', marginBottom:'5%', width:'30%'}}>Register</button>
                        </form>
                    </div>

                </div>
            </React.Fragment>
        )
    }
    else{
        return(
            <React.Fragment>
                <NavFirst />
                <div className="successcoachsignup">
                    <img src="images/LifeCoachLogin.jpg" alt="coach" style={{height:'200px', width:'190px', marginRight:'15px'}}></img>
                    <h1>You are a Coach now!</h1>
                    <h3>{success}</h3>
                    <button onClick={coachloginhandle} className="btn btn-primary">Login</button>
                </div>
            </React.Fragment>
        )
    }
}

export default CoachSignup;