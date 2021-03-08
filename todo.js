import React, {useReducer, useState} from "react";

function reducer(state, action){
    switch(action.type){
        case "add-todo":
          return {todos: [...state.todos, { text: action.text, completed: false}] };
        default:
            return state;  
    }
}

const App = () => {
    const [{ todos }, dispatch] = useReducer(reducer, {todos: []});
    const [text, setText] = useState();
    
    console.log(todos);

    return (
        <div>
            <form 
              onSubmit={ e => {
                e.preventDefault();
                dispatch({type: "add-todo", payload: text})
                
             }}
            >
                 <input value={text} 
                        onChange={e => setText(e.target.value)} />
            </form>
            

        
            {todos.map(t => (
                <div  key={t.text} > {t.text} </div>
                ))}
        
        </div>
    )
}

export default App;

