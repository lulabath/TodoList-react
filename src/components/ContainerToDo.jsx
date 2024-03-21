import React from "react";

export default function ContainerToDo({ allToDo, onDeleteToDo, onCompleteToDo, filter }) {
    const handleDeleteClick = (idToDo) => {
        onDeleteToDo(idToDo);
    };

    const handleCompleteClick = (idToDo) => {
        onCompleteToDo(idToDo);
    };

    //acá necesito una funcion para filtrar las tareas según las option
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

    return (
        <ul>
            {filterToDo().map((toDo) => (//aplico estilo en linea solo para probar que funcione
                <li key={toDo.id} style={{ textDecoration: toDo.completed ? 'line-through' : 'none'}}>
                    {toDo.toDo}
                    <button key={`completeBtn-${toDo.id}`} onClick={() => handleCompleteClick(toDo.id)}>Completar</button>
                    <button key={`deleteBtn-${toDo.id}`} onClick={() => handleDeleteClick(toDo.id)}>Eliminar</button>
                </li>
            ))}
        </ul>
    );
}