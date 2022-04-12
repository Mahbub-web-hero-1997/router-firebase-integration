import React from 'react';

const Register = () => {
    return (
        <div>
            <h3>Plese Register Now</h3>
            <form>
                <input type="text" placeholder='Your Name' /> <br />
                <input type="email" name="email" id="" placeholder='Email' /> <br />
                <input type="password" name="password" id="" placeholder='Password' /> <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;