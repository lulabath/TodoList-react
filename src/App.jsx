import Header from "./components/Header"
import ContainerForm from "./components/ContainerForm"
import ContainerToDo from "./components/ContainerToDo"
import Footer from "./components/Footer"
import { useState, useEffect } from "react";

function App() {
  //ahora las tareas que agrego no se guardan en el ls pero si me las muestra como li. por qué??
  const [allToDo, setAllToDo] = useState([]);
  const [filterToDo, setFilterToDo] = useState([]);

  useEffect(() => {
    const storedToDo = JSON.parse(localStorage.getItem('toDo') || '[]');
    setAllToDo(storedToDo);
    setFilterToDo(storedToDo);// acá le digo que inicie como la misma lista con todas las tareas
  }, []);

  const handleAddTask = (newToDo) => {
    console.log('Se agregó la tarea:', newToDo);
    const updatedToDoList = [...allToDo, { ...newToDo, completed: false }];
    setAllToDo([...updatedTodDList]);
    setFilterToDo(updatedToDoList); //actualizo la lista también
    localStorage.setItem('toDo', JSON.stringify([updatedToDoList]));
  };

  const handleDeleteToDo = (idToDo) => {
    const updatedToDoList = allToDo.filter((toDo) => toDo.id !== idToDo);
    setAllToDo(updatedToDoList);
    setFilterToDo(updatedToDoList); //actualizo la lista nuevamente
    localStorage.setItem("toDo", JSON.stringify(updatedToDoList));
  };

  const handleCompleteToDo = (idToDo) => {
    const updatedToDoList = allToDo.map((toDo) => toDo.id === idToDo ? { ...toDo, completed: !toDo.completed } : toDo);
    setAllToDo(updatedToDoList);
    setFilterToDo(updatedToDoList); //actualizo la lista nuevamente    
    localStorage.setItem('toDo', JSON.stringify(updatedToDoList));
  };

  const handleFilterChange = (filter) => {
    let filterToDo = [];
    console.log('filter selected', filter);
    switch (filter) {
      case 'complete':
        filterToDo = allToDo.filter(toDo => toDo.completed);
        break;
      case 'incomplete':
        filterToDo = allToDo.filter(toDo => !toDo.completed);
        break;
      default:
        filterToDo = allToDo;
        break;
    }
  setFilterToDo(filterToDo);//ya actualizo el estado con la lista filtrada
  };

  return (
    <>
      <Header />
      <ContainerForm onAddTask={handleAddTask} onFilterChange={handleFilterChange} />
      <ContainerToDo allToDo={filterToDo} onDeleteToDo={handleDeleteToDo} onCompleteToDo={handleCompleteToDo} />
      <Footer />
    </>
  )
}
export default App
