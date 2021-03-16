import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import "./signin.styles.scss"


class SignIn extends Component {
    constructor (props) {
        super(props);

        this.state = {
            email : '',
            password : ''
        }
    }
    
    hendelSubmit = (e) => {
        e.preventDefault();
        alert('submit');
        this.setState({email:'', password: ''});
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});

    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have account</h2>
                <span>Sign in usign your email and password</span>
                <form onSubmit={this.hendelSubmit}>
                <FormInput
                    name='email'
                    type='email'
                    handleChange={this.handleChange}
                    value={this.state.email}
                    label='email'
                    required
                />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
                    <CustomButton type="submit">
                        SignIn
                    </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;
