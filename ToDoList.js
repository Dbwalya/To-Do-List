import React from "react";
import "./App.css";
import ToDo from "./ToDo";
import './App';
import ToDoForm from "./ToDoForm";

const ToDoList = ({ toDoList, handleToggle, handleFilter }) => {
  return (
    <div class="toDoBox">
      <div>
        {toDoList.map((todo) => {
          return (
            <ToDo
              todo={todo}
              handleToggle={handleToggle}
              handleFilter={handleFilter}
            />
          );
        })}
        <button style={{ margin: "20px" }} onClick={handleFilter}>
          Clear Completed
        </button>
        <ToDoForm />
      </div>
    </div>
  );
};

export default ToDoList;
