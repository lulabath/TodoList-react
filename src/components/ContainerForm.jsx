import React, { useState, useEffect } from 'react';

export default function ContainerForm({onAddTask}) {
  const [toDo, setToDo] = useState('');
  const [filter, setFilter] = useState('all');
  const [allTodo, setAllToDo] = useState([]);//en este estado  irian TODAS las tareas.
  
  useEffect(() => {
    const toDoSaved = localStorage.getItem('toDo');
    if(toDoSaved){
      setAllToDo(JSON.parse(toDoSaved));//parseo  el JSON del LS.
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('toDo', JSON.stringify(allTodo)); // Guardar todas las tareas como JSON
  }, [allTodo]);

  const handleChange = (event) => {
    const todoText = event.target.value;
    if(todoText.length <= 40){
      setToDo(todoText);
    }
  };

  const handleSearch = () => {
    //Lógica para realizar búsqueda
    console.log("Realizando búsqueda");
  };

  const handleAddTask = () => {
    const id = crypto.randomUUID();
    const newTodo = {id, toDo: toDo };
    setAllToDo([...allTodo, newTodo]);
    setToDo('');
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
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
