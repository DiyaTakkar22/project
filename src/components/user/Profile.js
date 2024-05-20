import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import UpdateProfile from "./UpdateProfile";

const Profile = () => {
    const userData = useSelector((state) => state.user.loggedInUser);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleEditClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="m-4 p-4">
            <div className="border shadow-lg rounded-4 px-4 d-flex flex-row justify-content-between">
                <div>
                <h2 className="px-4 py-2">Your Profile</h2>
                {userData && (
                    <div className="d-flex flex-row ">
                        <div className="px-4 py-4 ">
                            {userData.avatar && <img className="object-fit-cover shadow border border-dark rounded-5" src={userData.avatar} alt="Avatar" width={160}/>}
                            
            <Modal show={isModalOpen} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <UpdateProfile />
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn btn-info col-4" onClick={handleCloseModal}>Update</Button>
                </Modal.Footer>
            </Modal>
                            
                        </div>
                        {/* <div className="py-4 mt-2 ">
                        <p className="  fs-5">Username: </p>
                            <p className="  fs-5">Fist name: </p>
                            <p className="  fs-5">Last Name: </p>
                            <p className="  fs-5">Phone: </p>
                            <p className="  fs-5">Email: </p>
                            <p className="  fs-5">D.O.B: </p>
                            <p className="  fs-5">Gender: </p>
                            
                        </div> */}
                    </div>
                )}
                </div>
                <div>
                {!isModalOpen && (
                <p className="fw-bold p-2 fs-5"><button className="btn pb-2 fs-2" onClick={handleEditClick}><i className="bi bi-pencil-fill"></i></button></p>
            )}
            </div>
            </div>
            
        </div>
    );
};

export default Profile;
