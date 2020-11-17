//import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';

class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'Muffin',
                    value2: 'Please write an essay about your favorite DOM element.'};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

    };
    
    //First create the functions then pass the values in the state function 
    //of constructor.
    handleChange(event){
        this.setState({value: event.target.value,
                       value2: event.target.value2
                       });
        console.log(this.setState);
        // here when set state is added, it will update the constructor state value.
    }

    handleSubmit(event){
        console.log('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} 
                                       onChange={this.handleChange}/>
                    Further Detail:
                    <textarea value={this.state.value2}
                                       onChange={this.handleChange} />
                    Pick your favourite flavor:
                    <select value={this.state.value} onChange={this.handleChange}>
                                            
                    </select>                    
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