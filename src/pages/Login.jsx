import React from 'react'
import loginImg from '../assets/login.png'
import { Template } from '../components/Template'

export const Login = ({setIsLoggedin}) => {
  return (
    <Template
      title='Welcome Back'
      desc1='Build Skill for today, tomorrow, and beyond'
      desc2='Education to Future-proof your career'
      image={loginImg}
      formtype='login'
      setIsLoggedin={setIsLoggedin}
    />
  )
}
