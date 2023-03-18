import { useState } from "react";
import App from "../App";

const UserForm = (props) => {
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const userHandler = (event) => {
        event.preventDefault();
        setUserData(preState => ({ ...preState, [event.target.name]: event.target.value }))
    }

    return (
        <div>
            <form>
                <div className="col">
                    <label>First Name: </label>
                    <input type="text" name="firstName" onChange={userHandler} />
                </div>
                <div className="col">
                    <label>Last Name: </label>
                    <input type="text" name="lastName" onChange={userHandler} />
                </div>
                <div className="col">
                    <label>Email: </label>
                    <input type="email" name="email" onChange={userHandler} />
                </div>
                <div className="col">
                    <label>Password: </label>
                    <input type="password" name="password" onChange={userHandler} />
                </div>
                <div className="col">
                    <label>Confirm Password: </label>
                    <input type="password" name="confirmPassword" onChange={userHandler} />
                </div>
            </form>
            <div>
                <h1>Your Form Data</h1>
                <p>
                    <label>First Name: {userData.firstName}</label>
                </p>
                <p>
                    <label>Last Name: {userData.lastName}</label>
                </p>
                <p>
                    <label>Email: {userData.email}</label>
                </p>
                <p>
                    <label>Password: {userData.password}</label>
                </p>
                <p>
                    <label>Confirm Password: {userData.confirmPassword}</label>
                </p>
            </div>
        </div>
    )
}

export default UserForm