import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Css/Home.css";
import Button from "react-bootstrap/Button";
import NavFirst from "./NavFirst";

function Home(){
    const coachLogin = () =>{
        window.location.assign('/coachlogin');
    }

    const coachSignup = () => {
        window.location.assign('/coachsignup');
    }

    const userLogin = () =>{
        window.location.assign('/userlogin');
    }

    const userSignup = () =>{
        window.location.assign('/usersignup');
    }

    return(
        <React.Fragment>
            <NavFirst></NavFirst>
            <div className="homepart">
                <h1>We are at the heart of appropriate care</h1>
                <div className="row">
                    <div className="col-6">
                        <div className="twoparts">
                            <img src="images/LifeCoachLogin.jpg" style={{height:'100px', width:'100px'}} alt="coach"></img>
                            <br></br>
                            <br></br>
                            <Button variant="primary" onClick={coachLogin}>Login as a Coach</Button>
                            <br></br>
                            <br></br>
                            <Button variant="primary" onClick={coachSignup}>Signup as a Coach</Button>
                            <br></br>
                            <br></br>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="twoparts">
                            <img src="images/UserLogin.jpg" style={{height:'100px', width:'100px'}} alt="user"></img>
                            <br></br>
                            <br></br>
                            <Button variant="primary" onClick={userLogin}>Login as a User</Button>
                            <br></br>
                            <br></br>
                            <Button variant="primary" onClick={userSignup}>Signup as a User</Button>
                            <br></br>
                            <br></br>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}