import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { userLogout } from '../../redux/UserSlice';
import { useState } from "react";
import { Modal, Button } from 'react-bootstrap';

const Logout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(true);

    const handleClose = () => {
        setShowModal(false);
        navigate(-1);  // Navigate back to the previous page if they cancel
    };

    const handleLogoutConfirm = () => {
        setShowModal(false);
        dispatch(userLogout());
        navigate('/home');
    };

    return (
        <>
            <Modal show={showModal} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Logout</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to logout?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        No
                    </Button>
                    <Button variant="primary" onClick={handleLogoutConfirm}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Logout;
