import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../../services/UserService";
import { useDispatch } from "react-redux";
import { userLogin } from "../../redux/UserSlice";

const Login = () => {
    const [loginData, setLoginData] = useState({ username: '', password: '' });
    const [afterSubmit, setAfterSubmit] = useState('');
    const [selectedRole, setSelectedRole] = useState(null); // State to manage selected role
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (evt) => {
        setLoginData({
            ...loginData,
            [evt.target.name]: evt.target.value
        });
    };

    const handleLoginSubmit = (evt) => {
        evt.preventDefault();
        UserService.loginUser(loginData)
            .then((response) => {
                setAfterSubmit(`Hi ${loginData.username}! You've logged in successfully!`);
                setTimeout(() => {
                    setLoginData({ username: '', password: '' });
                    dispatch(userLogin(response));
                    navigate('/profile');
                }, 2000);
            })
            .catch((error) => {
                setLoginData({ username: '', password: '' });
                setAfterSubmit(`Invalid credentials!`);
            });
    };

    const handleRoleSelect = (role) => {
        setSelectedRole(role);
    };

    const handleBackClick = () => {
        setSelectedRole(null);
    };

    const renderLoginForm = () => {
        return (
            <>
            <div className="border rounded-4 shadow m-4 p-4">
                <h2 className="text-center mb-4">{selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)} Login</h2>
                <form className="row g-3 px-4" onSubmit={handleLoginSubmit}>
                    <input
                        type="text"
                        name="username"
                        value={loginData.username}
                        onChange={handleChange}
                        className="input-group-sm px-4 py-2 rounded"
                        placeholder="Enter Username"
                        autoFocus
                        required
                    />
                    <br />
                    <input
                        type="password"
                        name="password"
                        value={loginData.password}
                        className="input-group-sm px-4 py-2 rounded"
                        placeholder="Enter Password"
                        onChange={handleChange}
                        required
                    />
                    <br />
                    <input className="bg-btn p-2 rounded fw-bold" type="submit" value="Login" />
                </form>
                <>
                    <p>{afterSubmit && <p className="text-center text-success">{afterSubmit}</p>}</p>
                </>
                <p className="text-center">Not yet registered? <Link to={'/register'}>Register</Link> </p>
                {/* <button onClick={handleBackClick} className="btn btn-secondary mt-2 mx-2">Back</button> */}
                </div>
            </>
        );
    };

    return (
        <>
            <div className="m-4 p-4 d-flex flex-column justify-content-center align-items-center">
                {!selectedRole ? (
                    <div className="d-flex flex-row justify-content-center align-items-center mt-4">
                        <div className="text-center m-4 px-4" onClick={() => handleRoleSelect('admin')}>
                            <img src="images/admin.png" width={160} className="rounded-circle mt-4" alt="Admin" />
                            <p className="fw-bold fs-4">Admin</p>
                        </div>
                        <div className="text-center m-4 px-4" onClick={() => handleRoleSelect('doctor')}>
                            <img src="images/doctor.png" width={160} className="rounded-circle mt-4" alt="Doctor" />
                            <p className="fw-bold fs-4">Doctor</p>
                        </div>
                        <div className="text-center m-4 px-4" onClick={() => handleRoleSelect('patient')}>
                            <img src="images/user.png" width={160} className="rounded-circle mt-4" alt="Patient" />
                            <p className="fw-bold fs-4">Patient</p>
                        </div>
                    </div>
                ) : (
                    renderLoginForm()
                )}
            </div>
        </>
    );
};

export default Login;
