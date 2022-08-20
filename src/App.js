import logo from './logo.svg';
import './App.css';

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
