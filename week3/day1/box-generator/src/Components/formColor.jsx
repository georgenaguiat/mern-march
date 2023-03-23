import { useState } from "react"

const FormColor = (props) => {
    const {colorList, setColorList} = props;
    const [color, setColor] = useState('');
    const changehandler = (e) => {
        setColor({...color, [e.target.name]:e.target.value})
    }
const submitHandler = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
            <div>
                <label>Color </label>
                <input type="text" name="color" onChange={(e) => setColor(e.target.value)} />
            </div>
            <button>Add</button>
            </form>
            
        </div>
    );
}
export default FormColor
