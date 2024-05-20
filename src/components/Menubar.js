import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { FaBell } from "react-icons/fa";
import { Modal, Button } from 'react-bootstrap';
import { userLogout } from '../redux/UserSlice';
import { BsFillFileMedicalFill } from "react-icons/bs";
import { LiaFileMedicalAltSolid } from "react-icons/lia";

const Menubar = () => {
    const loginStatus = useSelector(store => store.user.loginStatus);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showLogoutModal, setShowLogoutModal] = useState(false);

    const handleLogout = () => {
        setShowLogoutModal(true);
    };

    const confirmLogout = () => {
        setShowLogoutModal(false);
        dispatch(userLogout());
        navigate('/home');
    };

    const cancelLogout = () => {
        setShowLogoutModal(false);
    };

    return (
        <>
            <ul className="menubar-bgcolor px-4 d-flex justify-content-between">
                {loginStatus ? (
                    <>
                        <div className="nav my-4 py-2">
                            <li className="px-4 fs-5">
                                <Link to={'/dashboard'}>
                                    <i className="bi bi-person-workspace"></i> Dashboard
                                </Link>
                            </li>
                            <li className="px-4 fs-5">
                                <Link to={'/appointment'}>
                                <BsFillFileMedicalFill className="m-1"/>
                                     Appointment
                                </Link>
                            </li>
                            <li className="px-4 fs-5">
                                <Link to={'/med-records'}>
                                <LiaFileMedicalAltSolid />
                                     Medical Records
                                </Link>
                            </li>
                            <li className="px-4 fs-5">
                                <Link to={'/payment'}>
                                <LiaFileMedicalAltSolid />
                                     Payment and billing
                                </Link>
                            </li>
                        </div>
                        <div className="nav my-2 py-2">
                            <li className="px-4">
                                <FaBell size={24} className="mt-3"/>
                            </li>
                            
                            <li className="px-4">
                                <Link to={'/profile'}>
                                    <img src="https://cdn-icons-png.flaticon.com/512/4792/4792929.png" width={50} className="border border-secondary rounded-circle" />
                                </Link>
                            </li>
                            <li className="px-4 mt-2 fs-5" onClick={handleLogout}>
                                <i className="bi bi-box-arrow-right"></i> Logout
                            </li>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="nav ">
                            <li className="px-2 mt-2">
                                <p className="fs-2 fw-bold p-2">
                                    <Link to={'/'}>
                                        <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/medical-examination-3-1184489.png?f=webp" width={50} /> PHS
                                    </Link>
                                </p>
                            </li>
                        </div>
                        <div className="nav mt-4">
                            <li className="px-4 fs-5">
                                <Link to={'/login'}>Login</Link>
                            </li>
                            <li className="px-4 fs-5">
                                <Link to={'/register'}>Sign Up</Link>
                            </li>
                        </div>
                    </>
                )}
            </ul>

            <Modal show={showLogoutModal} onHide={cancelLogout} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Logout</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to logout?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={cancelLogout}>
                        No
                    </Button>
                    <Button variant="primary" onClick={confirmLogout}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Menubar;
