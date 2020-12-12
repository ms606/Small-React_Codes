import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';

//Title 
const Title = ({todoCount}) => {
  return (
    <div>
      <div>
        <h1>To-do ({todoCount})</h1>
      </div>
    </div>
  );
}

const Todo = ({todo, remove}) => {
  // Each Todo
  return (<li onClick={ () => 
    {remove(todo.id)}}>
    {todo.text}</li>);
};


const TodoForm = ({addTodo}) => {
  //Input tracker
  let input;

  return (
      <form onSubmit={(e) => {
        e.preventDefault();
        addTodo(input.value);
        input.value = '';
      }}>
        <input className="form-control col-md-12" ref={node => {
          input = node;
        }} />
        {/* <button onClick={() => {
          addTodo(input.value);
          input.value = '';
        }} >
        +
      </button> */}
      </form>
  );
};

const TodoList = ({todos, remove}) => {
  // Here Maping will be done
  const todoNode = todos.map((todo) => {
    return (<Todo todo={todos} key={todo.id} remove={remove} />) 
  });
  return (<ul>{todoNode}</ul>);
};

// Container Component 
// Todo Id
window.id = 0;

class TodoApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: []
    }
    this.apiUrl = '//57b1924b46b57d1100a3c3f8.mockapi.io/api/todos'
  } 

  componentDidMount(){
    axios.get(this.apiUrl)
     .then((res) => {
       this.setState({data:res.data});
     });
  }

  // add handles here 
  addTodo(val){
    //Assemble data
    const todo = {text: val};
    // Update data
    axios.post(this.apiUrl, todo)
     .then((res) => {
       this.state.data.push(res.data);
       this.setState({data: this.state.data})
     });
  }

  render(){
    return(
      <div>
        <Title />,
        <TodoForm addTodo={this.addTodo.bind(this)}/>
        <TodoList 
        todos={this.state.data}
         />

      </div>
    )
  }
}

ReactDOM.render(
  <TodoApp  todoCount= {0}/>,
  document.getElementById('root')
);

//https://codepen.io/codebeast/pen/PzVyRm?editors=1010
