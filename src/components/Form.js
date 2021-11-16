import React from "react";
import Tag from "./Tag"

const Form = ({ updateTodo, inputTag, setInputTag, inputText, setInputText, todos, setTodos, tags, setTags, tag }) => {
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };

    const inputTagHandler = (e) => {
        console.log(e.target.value);
        setInputTag(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, { text: inputText, tags, completed: false, id: Math.random() * 1000 }
        ]);
        setInputText("");
        setInputTag("");
        setTags([]);
    }

    const submitTagHandler = (e) => {
        e.preventDefault();
        setTags([
            ...tags, { text: inputTag, id: Math.random() * 1000 }
        ]);
        setInputTag("");
    }

    return (
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" placeholder="Input event here" />
            <div className="tag-div">
                <input value={inputTag} onChange={inputTagHandler} type="text" className="tag-input" placeholder="Add tag" />
                <button onClick={submitTagHandler} className="tag-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="tag-container">
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
            </div>
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>

        </form>
    );
};

export default Form;
