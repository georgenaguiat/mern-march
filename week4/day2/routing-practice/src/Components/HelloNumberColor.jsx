import React from 'react';
import { useParams } from 'react-router-dom';

const HelloNumberColor = (props) => {

    const { text, color, backgroundColor } = useParams();

    return (
        <div>
            {
                isNaN(text)?
                <h2 style={color?{color: color, background: backgroundColor, height: '50px', padding: '20px'}:null}>This word is: {text}</h2>:
                <h2>This number is: {text}</h2>
            }
        </div>

    )
}

export default HelloNumberColor;
