import React from "react";

export default function ContainerToDo({ allTodo }) {

    return (
        <ul>
            {allTodo.map((todo) => (
                <li key={todo.id}>{todo.toDo}</li>
            ))}
        </ul>
    );
}