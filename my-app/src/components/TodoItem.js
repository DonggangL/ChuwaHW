import { useDispatch } from "react-redux";
import { delTodo, modTodo } from "../actions";

export const TodoItem = ({content, isCompletd, index}) => {
    const dispatch = useDispatch();
    return (
        <li className = 'one-todo'>
            <span 
            style = {{textDecoration: isCompletd? 'line-through': 'none'}}
            onDoubleClick = {() => {
                modTodo(dispatch)(index);
            }}      
            >{content}</span>
            <button onClick = {() => {
                delTodo(dispatch)(index);
            }}>Delete </button>
            </li>
    );
};