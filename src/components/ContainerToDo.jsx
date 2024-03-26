import React from "react";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneAllIcon from '@mui/icons-material/DoneAll';

export default function ContainerToDo({ allToDo, onDeleteToDo, onCompleteToDo, filter }) {
    const handleDeleteClick = (idToDo) => {
        onDeleteToDo(idToDo);
    };

    const handleCompleteClick = (idToDo) => {
        onCompleteToDo(idToDo);
    };

    const filterToDo = () => {
        switch (filter) {
            case 'complete':
                return allToDo.filter(toDo => toDo.completed);
            case 'incomplete':
                return allToDo.filter(toDo => !toDo.completed);
            default:
                return allToDo;
        }
    };

    const capFirstLetter = (string) => {
        if (string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        } else {
            return '';
        }

    };

    return (
        <ul style={{ margin: '20px', padding: '0', width: '100%' }}>
            {filterToDo().map((toDo) => (
                <li key={toDo.id} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingLeft: '3px',
                    marginTop: '10px',
                    border: ' 1px black solid'
                }}>
                    <span style={{ textDecoration: toDo.completed ? 'line-through' : 'none' }}>
                        {capFirstLetter(toDo.toDo)}
                    </span>
                    <div>
                        <Button
                            variant="outlined"
                            size="small"
                            key={`completeBtn-${toDo.id}`}
                            sx={{
                                bgcolor: '#FFFF99',
                                color: 'black',
                                border: 'none',
                                margin: '10px'
                            }}
                            onClick={() => handleCompleteClick(toDo.id)}><DoneAllIcon /></Button>
                        <Button
                            variant="outlined"
                            size="small"
                            key={`deleteBtn-${toDo.id}`}
                            sx={{
                                bgcolor: '#FFFF99',
                                color: 'black',
                                border: 'none',
                                margin: '10px'
                            }} onClick={() => handleDeleteClick(toDo.id)}><DeleteIcon /></Button>
                    </div>
                </li>
            ))}
        </ul>
    );
}