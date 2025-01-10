import { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';



function App() {
  const [todos, setTodos] = useState([]);

  const [error, setError] = useState(false);

  const [inputValue, setInputValue] = useState("");

  const [filterState, setFilterState] = useState("ALL")

  const handleInputChange = (e) => {
    setInputValue(e.target.value);

  }



  const handleAddTaskButton = (e) => {
    if (inputValue.length === 0) {
      setError(true);
    } else {
      setError(false);
      setTodos([...todos, { description: inputValue, status: "DELETED", id: uuidv4() }]);
      setInputValue("");

    }
  };

  const handleTaskCheckBox = (id) => {
    const tasks = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, status: "COMPLETED" };
      } else {
        return todo;
      }
    });
    setTodos(tasks);
    console.log(tasks);
  };

  const handleFilterStateChange = (state) => {
    setFilterState(state);
  }

  return (
    <div className='container'> 
    <div className='board'>
    <h2 className='Todo'> To-do List</h2>

      <div className='Tom'>{error && alert("please enter task" )}
     
      <input className='input'
        placeholder='Add a new task ... '
        value={inputValue}
        onChange={handleInputChange}
      />
      <button className='addButton' onClick={handleAddTaskButton}>Add Task </button>
      </div>
      <div className='box1'>
        <div onClick={() => handleFilterStateChange("ALL")}  className='button3'>ALL</div>
        <div onClick={() => handleFilterStateChange("ACTIVE")}  className='button1'>ACTIVE</div>
        <div onClick={() => handleFilterStateChange("COMPLETED")}  className='button2'>COMPLETED</div>
      </div>
      <h3 className='p'> No tasks yet. Add one above!</h3>
      <div className='P' > 
        <p className='p2'> Powered by</p>
       <a href="https://pinecone.mn/" className='p3'> Pinecone academy </a> 
      </div>
      

      {todos
        .filter((todo) => {
          if (filterState === "ACTIVE") {
            return todo.status === "ACTIVE";
          } else if (filterState === "COMPLETED") {
            return todo.status === "COMPLETED"
          } else {
            return true;
          }
        })
        .map((todo) => {
          return (
            <div>
              <input
                type="checkbox"
                cheked={todo.status === "COMPLETED"}
                onChange={() => handleTaskCheckBox(todo.id)}
              />
              {todo.description}
            </div>
          )
        })}
        </div>
    </div>
  );
}































export default App;
