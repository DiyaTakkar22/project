import { BrowserRouter, Route, Routes, Redirect } from "react-router-dom";
import Login from "./user/Login";
import Home from "./Home";
import Menubar from "./Menubar";
import Register from './user/Register';
import Profile from "./user/Profile";
import Logout from './user/Logout';
import { useSelector } from "react-redux";
import Dashboard from "./Dashboard";
import DoctorList from "./DoctorList";
import MedicalRecords from "./MedicalRecords";
import Appointment from "./Appointment";
import Payment from "./user/Payment";


const AppRoutes = () => {

    const loginStatus = useSelector(store => store.user.loginStatus);

    if (loginStatus) {
        return (
            <>
                <BrowserRouter>
                    <Menubar />
                    <Routes>
                        <Route path="home" element={<Home />} />
                        <Route path="logout" element={<Logout />} />
                        <Route path="profile" element={<Profile />} />
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="doctors" element={<DoctorList />} />
                        <Route path="appointment" element={<Appointment />} />
                        <Route path="med-records" element={<MedicalRecords />} />
                        <Route path="payment" element={<Payment />} />
                        
                        <Route exact path="/" element={<Home />} />
                    </Routes>
                </BrowserRouter>
            </>
        );
    }
    else {
        return (
            <>
                <BrowserRouter>
                    <Menubar />
                    <Routes>
                        <Route path="home" element={<Home />} />
                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<Register />} />
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/payment" element={<Payment />} />
                    </Routes>
                </BrowserRouter>
            </>
        );
    }
};

export default AppRoutes;


