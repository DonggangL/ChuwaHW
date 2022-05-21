import { useState} from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions";


export const InputTodo = () => {
    const[textContent, setTextContent] = useState('');
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        if (!textContent.trim()) {
            setTextContent('');
            return;
        }
        addTodo(dispatch)(textContent);
        setTextContent('');
    };
    return(
        <div>
            <input 
            type = 'text'
            onChange = {(e) => setTextContent(e.target.value)}
            value = {textContent}
            />
            <button onClick = {handleAddTodo}> Add </button>
            </div>
    );

};