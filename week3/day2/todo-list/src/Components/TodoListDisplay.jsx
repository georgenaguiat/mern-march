import { useState } from 'react';
import './TodoListDisplay.css'


const TodoListDisplay = (props) => {

    const { toDoList, setToDoList } = props;


    const toggleItem = (toDoItem) => {
        const updateToDoItem = toDoList.map((item) => {
            if (item === toDoItem) {
                item.checkTodoItem = !item.checkTodoItem
            }
            return item
        })
        setToDoList(updateToDoItem)
    }

    const deleteHandler = (toDoItem) => {
        const deleteTodoList = toDoList.filter(item => item !== toDoItem)
        setToDoList(deleteTodoList)
    }


    return (
        <div className='list'>
            {
                toDoList.map((toDo, idx) => (
                    <div className='toDoItemList' key={idx}>
                        {
                            toDo.checkTodoItem ?
                                <h3 className='line-though'> {toDo.text}</h3> :
                                <h3> {toDo.text}</h3>
                        }
                        <input
                            type="checkbox"
                            name="checkTodoItem"
                            checked={toDo.checkTodoItem}
                            onClick={() => toggleItem(toDo)} />
                        <button className='deleteBtn' onClick={() => deleteHandler(toDo)}>Delete</button>
                    </div>
                ))
            }
        </div>
    );
}

export default TodoListDisplay;