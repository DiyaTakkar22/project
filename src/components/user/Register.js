import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../../services/UserService";
import { useDispatch } from "react-redux";
import { userRegister } from "../../redux/UserSlice";

const Register = () => {

    const [registerData, setRegisterData] = useState({ username: '', password: '' });
    const [afterRegisterMessage, setAfterRegisterMessage] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (evt) => {
        console.log(evt.target.name);
        console.log(evt.target.value);
        setRegisterData({
            ...registerData,
            [evt.target.name]: evt.target.value
        });
    };

    const handleRegisterSubmit = async (evt) => {
        evt.preventDefault();
        console.log(registerData);
        UserService.registerUser(registerData)
            .then((response) => {
                console.log(response);
                dispatch(userRegister(response));
                setRegisterData({ username: '', password: '' });
                setAfterRegisterMessage(`Hi ${response.username}! You've registered successfully!`);
                setTimeout(() => {
                    navigate('/login');
                }, 2000);
            })
            .catch((error) => {
                console.log(error);
                setAfterRegisterMessage(`Username already exists!`);
            });

    };

    return (
        <>
        <div className="">
            <div className="m-2 p-2 d-flex flex-column border rounded-4 shadow-lg position-absolute translate-middle top-50 start-50 card-bg">
            <h2 className="text-center mb-4">Register Page</h2>
            <form className="row g-3 px-4" onSubmit={handleRegisterSubmit}>
                <input type="text" name="username" value={registerData.username}
                    onChange={handleChange} placeholder="Enter Username"  className="input-group-lg px-4 py-2 rounded" autoFocus required />
                <br />
                <input type="password" name="password" value={registerData.password}
                    onChange={handleChange} placeholder="Enter Password" className="input-group-lg px-4 py-2 rounded" required />
                <br />
                <input type="submit" value="Register" className="bg-btn p-2 rounded fw-bold"/>
            </form>
            <>
                <p>{afterRegisterMessage && afterRegisterMessage} </p>
            </>
            <p className="text-center">Already registered? <Link to={'/login'}>Login</Link> </p>
            </div>
            </div>
        </>
    );
};
export default Register;