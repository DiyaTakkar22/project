import React, { useState, useEffect } from 'react';
import { Toast } from 'react-bootstrap';

const Notification = ({ id }) => {
  const [appointmentDetails, setAppointmentDetails] = useState(null);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const fetchAppointmentDetails = async () => {
      try {
        const response = await fetch(`http://localhost:9002/ibm-appointment/appointments/${id}`);
        const data = await response.json();
        setAppointmentDetails(data); // Update appointment details state with fetched data
        setShowToast(true); // Show the toast notification after fetching data
      } catch (error) {
        console.error('Error fetching appointment details:', error);
      }
    };

    if (id) {
      fetchAppointmentDetails();
    }
  }, [id]); // Make sure to include id in the dependency array

  return (
    <>
      {appointmentDetails && (
        <Toast show={showToast} onClose={() => setShowToast(false)} delay={3000} autohide>
          <Toast.Header closeButton={false}>
            <strong className="mr-auto">Appointment Details</strong>
          </Toast.Header>
          <Toast.Body>
            <p><strong>Date:</strong> {appointmentDetails.date}</p>
            <p><strong>Doctor:</strong> {appointmentDetails.doctorName}</p>
            <p><strong>Slot:</strong> {appointmentDetails.slot}</p>
            <p><strong>Patient:</strong> {appointmentDetails.patientId}</p>
          </Toast.Body>
        </Toast>
      )}
    </>
  );
};

export default Notification;
