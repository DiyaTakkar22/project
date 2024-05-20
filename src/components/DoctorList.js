import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

const DoctorList = () => {
  const [empList, setEmpList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  const [paginationEnabled, setPaginationEnabled] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchOption, setSearchOption] = useState("doctorId");

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const specialization = params.get("specialization");
    if (specialization) {
      fetchDoctorsBySpecialization(specialization);
    } else {
      if (paginationEnabled) {
        fetchDoctorData();
      } else {
        fetchInitialData();
      }
    }
  }, [currentPage, paginationEnabled, location.search]);

  const fetchInitialData = () => {
    axios
      .get("http://localhost:9003/ibm-doctor/doctors")
      .then((response) => {
        setEmpList(response.data.slice(0, itemsPerPage));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching doctor data:", error);
        setLoading(false);
        setError("Failed to fetch doctor data. Please try again later.");
      });
  };

  const fetchDoctorData = () => {
    axios
      .get("http://localhost:9003/ibm-doctor/doctors")
      .then((response) => {
        setEmpList(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching doctors data:", error);
        setLoading(false);
        setError("Failed to fetch doctor data. Please try again later.");
      });
  };

  const fetchDoctorsBySpecialization = (specialization) => {
    axios
      .get(`http://localhost:9003/ibm-doctor/doctor/${specialization}`)
      .then((response) => {
        setEmpList(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(`Error fetching doctors with specialization ${specialization}:`, error);
        setLoading(false);
        setError(`Failed to fetch doctors with specialization ${specialization}. Please try again later.`);
      });
  };

  const handleViewAll = () => {
    setPaginationEnabled(true);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = empList.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const filteredItems = currentItems.filter(
    (doc) =>
      doc[searchOption] &&
      doc[searchOption].toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchSubmit = () => {
    const apiEndpoint = searchOption === "name" ? "name" : `doctor/${searchOption}` ;

    axios
      .get(`http://localhost:9003/ibm-doctor/${apiEndpoint}/${searchTerm}`)
      .then((response) => {
        setEmpList(response.data);
        setError(null);
      })
      .catch((error) => {
        console.error(`Error fetching employee data by ${searchOption}:`, error);
        setEmpList([]);
        setError(`Failed to fetch employee data by ${searchOption}. Please try again later.`);
      });
  };

  return (
    <>
      <div className="mb-4 p-2 d-flex flex-row justify-content-between">
        <h1 className="mb-3 mx-4">Doctors</h1>
        <div className="d-flex flex-row justify-content-between mb-3">
          <div className="d-flex flex-row mx-4 ">
            <input
              type="text"
              className="form-control mx-2 px-4 "
              placeholder={`Search by ${searchOption}`}
              value={searchTerm}
              onChange={handleSearch}
            />
            <button className="bg-btn rounded px-2" onClick={handleSearchSubmit}>
              Search
            </button>
          </div>
          <div></div>
        </div>
      </div>
      {loading && <p>Loading...</p>}
      {!loading && error && <p>{error}</p>}
      {!loading && !error && (
        <>
          <div className="row m-2">
            {filteredItems.map((doc, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card shadow rounded-lg">
                  <div className="card-body d-flex flex-column align-items-center">
                    <span className="card-title">
                      <img
                        src="https://banner2.cleanpng.com/20190523/cyb/kisspng-physician-medicine-health-care-general-practitione-5ce67ea99bc7f7.1567409215586095776381.jpg"
                        width={120}
                        className="rounded-circle"
                      />
                    </span>
                    <span className="card-text">{doc.name ? doc.name : "-"}</span>
                    <span className="card-text">{doc.specialization ? doc.specialization : "-"}</span>
                    <span className="card-text">{doc.email ? doc.email : "-"}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {paginationEnabled && (
            <nav className="d-flex justify-content-center">
              <ul className="pagination">
                {Array.from(
                  { length: Math.ceil(empList.length / itemsPerPage) },
                  (_, index) => (
                    <li
                      key={index}
                      className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
                    >
                      <button onClick={() => paginate(index + 1)} className="page-link">
                        {index + 1}
                      </button>
                    </li>
                  )
                )}
              </ul>
            </nav>
          )}
          {!paginationEnabled && (
            <div className="d-flex justify-content-center">
              <button onClick={handleViewAll} className="btn btn-primary">
                View All Doctors
              </button>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default DoctorList;










// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import AddEmployee from "./AddEmployee";
// import "bootstrap-icons/font/bootstrap-icons.css";

// const DoctorList = () => {
//   const [empList, setEmpList] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(6);
//   const [paginationEnabled, setPaginationEnabled] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchOption, setSearchOption] = useState("doctorId");

//   const navigate = useNavigate();

//   useEffect(() => {
//     if (paginationEnabled) {
//       fetchDoctorData();
//     } else {
//       fetchInitialData();
//     }
//   }, [currentPage, paginationEnabled]);

//   const fetchInitialData = () => {
//     axios
//       .get("http://localhost:9003/ibm-doctor/doctors")
//       .then((response) => {
//         console.log(response.data);
//         setEmpList(response.data.slice(0, itemsPerPage));
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching doctor data:", error);
//         setLoading(false);
//         setError("Failed to fetch doctor data. Please try again later.");
//       });
//   };

//   const fetchDoctorData = () => {
//     axios
//       .get("http://localhost:9003/ibm-doctor/doctors")
//       .then((response) => {
//         console.log(response.data);
//         setEmpList(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching doctors data:", error);
//         setLoading(false);
//         setError("Failed to fetch doctor data. Please try again later.");
//       });
//   };

//   const handleViewAll = () => {
//     setPaginationEnabled(true);
//   };

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = empList.slice(indexOfFirstItem, indexOfLastItem);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//     setCurrentPage(1);
//   };

//   const handleSearchOptionChange = (event) => {
//     setSearchOption(event.target.value);
//     setSearchTerm("");
//     setCurrentPage(1);
//   };

//   const filteredItems = currentItems.filter(
//     (doc) =>
//       doc[searchOption] &&
//       doc[searchOption].toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const handleSearchSubmit = () => {
//     // Adjust searchOption value if needed
//     const apiEndpoint =
//       searchOption === "doctorId" ? "id" : `doctors/${searchOption}`;

//     axios
//       .get(`http://localhost:9003/ibm-doctor/${apiEndpoint}/${searchTerm}`)
//       .then((response) => {
//         console.log("button clicked....");
//         console.log("Response data:", response.data); // Log response data for debugging
//         setEmpList(response.data);
//         setError(null); // Reset error state
//       })
//       .catch((error) => {
//         console.error(
//           `Error fetching employee data by ${searchOption}:`,
//           error
//         );
//         setEmpList([]); // Clear the employee list on error
//         setError(
//           `Failed to fetch employee data by ${searchOption}. Please try again later.`
//         );
//       });
//   };

//   return (
//     <>
//       <div className="mb-4 p-2">
//         <h1 className="mb-3">Doctors</h1>
//         <div className="d-flex flex-row justify-content-between mb-3">
//           <div className="d-flex flex-row ">
//             <input
//               type="text"
//               className="form-control mx-2 "
//               placeholder={`Search by ${searchOption}`}
//               value={searchTerm}
//               onChange={handleSearch}
//             />
//             <button className="btn btn-info" onClick={handleSearchSubmit}>
//               Search
//             </button>
//           </div>
//           <div></div>
//         </div>
//       </div>
//       {loading && <p>Loading...</p>}
//       {!loading && error && <p>{error}</p>}
//       {!loading && !error && (
//         <>
//           <div className="row m-2">
//             {filteredItems.map((doc, index) => (
//               <div className="col-md-4 mb-4" key={index}>
//                 <div className="card shadow rounded-lg">
//                   <div className="card-body d-flex flex-column align-items-center">
//                     <span className="card-title">
//                         <img src="https://banner2.cleanpng.com/20190523/cyb/kisspng-physician-medicine-health-care-general-practitione-5ce67ea99bc7f7.1567409215586095776381.jpg" width={120} className="rounded-circle"/>
//                     </span>
//                     <span className="card-text">
//                       {doc.name ? doc.name : "-"} 
//                     </span>
//                     <span className="card-text">
//                        {doc.specialization ? doc.specialization : "-"}
                     
//                     </span>
//                     <span className="card-text">
//                       {doc.email ? doc.email : "-"}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {paginationEnabled && (
//             <nav className="d-flex justify-content-center">
//               <ul className="pagination">
//                 {Array.from(
//                   { length: Math.ceil(empList.length / itemsPerPage) },
//                   (_, index) => (
//                     <li
//                       key={index}
//                       className={`page-item ${
//                         currentPage === index + 1 ? "active" : ""
//                       }`}
//                     >
//                       <button
//                         onClick={() => paginate(index + 1)}
//                         className="page-link"
//                       >
//                         {index + 1}
//                       </button>
//                     </li>
//                   )
//                 )}
//               </ul>
//             </nav>
//           )}
//           {!paginationEnabled && (
//             <div className="d-flex justify-content-center">
//               <button onClick={handleViewAll} className="btn btn-primary">
//                 View All Doctors
//               </button>
//             </div>
//           )}
//         </>
//       )}
//     </>
//   );
// };

// export default DoctorList;
