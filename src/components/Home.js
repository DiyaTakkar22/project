// import { Nav, Navbar, Container } from "react-bootstrap";
import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Home = () => {

  const cards = [
    'Dentist',
    'Orthopedic',
    'Physician',
    'Neurologist',
    'Dermatologist',
    'Surgeon',
  ];

  const [startIndex, setStartIndex] = useState(0);

  const handlePrevClick = () => {
    setStartIndex(startIndex - 2 < 0 ? 0 : startIndex - 2);
  };

  const handleNextClick = () => {
    setStartIndex(startIndex + 2 >= cards.length ? startIndex : startIndex + 2);
  };

  const handleLoginSubmit = (evt) => {
    evt.preventDefault()
        .then((response) => {
          alert(`Message sent successfully!`)
        })
        .catch((error) => {
            console.log(error)
        });
};


    return (
        <>
            {/* <h4>Home Component</h4> */}
            <div>
      {/* <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#home">My Page</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}

      <div id="home" className="section">
        <p className="fs-3 fw-light">Welcome to Paperless Hospital Service</p> <br />
        <h2>Take Care of Your Health <strong>Anytime</strong>, <br /> <strong>Anywhere !</strong></h2>
      </div>
      <div id="services" className="section">
        <p className="fs-1 text-center">Choose your doctor by specialization and <button className="bg-btn border-0 rounded-5 py-2 px-4 mx-2 fs-4">Book Appointments</button></p>

        {/* <div className="container mt-4 pt-4">
      <div className="row">
        <div className="col-md-4 col-sm-6 col-12">
          <div className="card shadow-lg rounded-lg flex-row m-4 p-4 justify-content-center align-items-center">
            <span className="fs-2 m-4">Dentist</span>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-12">
          <div className="card shadow-lg rounded-lg flex-row m-4 p-4 justify-content-center align-items-center">
            <span className="fs-2 m-4">Orthopedic</span>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-12">
          <div className="card shadow-lg rounded-lg flex-row m-4 p-4 justify-content-center align-items-center">
            <span className="fs-2 m-4">Physician</span>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-12">
          <div className="card shadow-lg rounded-lg flex-row m-4 p-4 justify-content-center align-items-center">
            <span className="fs-2 m-4">Neurologist</span>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-12">
          <div className="card shadow-lg rounded-lg flex-row m-4 p-4 justify-content-center align-items-center">
            <span className="fs-2 m-4">Dermatologist</span>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-12">
          <div className="card shadow-lg rounded-lg flex-row m-4 p-4 justify-content-center align-items-center">
            <span className="fs-2 m-4">Surgeon</span>
          </div>
        </div>
      </div>
    </div> */}

<div className="container mt-4">
      <div className="row position-relative justify-content-center mt-4">
        {cards.slice(startIndex, startIndex + 2).map((card, index) => (
          <div className="col-md-6 col-12" key={index}>
            <div className="card shadow-lg rounded-5 flex-row m-4 p-4 justify-content-center align-items-center">
              <span className="fs-2 m-4 card-bg d-flex flex-column text-center"><img src='https://cdn-icons-png.freepik.com/512/2785/2785482.png' width={160}/>{card}</span>
            </div>
          </div>
        ))}
        <button
          className="btn-arrow position-absolute top-50 start-0 translate-middle-y"
          onClick={handlePrevClick}
          disabled={startIndex === 0}
        >
          <FaArrowLeft />
        </button>
        <button
          className="btn-arrow position-absolute top-50 end-0 translate-middle-y"
          onClick={handleNextClick}
          disabled={startIndex + 2 >= cards.length}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>

      </div>
      <div id="contact" className="section">
        <h1 className="mb-4 lh-lg pb-4 text-center">Connect with experienced Doctors from the comfort of your Home!</h1>
        <br />
        <form className="row col-4 my-2 py-2 px-4" onSubmit={handleLoginSubmit}>

                    <input
                        type="email"
                        name="email"
                        // value={loginData.email}
                        // onChange={handleChange}
                        className="input-group-sm px-4 py-2 my-4 rounded"
                        placeholder="Enter your email"
                        autoFocus
                        required
                    />
                    <br />

                    <input
                        type="text"
                        name="message"
                        // value={loginData.password}
                        className="input-group-sm px-4 py-4 my-4 rounded"
                        placeholder="Enter message here"
                        // onChange={handleChange}
                        required
                    />
                    <br />
                    <input className="bg-btn p-2 rounded fw-bold" type="submit" value="Send" />
                </form>

      </div>
    </div>
        </>
    );
};

export default Home;










// import { Link } from "react-router-dom";

// const Home = () => {
//     const backgroundImageIbm = 'https://e1.pxfuel.com/desktop-wallpaper/648/58/desktop-wallpaper-6-ibm-imb.jpg';

//     return (
//         <>
//             <div
//                 style={{
//                     backgroundImage: `url(${backgroundImageIbm})`,
//                     backgroundSize: 'cover',
//                     backgroundColor: 'black',
//                     display: 'flex',
//                     minHeight: "100vh",
//                     alignItems: 'center',
//                     justifyContent: 'right',
//                 }}
//             >
//                 <div style={{ color: 'white' }}>
//                     <h1>IBM React App</h1>
//                     <Link style={{ textDecoration: 'none' }} to='/login'>Login to continue...</Link>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Home;


