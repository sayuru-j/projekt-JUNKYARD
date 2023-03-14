import Layout from "../components/Layout";
import { useState } from 'react'
import axios from 'axios'

const SignUpPage = () => {
    const [checked, setChecked] = useState(false);


    const [state, setState] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        buttonText: 'Sign Up'
    }, [])

    const { name, email, password, error, success, buttonText } = state

    const handleChange = (name) => (e) => {
        setState({...state, [name]: e.target.value, error: '', success: '', buttonText:'Sign Up'})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.table({ name, email, password})
        axios.post(`http://localhost:8000/api/register`, {
            name,
            email,
            password
        })
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }


    const signupForm = () => (
        <div className="sign-up-form-container vh our-serv-container">
                <form onSubmit={handleSubmit} className="sign-up-form form-pad">
                <div className="form-group">
            <label htmlFor="exampleInputName1">Name</label>
            <input value={name} onChange={handleChange('name')} type="text" className="form-control" id="exampleInputName1" placeholder="Enter name" required/>
        </div>            
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input value={email} onChange={handleChange('email')} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input value={password} onChange={handleChange('password')} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" required/>
        </div>
        <div className="form-group form-check">
            <input onClick={() => setChecked(!checked)} type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button disabled={!checked} type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
    )
    
    return <Layout>
        <div>
            {signupForm()}
            {/*  {JSON.stringify(state)} */} 
        </div>
    </Layout>
}

export default SignUpPage;