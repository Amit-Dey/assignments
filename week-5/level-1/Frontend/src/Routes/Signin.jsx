// Handel signin route
import { Link } from 'react-router-dom';
import "./Signin.css";
import { useState, useMemo } from 'react';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const data = useMemo(() => ({
        email,
        password
    }), [email, password]);

    return (
        <div className='signin'>
            <h1>SignIn</h1>
            <input type='text' onChange={e => setEmail(e.target.value)} placeholder='Email' />
            <input type='password' onChange={e => setPassword(e.target.value)} placeholder='Password' />
            <Link to='/signup'>Signup</Link>
            <button onClick={
                async () => {
                    const response = await fetch('http://localhost:3000/signin', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    });
                    const result = await response.json();
                    if (result.token) {
                        localStorage.setItem('token', result.token);

                        // redirect to home page
                        window.location.href = '/';
                    }
                    else {
                        alert('Invalid Credentials');
                    }
                }
            } >Signin</button>
        </div>
    );
}

export default Signin;