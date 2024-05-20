import '../App.css'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBone, FaTooth } from "react-icons/fa";
import { BsBagPlusFill } from "react-icons/bs";
import { GiBrain } from "react-icons/gi";
import { MdFaceRetouchingNatural } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";

const Dashboard = () => {

    const [showUpdateEmployeeForm, setShowUpdateEmployeeForm] = useState(false);

    const navigate = useNavigate();

    const patient = {
        date: 28,
        month: 'Aug',
        doctor: 'Dr. Hania',
        location: 'Bangalore'
    }

    const toggleUpdateEmployeeForm = () => {
        setShowUpdateEmployeeForm(!showUpdateEmployeeForm);
        if (!showUpdateEmployeeForm) {
            navigate('/doctors');
        }
    };

    const handleCardClick = (specialization) => {
    navigate(`/doctors?specialization=${specialization}`);
  };

  const handleSend = () => {
    navigate(`/appointment`);
  };

    return (
        <>
    <div className="m-4 p-4">
        <div className='d-flex flex-grow-1'>
            <div>

            <div className="card border shadow-lg rounded-4 object-fit-covers-contain">
            <div className="d-flex flex-row justify-content-around p-2">
            <img src="images/doc-patient.png" width={400} height={400} className="rounded" />
            <div className="d-flex flex-column justify-content-center p-4">
            <p className="fs-1 fw-bold mt-4 pb-4">You need a Doctor?</p>
    <button className="bg-btn rounded-4  fw-bold fs-4 mt-4 mx-4 p-4 opacity-75" onClick={toggleUpdateEmployeeForm}>Find Doctor</button>
            </div>
       

            </div>
       
    </div>

    <div className="card border my-4 py-4 shadow-lg rounded-4  d-flex flex-end object-fit-small-contain ">
        <div className='d-flex flex-column mx-4'>
        <div className="d-flex flex-row justify-content-between mx-4">
                <p className='fs-3 fw-light fst-italic mt-4'>Your appointment schedule</p>
                <button className='bg-btn-small rounded-4 fw-bold mt-3 mr-3 p-3 opacity-75' onClick={handleSend}>New appointment</button>
            </div>
            <hr/>
            <div className='d-flex flex-row justify-content-around'>
                <div className='flex-column'>
                    <div className='card rounded-4 bg-warning opacity-100 px-4 mx-4'>
                        <span className='fs-1 fw-bold text-white'>{patient.date}</span>
                        <span className='fs-4 text-white'>Aug</span>
                    </div>
                    <div className='text-center'>
                    <span className='fs-4 fw-bold mt-2'>{patient.doctor}</span>
                    </div>
                    <div className='text-center'>
                    <span className='fs-6'>{patient.location}</span>
                    </div>
                </div>

                <div className='flex-column'>
                    <div className='card rounded-4 bg-warning opacity-100 px-4 mx-4'>
                        <span className='fs-1 fw-bold text-white'>{patient.date}</span>
                        <span className='fs-4 text-white'>Aug</span>
                    </div>
                    <div className='text-center'>
                    <span className='fs-4 fw-bold mt-2'>{patient.doctor}</span>
                    </div>
                    <div className='text-center'>
                    <span className='fs-6'>{patient.location}</span>
                    </div>
                </div>


                <div className='flex-column'>
                    <div className='card rounded-4 bg-warning opacity-100 px-4 mx-4'>
                        <span className='fs-1 fw-bold text-white'>{patient.date}</span>
                        <span className='fs-4 text-white'>Aug</span>
                    </div>
                    <div className='text-center'>
                    <span className='fs-4 fw-bold mt-2'>{patient.doctor}</span>
                    </div>
                    <div className='text-center'>
                    <span className='fs-6'>{patient.location}</span>
                    </div>
                </div>
            </div>

        </div>
            
       
    </div>




            </div>
        
            <div className='px-2 mx-4 d-flex flex-column py-2'>
      <div className='card border shadow-lg rounded-4 flex-row my-4' onClick={() => handleCardClick('Dentist')}>
        <span className='bg-icon rounded-4 fs-5 p-4 d-flex justify-items-center'><FaTooth fill='white' size={24} className='mx-2' /></span>
        <span className='fs-5 d-flex align-items-center mx-4 px-4'>Dentist</span>
      </div>
      <div className='card border shadow-lg rounded-4 flex-row my-4' onClick={() => handleCardClick('Ortho')}>
        <span className='bg-icon rounded-4 fs-5 p-4 d-flex justify-items-center'><FaBone size={28} fill='white' className='mx-2'/></span>
        <span className='fs-5 d-flex align-items-center mx-4 px-4'>Orthopedic</span>
      </div>
      <div className='card border shadow-lg rounded-4 flex-row my-4' onClick={() => handleCardClick('Physician')}>
        <span className='bg-icon rounded-4 fs-5 p-4 d-flex justify-items-center'><FaUserDoctor size={28} fill='white' className='mx-2' /></span>
        <span className='fs-5 d-flex align-items-center mx-4 px-4'>Physician</span>
      </div>
      <div className='card border shadow-lg rounded-4 flex-row my-4' onClick={() => handleCardClick('Neurologist')}>
        <span className='bg-icon rounded-4 fs-5 p-4 d-flex justify-items-center'><GiBrain size={30} fill='white' className='mx-2'/></span>
        <span className='fs-5 d-flex align-items-center mx-4 px-4'>Neurologist</span>
      </div>
      <div className='card border shadow-lg rounded-4 flex-row my-4' onClick={() => handleCardClick('abc')}>
        <span className='bg-icon rounded-4 fs-5 p-4 d-flex justify-items-center'><MdFaceRetouchingNatural size={30} fill='white' className='mx-2' /></span>
        <span className='fs-5 d-flex align-items-center mx-4 px-4'>Dermatologist</span>
      </div>
      <div className='card border shadow-lg rounded-4 flex-row my-4' onClick={() => handleCardClick('bnasgfhj')}>
        <span className='bg-icon rounded-4 fs-5 p-4 d-flex justify-items-center'><BsBagPlusFill size={28} fill='white' className='mx-2'/></span>
        <span className='fs-5 d-flex align-items-center mx-4 px-4'>Surgeon</span>
      </div>
    </div>

        </div>
        
    </div>
        </>
    )
};

export default Dashboard;