import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import {Nav} from "react-bootstrap";
import React from "react";


function NavFirst(props){
    return(
        <React.Fragment>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/home">WeCare</Navbar.Brand>

                {!props.isCoachAuthed && !props.isUserAuthed ? <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    <span><i className="fas fa-phone-square-alt"></i>Call Us: 080 2233447</span>
                </Navbar.Text>
                </Navbar.Collapse>: null}

                {props.isCoachAuthed ?
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link href="/coachviewprofile"><span style={{color:'white', marginRight:'0.8em'}}><i className="fas fa-user-alt"></i>View Profile</span></Nav.Link>
                        <Nav.Link href="/coachschedules"><span style={{color:'white', marginRight:'0.8em'}}><i className="fas fa-clipboard-list"></i>My Schedules</span></Nav.Link>
                        <Navbar.Text><span style={{color:'white', marginRight:'0.8em'}}><i className="fas fa-phone-square-alt"></i>Call Us: 080 2233447</span></Navbar.Text>
                        <Nav.Link href="/home"><span style={{color:'white', marginRight:'0.8em'}}><i className="fas fa-sign-out-alt"></i>Logout</span></Nav.Link>
                    </Navbar.Collapse>:null}

                {props.isUserAuthed ?
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link href="/userviewprofile"><span style={{color:'white', marginRight:'0.8em'}}><i className="fas fa-user-alt"></i> View Profile </span></Nav.Link>
                        <Nav.Link href="/userappointments"><span style={{color:'white', marginRight:'0.8em'}}><i className="fas fa-clipboard-list"></i> My Appointments </span></Nav.Link>
                        <Navbar.Text><span style={{color:'white', marginRight:'0.8em'}}><i className="fas fa-phone-square-alt"></i> Call Us: 080 2233447 </span></Navbar.Text>
                        <Nav.Link href="/home"><span style={{color:'white', marginRight:'0.8em'}}><i className="fas fa-sign-out-alt"></i> Logout </span></Nav.Link>
                    </Navbar.Collapse>:null
                }
                
            </Container>
        </Navbar>
        </React.Fragment>
    )
}

export default NavFirst;