import React from "react";

const DisplayColor = (props) => {
    const { colorList, setColorList } = props;
    return (
        <div>
            {
                colorList.map((color, idx) => (
                    <div key={idx} style={{
                        display: 'inline-block',
                        width: '150px',
                        height: '150px',
                        margin: '10px',
                        background: color
                    }}></div>
                ))
            }
        </div>
    );
}
export default DisplayColor;
