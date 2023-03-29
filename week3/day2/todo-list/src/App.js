import './App.css';
import { useState } from 'react';
import TodoListDisplay from './Components/TodoListDisplay';
import TodoListForm from './Components/TodoListForm';

function App(props) {

  

  const [toDoList, setToDoList] = useState([]);
  

  return (
    <div className="App">
      <TodoListForm toDoList={toDoList} setToDoList={setToDoList}/>
      <TodoListDisplay toDoList={toDoList} setToDoList={setToDoList}/>
    </div>
  );
}

export default App;
