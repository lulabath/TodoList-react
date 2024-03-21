import React, { useState } from 'react';

export default function ContainerForm({ onAddTask, onFilterChange }) {
  const [toDo, setToDo] = useState('');
  const [filter, setFilter] = useState('all');
  //const [allTodo, setAllToDo] = useState([]);
  
  // useEffect(() => {
  //   const toDoSaved = localStorage.getItem('toDo');
  //   if(toDoSaved){
  //     setAllToDo(JSON.parse(toDoSaved));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('toDo', JSON.stringify(allTodo)); // Guardar todas las tareas como JSON
  // }, [allTodo]);

  const handleChange = (event) => {
    const toDoText = event.target.value;
    if(toDoText.length <= 40){
      setToDo(toDoText);
    }
  };

  const handleAddTask = () => {
    const id = crypto.randomUUID();
    const newToDo = {toDo: toDo, id: id};
    console.log('nueva tarea agregada:', newToDo);
    //setAllToDo([...allTodo, newTodo]);
    onAddTask(newToDo);//aca paso completa la nueva tarea, si le paso todo solo es el
    setToDo('');
  }

  const handleFilterChange = (event) => {
    const selectedFilter = event.target.value;
    setFilter(selectedFilter);
    onFilterChange(selectedFilter);
  };

  return (
    <div>
      <input type='text' value={toDo} onChange={handleChange} placeholder='Ingresar nueva tarea' />
      <select value={filter} onChange={handleFilterChange}>
        <option value="all">Todas</option>
        <option value="complete">Completas</option>
        <option value="incomplete">Incompletas</option>
      </select>
      <button onClick={handleAddTask}>Agregar</button>
    </div>
  );
}
