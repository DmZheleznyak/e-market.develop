import React from 'react';

import FormInput from './../form-input/form-input.component';
import CustomButton from './../custom-button/custom-botton.component';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            email: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlChange = this.handlChange.bind(this);
    };

    handleSubmit(event) {
        event.preventDefault();

        this.setState({
            email: '',
            password: ''
        })
    }

    handlChange(event) {
        const { name, value } = event.target

        this.setState({ [name]: value })
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={ this.handleSubmit }>
                    <FormInput
                        name='email'
                        type='email'
                        value={this.state.email}
                        handleChange={this.handlChange}
                        label='email'
                        id='id-email'
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        value={this.state.password}
                        handleChange={this.handlChange}
                        label='password'
                        required
                    />
                    <CustomButton type='submit' className='custom-button'>Sign in</CustomButton>    
                </form>
            </div>
        )
    }
}

export default SignIn;