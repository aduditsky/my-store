import React from 'react';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import {auth, signInWithGoogle} from '../../firebase/firebase.utils';

import './sign-in.styles.sass'

class SignIn extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;
        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
        } catch( error ){
            console.log(error);
        }
        
    };

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value})
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>Я вспомнил, что у меня уже есть аккаунт тут!</h2>
                <span>Зайду-ка я в него с этого же e-mail...</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type='email'
                        label='email'
                        handleChange={this.handleChange}  
                        value={this.state.email} 
                        required
                    />
                    <FormInput 
                        name="password"
                        type='password'
                        label='password'
                        value={this.state.password}
                        handleChange={this.handleChange} 
                        required
                    />
                    <div className='buttons'>
                        <CustomButton type='submit'>Войти</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Войти с Google</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;