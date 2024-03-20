import Header from "./components/Header"
import ContainerForm from "./components/ContainerForm"
import ContainerToDo from "./components/ContainerToDo";
import { useState } from "react";

function App() {
  //ahora las tareas que agrego no se guardan en el ls pero si me las muestra como li
  const [allTodo, setAllTodo] = useState([]);
  const handleAddTask = (newTodo) => {
    console.log('Se agregó la tarea:', newTodo);
    setAllTodo([...allTodo, newTodo]);
  };

  return (
    <>
      <Header />
      <ContainerForm onAddTask={handleAddTask} />
      <ContainerToDo allTodo={allTodo} />
    </>
  )
}
export default App
