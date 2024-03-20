import React from "react";

export default function ContainerToDo({ allTodo, onDeleteToDo }) {
    const handleDeleteClick = (idToDo) => {
        onDeleteToDo(idToDo);
    };

    return (
        <ul>
            {allTodo.map((todo) => (
                <li key={todo.id}>
                    {todo.toDo}
                    <button value={completeBtn}>Completar</button>
                    <button onClick={() => handleDeleteClick(todo.id)}>Eliminar</button>
                </li>
            ))}
        </ul>
    );
}