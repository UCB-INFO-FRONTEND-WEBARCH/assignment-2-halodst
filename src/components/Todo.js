import React, { useState } from "react";
import Tag from "./Tag"
import Form from "./Form";


const Todo = ({ inputText, setInputText, todo, setTodos, text, todos, tags, tag, setTags, updateTodo }) => {
    //Events
    const [edit, setEdit] = useState({
        id: null,
        value: ""
    })
    const deleteIt = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    };
    const inputEditHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };
    const submitUpdate = (value) => {
        //console.log("todo: " + inputText)
        //console.log("edit: " + edit.id)

        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return {
                        ...item, text: inputText
                    }
                }
                return item;
            })
        )
        //updateTodo(edit.id, value)

        setEdit({
            id: null,
            value: ''
        });
        setInputText("")
        //setTodos(todos.filter((el) => el.id !== todo.id));
    };

    const completeIt = () => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return {
                        ...item, completed: !item.completed
                    }
                }
                return item;
            })
        )
    }

    if (edit.id) {
        return (
            <div className="edit-it">
                <input value={inputText} onChange={inputEditHandler} type="text" className="edit-it" placeholder="Edit event here" />
                <button onClick={submitUpdate} className="submit-edit" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
            </div>
        )
    }

    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <div className="tag-item">
                <p className="tag-list">
                    {tags.map((tag) => (
                        <Tag
                            tags={tags}
                            setTags={setTags}
                            key={tag.id}
                            text={tag.text}
                            tag={tag}
                        />
                    ))}
                </p>
            </div>
            <button onClick={completeIt} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteIt} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
            <button onClick={() => setEdit({ id: todo.id, value: todo.text })} className="edit-btn">
                Edit
            </button>
        </div>
    );
};


export default Todo;
