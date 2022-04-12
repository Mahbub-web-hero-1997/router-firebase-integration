import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { signInWithGoogle } = useFirebase()
    return (
        <div>
            <h3>Plese LogIn</h3>
            <div style={{ margin: '20px' }}>
                <button onClick={signInWithGoogle} >Google SignIn</button>
            </div>
            <form>
                <input type="email" name="email" id="" placeholder='Email' /> <br />
                <input type="password" name="password" id="" placeholder='Password' /> <br />
                <input type="submit" value="LogIn" />
            </form>
        </div>
    );
};

export default Login;