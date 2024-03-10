import dayjs from "dayjs";
import styles from "./TodoList.module.css";

export function TodoList({todos, onTodoClick}){
    return (
        <ul className = {styles.list}>       
            {todos.map((todo) => (
            <TodoItem key = {todo.id} todo={todo} onTodoClick={onTodoClick}/>
            ))}
        </ul>
    );
}

function TodoItem({todo, onTodoClick}){

    const isOverdue = dayjs(todo.dueDate).isBefore(dayjs());

    function handleClick(){
        // to update a button u need to call the setter function
        // todo.isComplete != !todo.isComplete;
        // ^ this doesn't work
        onTodoClick(todo);

    }

    return (
        <li>
            <div>
                <h2>
                    {todo.description}
                </h2>
                <p>
                    Due {dayjs(todo.dueDate).format("dddd MMMM DD, YYYY")}
                </p>
            </div>
            <div>
                <button onClick = {handleClick}> Status: {todo.isComplete ? "Done!" : isOverdue ? "Overdue!" : "Pending..."} 
                </button>
            </div>
        </li>
    );
}