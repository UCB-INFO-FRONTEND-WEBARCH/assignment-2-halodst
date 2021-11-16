import React from "react";
import Todo from "./Todo";
import Tag from "./Tag"

const TodoList = ({ inputText, setInputText, inputTextHandler, inputTag, todos, setTodos }) => {
    const updateTodo = (todoId, newValue) => {
        setTodos([
            ...todos, { text: inputText, completed: false, tag: inputTag, id: Math.random() * 1000 }
        ]);
        // setTodos(todos.filter((el) => el.id !== todo.id));
        // setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }

    return (
        <div>
            <div className="todo-container">
                <ul className="todo-list">
                    {todos.map((todo) => (
                        <Todo
                            todos={todos}
                            setTodos={setTodos}
                            key={todo.id}
                            todo={todo}
                            text={todo.text}
                            tags={todo.tags}
                            updateTodo={updateTodo}
                            inputText={inputText}
                            setInputText={setInputText}
                            inputTextHandler={inputTextHandler}
                        />
                    ))}
                </ul>
            </div>

        </div>
    );
};

export default TodoList;
