import { useState} from 'react';
import "./index.css";


// type definitions = Aliases
type FormElem = React.FormEvent<HTMLFormElement>;
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

// interface
interface ToDo {
    text: string,
    complete: boolean,
}

const ToDoList = (): JSX.Element => {
    const [value, setValue] = useState<string>('');
    const [todos, setTodos] = useState<ToDo[]>([])

    const handleSubmit = (event: FormElem): void => {
        event.preventDefault();
        addTodo(value);
        setValue("");
    }

    const handleChange = (event: ChangeEvent): void => {
        setValue(event.target.value)
    }

    const addTodo = (newValue: string): void => {
        const newTodos: ToDo[] = [...todos, { text: newValue, complete: false }];
        setTodos(newTodos);
    }

    const completeToDo = (index: number): void => {
        const completedToDos: ToDo[] = [...todos];
        completedToDos[index].complete = !completedToDos[index].complete;
        setTodos(completedToDos);
    }

    const deleteToDo = (index: number): void => {
        const clearedToDos: ToDo[] = [...todos];
        clearedToDos.splice(index, 1);
        setTodos(clearedToDos);
    }

    return (
        <>
            <h2>Project 1: ToDo-List</h2>
            <form onSubmit={handleSubmit} className="ToDoForm">
                <input type='text' required value={value} onChange={handleChange} />
                <button type='submit'>Add Todo</button>
            </form>
            <section className="ToDoList">
                <ul>

                    {todos && todos.map((todo: ToDo, index: number) => {
                        return (
                            <li key={index}>
                                <span style={{ textDecoration: todo.complete ? "line-through" : "none" }}>{todo.text}</span>
                                <button type="button" onClick={() => completeToDo(index)}>{
                                    todo.complete ? "✓" : "⥁"}
                                </button>
                                <button type="button" onClick={() => deleteToDo(index)}>⤫</button>
                            </li>
                        )
                    })
                    }
                </ul>
            </section>
        </>
    );
};

export default ToDoList;
