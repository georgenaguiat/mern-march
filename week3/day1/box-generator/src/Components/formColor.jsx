import { useState } from "react"

const FormColor = (props) => {
    const { colorList, setColorList } = props;
    const [color, setColor] = useState('');
    const changehandler = (e) => {
        setColor(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
    setColorList([...colorList, color]);
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Color </label>
                    <input type="text" name="color" onChange={changehandler} style={{width: '200px'}} />
                    <button style={{ 
                        width: '50px',
                        height: '30px',
                        margin: '20px',
                        boxShadow: '3px 3px black', 
                        }}>Add</button>
                </div>
            </form>

        </div>
    );
}
export default FormColor;
