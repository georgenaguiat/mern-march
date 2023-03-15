import React, { useState } from 'react';

const InfoCard = (props) => {
    const {personName, age, hairColor} = props;
    const [stateAge, setStateAge] = useState(age);
    const increaseAge = () => {
        setStateAge(stateAge+1)
    }
    return (
        <div>
            <h1>{personName}</h1>
            <h3>Age: {stateAge}</h3>
            <h3>hair Color: {hairColor}</h3>
            <button onClick={increaseAge}>Birthday Button for {personName}</button>
        </div>
    );
}

export default InfoCard;
