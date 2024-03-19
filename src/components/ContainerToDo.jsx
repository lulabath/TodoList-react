export default function({allTodo}) {
    return (
        <ul>
            {allTodo.map((toDo) => (
                <li key={toDo.id}>{toDo.toDo}</li>
            ))}
        </ul>
    );
}
