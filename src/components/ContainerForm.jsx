import React, { useState, useEffect } from 'react';

export default function ContainerForm({ onAddTask }) {
  const [toDo, setToDo] = useState('');
  const [filter, setFilter] = useState('all');

  const [allTodo, setAllToDo] = useState(() => {
    const toDoSaved = localStorage.getItem('toDo');
    console.log("tareas cargadas desde el ls:", toDoSaved);
    return toDoSaved ? JSON.parse(toDoSaved) : [];
  });//en este estado  irian TODAS las tareas.

  useEffect(() => {
    const toDoSaved = localStorage.getItem('toDo');
    if (toDoSaved) {
      setAllToDo(JSON.parse(toDoSaved));//parseo  el JSON del LS.
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('toDo', JSON.stringify(allTodo));
    console.log(allTodo); // Guardar todas las tareas como JSON
  }, [allTodo]);

  const handleChange = (event) => {
    const todoText = event.target.value;
    if (todoText.length <= 40) {
      setToDo(todoText);
    }
  };

  const handleAddTask = () => {
    const id = crypto.randomUUID();
    const newTodo = { toDo: toDo, id };
    console.log('nueva tarea agregada:', newTodo);
    setAllToDo([...allTodo, newTodo])
    onAddTask(newTodo); //aca paso completa la nueva tarea, si le paso todo solo es el texto.
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
