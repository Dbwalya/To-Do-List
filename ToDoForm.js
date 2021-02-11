import { useState } from 'react';

const ToDoForm = () => {
 const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput(“”);
  
    }
 const [ userInput, setUserInput ] = useState('');
    return (
        <div>
            <input value={userInput} type="text" onChange={handleChange} placeholder="Enter task..."/>
        </div>
    )
}

export default ToDoForm;
