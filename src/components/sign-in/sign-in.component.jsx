import React, {useState} from 'react';
import { connect } from 'react-redux';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import './sign-in.styles.sass'

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
    const [ userCredentials, setCredentials ] = useState({ email: '', password: '' }); 

    const { email, password } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = userCredentials;

        emailSignInStart(email, password);
        
    };

    const handleChange = event => {
        const { value, name } = event.target;
        setCredentials({ ...userCredentials, [name]: value})
    }

    return(
        <div className='sign-in'>
            <h2>Я вспомнил, что у меня уже есть аккаунт тут!</h2>
            <span>Зайду-ка я в него с этого же e-mail...</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name="email"
                    type='email'
                    label='email'
                    handleChange={handleChange}  
                    value={email} 
                    required
                />
                <FormInput 
                    name="password"
                    type='password'
                    label='password'
                    value={password}
                    handleChange={handleChange} 
                    required
                />
                <div className='buttons'>
                    <CustomButton type='submit'>Войти</CustomButton>
                    <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>Войти с Google</CustomButton>
                </div>
            </form>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);