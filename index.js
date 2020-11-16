//import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';

class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

    };
    
    //First create the functions then pass the values in the state function 
    //of constructor.
    handleChange(event){
        this.setState({value: event.target.value});
        // here when set state is added, it will update the constructor state value.
        console.log(this.state);
    }

    handleSubmit(event){
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} 
                                       onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

ReactDOM.render(
    <NameForm />,
    document.getElementById('root')
);