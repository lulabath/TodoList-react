import Header from "./components/Header"
import ContainerForm from "./components/ContainerForm"
import ContainerToDo from "./components/ContainerToDo"
import Footer from "./components/Footer"
import { Typography, Box } from '@mui/material'
import { useState, useEffect } from "react";


function App() {
  const [allToDo, setAllToDo] = useState([]);
  const [filterToDo, setFilterToDo] = useState([]);

  useEffect(() => {
    const storedToDo = JSON.parse(localStorage.getItem('toDo') || '[]');
    setAllToDo(storedToDo);
    setFilterToDo(storedToDo);
  }, []);

  const handleAddTask = (newToDo) => {
    const updatedToDoList = [...allToDo, { ...newToDo, completed: false }];
    setAllToDo([...updatedToDoList]);
    setFilterToDo(updatedToDoList);
    localStorage.setItem('toDo', JSON.stringify(updatedToDoList));
    console.log(updatedToDoList);
  };

  const handleDeleteToDo = (idToDo) => {
    const updatedToDoList = allToDo.filter((toDo) => toDo.id !== idToDo);
    setAllToDo(updatedToDoList);
    setFilterToDo(updatedToDoList);
    localStorage.setItem("toDo", JSON.stringify(updatedToDoList));
  };

  const handleCompleteToDo = (idToDo) => {
    const updatedToDoList = allToDo.map((toDo) => toDo.id === idToDo ? { ...toDo, completed: !toDo.completed } : toDo);
    setAllToDo(updatedToDoList);
    setFilterToDo(updatedToDoList);
    localStorage.setItem('toDo', JSON.stringify(updatedToDoList));
  };

  const handleFilterChange = (filter) => {
    let filterToDo = [];
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
    setFilterToDo(filterToDo);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      textAlign="center"
      alignItems="center"
      justifyContent="center"
      sx={{
        backgroundImage: 'linear-gradient(120deg, #FFCC99, #CCFFCC)',
        minHeight: '100vh',
        margin: '0px'
      }}
    >
      <Header />
      <ContainerForm onAddTask={handleAddTask} onFilterChange={handleFilterChange} />
      <Typography variant="h7" gutterBottom style={{ width: '70%' }}>
        <ContainerToDo allToDo={filterToDo} onDeleteToDo={handleDeleteToDo} onCompleteToDo={handleCompleteToDo} />
      </Typography>
      <Footer />
    </Box>
  )
}
export default App
