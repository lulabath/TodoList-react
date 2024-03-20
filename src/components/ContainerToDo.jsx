export default function ContainerToDo({ allTodo }) {

    return (
        <ul>
            {console.log('me deberia mostrar')}
            {allTodo.map((todo) => (
                <li key={todo.id}>{todo.toDo}</li>
            ))}
        </ul>
    );
}
