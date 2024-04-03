
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Signup.css";

const Signup = () => {

    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

    const data = useMemo(() => ({
        name,
        email,
        password,
    }), [name, email, password]);

    return (
        <div className='signin'>
            <h1>SignUp</h1>
            <input type='text' onChange={e => setName(e.target.value)} placeholder='Name' />
            <input type='text' onChange={e => setEmail(e.target.value)} placeholder='Email' />
            <input type='password' onChange={e => setPassword(e.target.value)}  placeholder='Password' />
            <Link to='/signin'>Signin</Link>
            <button onClick={
                async () => {
                    const response = await fetch('http://localhost:3000/signup', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    });
                    const result = await response.json();
                    console.log(result);
                    if (result._id) {
                        // redirect to home page
                        window.location.href = '/signin';
                    }
                    else {
                        alert(result.error);
                    }
                }
            } >Signup</button>
        </div>
    );
}

export default Signup;