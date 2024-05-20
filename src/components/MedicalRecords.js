import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const MedicalRecords = () => {
    const [records, setRecords] = useState([]);
    const [loading, setLoading] = useState(true);
    const loggedInUser = useSelector(state => state.loggedInUser); // Fetch loggedInUser from Redux state

    useEffect(() => {
        if (loggedInUser && loggedInUser.eid) {
            // Fetch data from your API endpoint using the eid fetched from Redux
            fetch(`http://localhost:8090/prescriptions/get-pre-by-id/${loggedInUser.eid}`)
                .then(response => response.json())
                .then(data => {
                    setRecords(data); // Set fetched data to state
                    setLoading(false); // Set loading to false once data is fetched
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                    setLoading(false); // Set loading to false in case of error
                });
        } else {
            setLoading(false); // Set loading to false if loggedInUser or eid is undefined
        }
    }, [loggedInUser]); // Include loggedInUser in the dependency array to re-fetch data when it changes

    return (
        <div className="container">
            <h1 className="mt-5">Medical Records</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="mt-5">
                    <h2>Medical Records</h2>
                    {records.length === 0 ? (
                        <p>No records available</p>
                    ) : (
                        <ul className="list-group">
                            {records.map((record, index) => (
                                <li key={index} className="list-group-item">
                                    <strong>Patient ID:</strong> {record.patientId}<br />
                                    <strong>Record ID:</strong> {record.recordId}<br />
                                    <strong>Medication Name:</strong> {record.medicationName}<br />
                                    {/* Include other record fields */}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </div>
    );
};

export default MedicalRecords;
