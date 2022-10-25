import { useState } from "react";
import NavFirst from "./NavFirst";
import axios from "axios";
import React from "react";
import '../Css/Coach.css'


function UserSignup(){
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [gender, setGender] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [email, setEmail] = useState('');
    const [pincode, setPincode] = useState('');
    const [city, setCity] = useState('');
    const [stateName, setStateName] = useState('');
    const [country, setCountry] = useState('');
    const [success, setSuccess] = useState('');

    const [nameError, setNameError] = useState(' ');
    const [passwordError, setPasswordError] = useState(' ');
    const [dobError, setDobError] = useState(' ');
    const [genderError, setGenderError] = useState(' ');
    const [mobileError, setMobileError] = useState(' ');
    const [emailError, setEmailError] = useState(' ');
    const [pinError, setPinError] = useState(' ');
    const [cityError, setCityError] = useState(' ');
    const [stateNameError, setStateNameError] = useState(' ');
    const [countryError, setCountryError] = useState(' ');



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

        if(!email){
            setEmailError("Email should be valid");
            setSuccess('');
        }else{
            setEmailError('');
        }

        
        if(pincode.length !== 6){
            setPinError("Pincode should have 6 digits");
            setSuccess('');
        }else{
            setPinError('');
        }

        if(city.length <5 || city.length>20){
            setCityError("City should have 5 to 20 characters");
            setSuccess("");
        }else{
            setCityError("");
        }

        if(stateName.length <5 || stateName.length>20){
            setStateNameError("State should have 5 to 20 characters");
            setSuccess("");
        }else{
            setStateNameError("");
        }

        if(country.length <4 || country.length>20){
            setCountryError("Country should have 4 to 20 characters");
            setSuccess("");
        }else{
            setCountryError("");
        }

        if(nameError==='' && passwordError==='' && dobError==='' && genderError==='' && mobileError==='' && emailError==='' && pinError==='' && cityError==='' && stateNameError==='' && countryError===''){
            let newUser = {name: name, password:password, dateOfBirth:dateOfBirth, gender:gender, mobileNumber:mobileNumber, email:email, pincode:pincode, city:city, stateName:stateName, country:country};
            axios.post('http://localhost:4000/users', newUser).then((res) =>{
                setSuccess(`Your User Id is ${res.data.id}`);
                console.log(success);
            })
        }else{
            setSuccess('');
        }
        console.log(success);

    }

    const userloginhandle = () =>{
        window.location.assign('/userlogin');
    }

    if(!success){
        return(
            <React.Fragment>
                <NavFirst />
                <div className="coachsignform">
                    <div className="coachsignuptitle">
                        <span><img src="images/UserLogin.jpg" alt="user" style={{height:'50px', weight:'45px', marginRight:'15px'}}></img>
                        <h1 style={{display:'inline'}}> User Profile</h1></span>
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
                                        <label htmlFor="dob">Mobile Number</label>
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
                                        <label htmlFor="speciality">Email</label>
                                        <input 
                                        style={{width:"100%"}}
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        value={email}
                                        onChange={(event) => setEmail(event.target.value)}
                                        />
                                        {emailError?<div className="text-danger">{emailError}</div>:null}
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="mobile">Date of Birth:</label>
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
                                        <label htmlFor="pin">Pincode</label>
                                        <input 
                                        style={{width:"100%"}}
                                        type="number"
                                        className="form-control"
                                        id="pin"
                                        name="pincode"
                                        value={pincode}
                                        onChange={(event) => setPincode(event.target.value)}
                                        />
                                        {pinError?<div className="text-danger">{pinError}</div>:null}
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="city">City</label>
                                        <input 
                                        style={{width:"100%"}}
                                        type="text"
                                        className="form-control"
                                        id="city"
                                        name="city"
                                        value={city}
                                        onChange={(event) => setCity(event.target.value)}
                                        />
                                        {cityError?<div className="text-danger">{cityError}</div>:null}
                                    </div>
                                </div>

                            </div>

                            <div className="row">

                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="state">State</label>
                                        <input 
                                        style={{width:"100%"}}
                                        type="text"
                                        className="form-control"
                                        id="state"
                                        name="state"
                                        value={stateName}
                                        onChange={(event) => setStateName(event.target.value)}
                                        />
                                        {stateNameError?<div className="text-danger">{stateNameError}</div>:null}
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="country">Country</label>
                                        <input 
                                        style={{width:"100%"}}
                                        type="text"
                                        className="form-control"
                                        id="country"
                                        name="country"
                                        value={country}
                                        onChange={(event) => setCountry(event.target.value)}
                                        />
                                        {countryError?<div className="text-danger">{countryError}</div>:null}
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
                    <img src="images/Userlogin.jpg" alt="user" style={{height:'200px', width:'190px', marginRight:'15px'}}></img>
                    <h1>Account Created Successfully</h1>
                    <h3>{success}</h3>
                    <button onClick={userloginhandle} className="btn btn-primary">Login Now</button>
                </div>
            </React.Fragment>
        )
    }
}

export default UserSignup;