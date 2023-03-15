import React from "react";

const UserInfo = (props) => {
    let {name, personAge, color} = props
    return (
        <div>
            <h1>{name}</h1>
            <p>Age: {personAge}</p>
            <p>Hair Color: {color}</p>
        </div>
        
    )
}
export default UserInfo;
