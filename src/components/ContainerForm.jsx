import React, { useState } from 'react';
import { Grid, TextField, MenuItem, Button, makeStyles } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export default function ContainerForm({ onAddTask, onFilterChange }) {
  const [toDo, setToDo] = useState('');
  const [filter, setFilter] = useState('all');

  const handleChange = (event) => {
    const toDoText = event.target.value;
    if (toDoText &&  toDoText.length <= 40) {
      setToDo(toDoText);
    }
  };

  const handleAddTask = () => {
    const id = crypto.randomUUID();
    const newToDo = { toDo: toDo, id: id };
    onAddTask(newToDo);
    setToDo('');
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAddTask();
    }
  }

  const handleFilterChange = (event) => {
    const selectedFilter = event.target.value;
    setFilter(selectedFilter);
    onFilterChange(selectedFilter);
  };

  return (
    <Grid
      container spacing={2}
      alignItems='center'
      justifyContent={'center'}
      width={'60%'}
      fontSize={'1.2rem'}>
      <Grid item xs={6}
        style={{
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center"
        }} >
        <TextField
          id="filled-basic"
          variant="filled"
          placeholder='Ej: Agendar turno dermatóloga'
          type='text'
          value={toDo}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          helperText='Ingrese nueva tarea'
          fullWidth
          InputProps={{ sx: { fontSize: '1.2rem' } }}
          FormHelperTextProps={{ sx: { fontSize: '1rem' } }}
        />

      </Grid>
      <Grid item xs={6} >
        <TextField
          value={filter}
          onChange={handleFilterChange}
          fullWidth
          select
          variant='filled'
          helperText='Ingrese un filtro'
          FormHelperTextProps={{ sx: { fontSize: '1rem' } }}>
          <MenuItem value="all" xs={{ fontSize: '1rem' }}>Todas</MenuItem>
          <MenuItem value="complete" xs={{ fontSize: '1rem' }}>Completas</MenuItem>
          <MenuItem value="incomplete" xs={{ fontSize: '1rem' }}>Incompletas</MenuItem>
        </TextField>
      </Grid>
      <Grid item>
        <Button variant="contained" sx={{ bgcolor: 'black', color: '#FFFF99' }} onClick={handleAddTask}> <SendIcon /> </Button>
      </Grid>
    </Grid>
  );
}