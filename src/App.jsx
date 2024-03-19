//import { useState } from 'react'
import Header from "./components/Header"
import ContainerForm from "./components/ContainerForm"
import ContainerToDo from "./components/ContainerToDo";
import { useState } from "react";

function App() {
  const [allTodo, setAllTodo] = useState([]);

  const handleAddTask = (toDo) =>{
    console.log('Se agregó la tarea:', toDo);
    setAllTodo([...allTodo, newTodo]);
  };

  console.log('tareas', {allTodo});

  return (
    <>
      <Header />
      <ContainerForm onAddTask={handleAddTask} />
      <ContainerToDo allTodo={allTodo} />
    </>
  )
}

export default App
