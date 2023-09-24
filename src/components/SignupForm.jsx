import React, { useState } from 'react'
import toast from 'react-hot-toast'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

export const SignupForm = ({setIsLoggedin}) => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword:''
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
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [accountType, setAccountType] = useState('student');

  function showPasswordHandler() {
    setShowPassword(!showPassword);
  }
  function showConfirmPasswordHandler() {
    setShowConfirmPassword(!showConfirmPassword);
  }

  //form subnmission handling
  const navigate = useNavigate();

  function submitHandler(event) {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Password do Not Matched");
    }
    else {
      setIsLoggedin(true);
      toast.success("Account Created");
      navigate('/dashboard');

      //creating new form data
      const newData = {
        ...formData,
        accountType
      }

      console.log("Printing Signup Info :");
      console.log(newData);
    }
  }


  return (
    <div className='main-div'>
      <div className='two-btn'>
        <button onClick={()=> setAccountType('student')} className= {`${accountType === 'student'? 'clicked' : 'notClicked'} signup-btn`}>Student</button>
        <button onClick={()=> setAccountType('instructor')} className= {`${accountType === 'instructor'? 'clicked' : 'notClicked'} signup-btn`}>Instructor</button>
      </div>

      <form onSubmit={submitHandler}>

        <div className='name-div mg-top'>
          <div  className='first-div'>
            <label className='first-label' htmlFor="firstName">First Name</label>
            <input
              className='first-input'
              type="text"
              name='firstName'
              id='firstName'
              placeholder='Enter First Name'
              required
              onChange={changeHandler}
              value={formData.firstName}
            />
          </div>

          <div className='first-div'>
            <label className='first-label' htmlFor="lastName">Last Name</label>
            <input
              className='first-input'
              type="text"
              name='lastName'
              id='lastName'
              placeholder='Enter Last Name'
              required
              onChange={changeHandler}
              value={formData.lastName}
            />
          </div>
        </div>

        
        <div className='mg-top'>
          <label
            className='form-label'
            htmlFor="email"
          >Email</label>
          <input
            className='form-input'
            type="email"
            name='email'
            id='email'
            placeholder='Enter Email Address'
            required
            onChange={changeHandler}
            value={formData.email}
          />
        </div>
        

        <div className='name-div mg-top'>
          <div className='first-div pass-div'>
            <label
              className='first-label'
              htmlFor="password"
            >Create Password</label>
            <input
              className='first-input'
              type={showPassword ? 'text' : 'password'}
              name='password'
              id='password'
              placeholder='Enter password'
              required
              onChange={changeHandler}
              value={formData.password}
            />
            <span className='pass-span-two' onClick={showPasswordHandler}>
              {showPassword ?
                (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />) :
                (<AiOutlineEye fontSize={24} fill="#AFB2BF" />)
              }
            </span>
          </div>

          <div className='first-div pass-div'>
              <label className='first-label' htmlFor="confirmPassword">Confirm Password</label>
              <input
              className='first-input'
                type={showConfirmPassword ? 'text' : 'password'}
                name='confirmPassword'
                id='confirmPassword'
                placeholder='Enter password'
                required
                onChange={changeHandler}
                value={formData.confirmPassword}
            />
            <span className='pass-span-two' onClick={showConfirmPasswordHandler}>
              {showConfirmPassword ?
                (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />) :
                (<AiOutlineEye fontSize={24} fill="#AFB2BF" />)
              }
            </span>
          </div>
        </div>

        <button className='btn-yellow'>Create Account</button>
      </form>
    </div>
  )
}
