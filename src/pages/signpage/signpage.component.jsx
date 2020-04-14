import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.components';
import './signpage.styles.sass';

const SignInAndSignUpPage = () => (
    <div className='signpage'>
        <SignIn />
        <SignUp />
    </div>

)

export default SignInAndSignUpPage;