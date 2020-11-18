//import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';

class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'Muffin',
                    value2: 'Please write an essay about your favorite DOM element.',
                    listFruit: ''};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.listHandleChange = this.listHandleChange.bind(this);

    };
    
    //First create the functions then pass the values in the state function 
    //of constructor.
    handleChange(event){
        this.setState({value: event.target.value,
                       value2: event.target.value2
                       });
        //console.log(this.setState);
        // here when set state is added, it will update the constructor state value.
    }


    listHandleChange(event){
        this.setState({listFruit: event.target.value})  
        //console.log(event.target.value)
        ReactDOM.render(event.target.value, document.getElementById('FruitList')) ;

    }

    handleSubmit(event){
        
        const element = (
        <div>
         <h1> A name was submitted:  + {this.state.value}</h1>
        </div>
        );
        event.preventDefault();
        ReactDOM.render(element, document.getElementById('message'));
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} 
                                       onChange={this.handleChange}/>
                    <br></br>
                    Further Detail:
                    <textarea value={this.state.value2}
                                       onChange={this.handleChange} />
                    <br></br>
                    Pick your favourite flavor:
                    <select value={this.state.listFruit} onChange={this.listHandleChange}>
                        <option value="grapefruit">Grape Fruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="Mango">Mango</option>
                    </select>                    
                </label>

                <input type="submit" value="Submit" />
            </form>
        )
    }
}

ReactDOM.render(
    <NameForm  />,
    document.getElementById('root')
);