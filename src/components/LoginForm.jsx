import React, { useState } from 'react'
import toast from 'react-hot-toast';
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom';

export const LoginForm = ({setIsLoggedin}) => {

    const [formData, setFormData] = useState({
        email: '',
        password:''
    })

    function changeHandler(event) {
        setFormData((prevData) => {
            return {
                ...prevData,
                [event.target.name]:event.target.value
            }
        })
    }

    const [showPassword, setShowPassword] = useState(false);

    function showPasswordHandler() {
        setShowPassword(!showPassword);
    }

    //After Logged in
    const navigate = useNavigate();

    function submitHanddler(event) {
        event.preventDefault();
        setIsLoggedin(true);
        toast.success("Logged in");
        navigate('/dashboard');
        console.log("Printing Login Info : ");
        console.log(formData);
    }

    return (
        <form onSubmit={submitHanddler} className='login-form'>
            <div className='login-container'>
                <label className='form-label' htmlFor="email">
                    <p>Email Address <sup className='sup'>*</sup></p>
                </label>

                <input
                    className='form-input'
                    type="text"
                    required
                    placeholder='Enter Your Email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={changeHandler}
                />
            </div>

            <div className='login-container pass-div'>
                <label className='form-label' htmlFor="password">
                    <p>Password<sup className='sup'>*</sup></p>
                </label>

                <input
                    className='form-input'
                    name='password'
                    id='password'
                    placeholder='Enter Your Password'
                    type={ showPassword ? 'text' : 'password' }
                    value={formData.password}
                    onChange={changeHandler}
                />

                <span className='pass-span' onClick={showPasswordHandler}>
                    {showPassword?(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                </span>

                <Link className='Link' to='#'>
                    <p className='pass-forgot'>Forgot Password</p>
                </Link>
            </div>   
            
            <button className='btn-yellow'>Sign In</button>
        </form>
    )
}
