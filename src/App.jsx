import Header from "./components/Header"
import ContainerForm from "./components/ContainerForm"
import ContainerToDo from "./components/ContainerToDo"
import Footer from "./components/Footer"
import { useState, useEffect } from "react";

function App() {
  //ahora las tareas que agrego no se guardan en el ls pero si me las muestra como li
  const [allTodo, setAllTodo] = useState([]);

  useEffect(() => {
    const storedTodo = JSON.parse(localStorage.getItem('toDo') || '[]');
    setAllTodo(storedTodo);
  }, []);

  const handleAddTask = (newTodo) => {
    console.log('Se agregó la tarea:', newTodo);
    setAllTodo([...allTodo, newTodo]);
    localStorage.setItem('toDo', JSON.stringify([...allTodo, newTodo]));
  };

  const handleDeleteToDo = (idToDo) =>{
    const updatedTodoList = allTodo.filter((toDo) => toDo.id !== idToDo);
    setAllTodo(updatedTodoList);
    localStorage.setItem("toDo", JSON.stringify(updatedTodoList));
  };

  return (
    <>
      <Header />
      <ContainerForm onAddTask={handleAddTask}/>
      <ContainerToDo allTodo={allTodo} onDeleteToDo ={handleDeleteToDo} />
      <Footer />
    </>
  )
}
export default App
