import React, { useState } from 'react';

function LoginForm() {
    const [form, setState] = useState({
        username: '',
        password: ''
    });

    const updateField = e => {
        setState({
            ...form,
            [e.target.name]: e.target.value
        })
        
        console.log(e.target.name);;
    };

    const printValues = e => {
        e.preventDefault();
        console.log(form.username, form.password)
    }


    return(
        <form onSubmit={printValues}>
            <label>
                Username:
                <input
                 value={form.username}
                 name="username"
                 onChange={updateField}
                />
             </label> 
             <br></br>
             <label>
                Password: 
                <input
                value={form.password}
                name="password"
                type="password"
                onChange={updateField}
                ></input> 
             </label>
             <button>Submit</button> 

        </form>
    )

}

export default LoginForm;