import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const notify = () => toast("You successfully logged in");

    
    const signIn = event => {
        event.preventDefault()

        axios.post('http://localhost:1337/api/auth/local' , { 
            identifier: username,
            password,
        })
            .then(res => {
                localStorage.setItem('user' , JSON.stringify(res.data.user))
                localStorage.setItem('token' , JSON.stringify(res.data.jwt))
                navigate('/')
                notify()
            })
            .catch(err => console.log((err)))
    }


  return (
    <div className='section is-medium'>
        <div className="container">
            <div className="columns is-centered">
                <div className="column is-5">
                    <div className="box has-background-info-light">
                        <div className="title has-text-centered">Login</div>
                        <form className='form' onSubmit={event=> signIn(event)}>
                            <label htmlFor='name' className='label'>Enter username</label>
                            <input 
                            type="text" 
                            className='input'
                            onInput={event => setUsername(event.target.value)}
                            value={username}
                            id='name'/>
                            <label htmlFor='password' className='label'>Enter password</label>
                            <input 
                            type="password" 
                            className='input'
                            onInput={event => setPassword(event.target.value)}
                            value={password}
                            id='password'/>
                            <button
                                className='button is-fullwidth is-info my-2'
                                type='submit'>
                                Submit
                            </button>
                        </form>
                        <div className="subtitle is-5 has-text-centered has-text-grey-light mt-4">
                            <p>Don't have an account?</p>
                            <Link to='/register' className='button is-ghost'>
                                Move to register page
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login