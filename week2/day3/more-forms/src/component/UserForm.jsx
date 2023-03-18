import { useState } from "react";

const UserForm = (props) => {

    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const formHandler = (event) => {
        event.preventDefault();
        setUserData(preState => ({ ...preState, [event.target.name]: event.target.value }))
    };

    return (
        <div>
            <form>
                <div className="col">
                    <label>First Name:  </label>
                    <input type="text" name="firstName" onChange={formHandler} />
                    {
                        userData.firstName.length < 2 && userData.firstName.length > 0 ?
                            <p>First Name must be at least 2 characters</p> :
                            null
                    }
                </div>
                <div className="col">
                    <label>Last Name:  </label>
                    <input type="text" name="lastName" onChange={formHandler} />
                    {
                        userData.lastName.length < 2 && userData.lastName.length > 0 ?
                            <p>Last Name must be at least 2 characters</p> :
                            null
                    }
                </div>
                <div className="col">
                    <label>Email:  </label>
                    <input type="email" name="email" onChange={formHandler} />
                    {
                        userData.email.length < 5 && userData.email.length > 0 ?
                            <p>Email must be at least 5 characters</p> :
                            null
                    }
                </div>
                <div className="col">
                    <label>Password:  </label>
                    <input type="password" name="password" onChange={formHandler} />
                    {
                        userData.password.length < 8 && userData.password.length > 0 ?
                        <p>Password must be at least 8 characters</p> :
                        null
                    }
                </div>
                <div className="col">
                    <label>Confirm Password:  </label>
                    <input type="password" name="confirmPassword" onChange={formHandler} />
                    {
                        userData.confirmPassword !== userData.password ?
                        <p>Password must match</p> :
                        null
                    }
                </div>
            </form>
        </div>
    );
};
export default UserForm;
