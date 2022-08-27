import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Route from 'react';
import Home from './Components/Home';
import CoachLogin './Components/CoachLogin';
import CoachSignup from './Components/CoachSignup';
import UserLogin from './Components/UserLogin';
import UserSignup from './Components/UserSignup';
import CoachHome from './Components/CoachHome';
import UserHome from './Components/UserHome';
import CoachViewProfile from './Components/CoachViewProfile';
import Footer from './Components/Footer';
import UserViewProfile from './Components/UserViewProfile';
import UserAppointments from './Components/UserAppointments';



function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/coachlogin" element={<CoachLogin />}></Route>
            <Route path="/coachsignup" element={<CoachSignup />}></Route>
            <Route path="/userlogin" element={<UserLogin />}></Route>
            <Route path="/usersignup" element={<UserSignup />}></Route>
            <Route path="/coachhome" element={<CoachHome />}></Route>
            <Route path="/coachschedules" element={<CoachHome />}></Route>
            <Route path="/userhome" element={<UserHome />}></Route>
            <Route path="/coachviewprofile" element={<CoachViewProfile />}></Route>
            <Route path="/userviewprofile" element={<UserViewProfile />}></Route>
            <Route path="/userappointments" element={<UserAppointments />}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
