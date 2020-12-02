import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class MyComponent extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			data: null,
      status: null,
      doggoName: ''
		};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
}

	componentDidMount(){
		fetch("https://dog.ceo/api/breeds/image/random")
		.then(res => res.json())
		.then(
			(result) => {
				this.setState({
					data: this.state.message,
          status: this.state.status,
          doggoName: this.state.message
        }) //.slice(29,10)
      },
      (error) => {
        this.setState({
          error
        });
      }
			);
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }
  
  handleSubmit(event){
    event.preventDefault();

  }

	render(){
    const {data,doggoName} = this.state;
    console.log(data);

		return(
      <div>
      <form onSubmit = {this.handleSubmit}>
        <h1> Guess Which Dog Is This</h1>
        <img src={data} />
        <br></br>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <input type="submit" value="submit"  />
      </form>
      
        {/* <div> <h1>{data}</h1> </div> */}
        <div> <h1>{doggoName}</h1> </div>

      </div>
			)
	}
}


ReactDOM.render(
  <MyComponent />,
  document.getElementById('root')
);
