import { useState } from "react";
import styles from "./App.module.css";
import { TodoList } from "./components/TodoList";
import { initialTodos } from "./initial-todos";

export default function App() {

  const [todos, setTodos] = useState(initialTodos);

  function handleTodoClick(todo){
    console.log(todo)
    const newTodos = todos.map(oldTodo => {
      if(oldTodo === todo) return {...todo, isComplete: !todo.isComplete}
      else return oldTodo;
    });
    setTodos(newTodos);
  }

  return (
    <>
      {/* Page header: Title */}
      <nav className={styles.nav}>
        <div className={styles.container}>
          <h1>My Todo List</h1>
        </div>
      </nav>

      {/* Main content: Todo list and search box */}
      <main className={styles.container}>
        {/* <TodoList />
        <TodoList />
        <TodoList />
        <TodoList />
        <TodoList />
        <TodoList />
        <TodoList />
        <TodoList /> */}

<TodoList todos = {todos} onTodoClick={handleTodoClick}/>
      </main>
    </>
  );
}
