import { useState } from 'react';


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

    return (
        <>
            <h2>Project 1: ToDo-List</h2>
            <form onSubmit={handleSubmit}>
                <input type='text' required value={value} onChange={handleChange} />
                <button type='submit'>Add Todo</button>
            </form>
            {todos && todos.map(todo => {
                return (
                    <div>{todo.text}</div>
                )
            })
            }
        </>
    );
};

export default ToDoList;
