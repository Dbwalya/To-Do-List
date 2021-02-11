import React, { useState } from 'react';
import data from './Data.json';
import ToDoForm from './ToDoForm';
//components
import Header from './Header';
import ToDoList from './ToDoList';
 
import './App.css';
 
function App() {
  const [ toDoList, setToDoList ] = useState(data);
 
  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }
  const handleToggle = (id) => {
   let mapped = toDoList.map(task => {
     return task.id === id ? { ...task, complete: !task.complete } : { ...task};
   });
   setToDoList(mapped);
 } 
 return (
   <div className="App">
     <Header />
     <ToDoList toDoList={toDoList}/>
     <ToDoForm />
     <handleToggle />
    </div>
 );
 

}


 
export default App;