import React, { useState } from 'react';
import { Grid, TextField, MenuItem, Button } from '@mui/material';

export default function ContainerForm({ onAddTask, onFilterChange }) {
  const [toDo, setToDo] = useState('');
  const [filter, setFilter] = useState('all');

  const handleChange = (event) => {
    const toDoText = event.target.value;
    if (toDoText.length <= 40) {
      setToDo(toDoText);
    }
  };

  const handleAddTask = () => {
    const id = crypto.randomUUID();
    const newToDo = { toDo: toDo, id: id };
    onAddTask(newToDo);
    setToDo('');
  }

  const handleFilterChange = (event) => {
    const selectedFilter = event.target.value;
    setFilter(selectedFilter);
    onFilterChange(selectedFilter);
  };

  return (
    <Grid container spacing={2} alignItems='center' justifyContent={'center'} width={'70%'}>
      <Grid item xs={6} >
        <TextField id="filled-basic" variant="filled"
        placeholder='"Agendar turno dermatóloga"'
          type='text'
          value={toDo}
          onChange={handleChange}
          helperText='Ingrese nueva tarea'
          fullWidth
        />

      </Grid>
      <Grid item xs={6} >
        <TextField
          value={filter}
          onChange={handleFilterChange}
          helperText='Ingrese un filtro'
          fullWidth
          select
          variant='filled'>
          <MenuItem value="all">Todas</MenuItem>
          <MenuItem value="complete">Completas</MenuItem>
          <MenuItem value="incomplete">Incompletas</MenuItem>
        </TextField>
      </Grid>
      <Grid item>
        <Button variant="contained" sx={{ bgcolor:'#FFFF99', color:'black'}} onClick={handleAddTask}>Agregar</Button>
      </Grid>
    </Grid>
  );
}