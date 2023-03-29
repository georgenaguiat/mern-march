import { useState } from "react";
import './TodoListForm.css'


const TodoListForm = (props) => {

    const { toDoList, setToDoList } = props;

    const [toDo, setToDo] = useState({
        text: '',
        checkTodoItem: false,
    })



    const changehandler = (e) => {
        setToDo({ ...toDo, [e.target.name]: e.target.value });
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setToDoList(preState => [...preState, toDo]);
        setToDo({
            text: '',
            checkTodoItem: false,
        })
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <h1>Todo List</h1>
                <input type="text" name="text" placeholder="Todo List Items" onChange={changehandler} value={toDo.text}></input>
                <div>
                    <button className="toDoListBtn">Add</button>
                </div>
            </form>
        </div>
    );
}

export default TodoListForm;