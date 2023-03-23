import { useState } from "react";

const DisplayColor = (props) => {
    const { colorList, setColorList } = props;
    return (
        <div>
            {
                colorList.map((color, idx) => (
                    <div key={idx} style={{
                        display: 'inline-block',
                        margin: '10px',
                        height: '50px',
                        width: '50px',
                        background: color
                    }}></div>
                ))
            }
        </div>
    );
}
export default DisplayColor;
