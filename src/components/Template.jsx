import React from 'react';
import frameImage from '../assets/frame.png';
import { LoginForm } from './LoginForm';
import {SignupForm} from './SignupForm';
import { FcGoogle } from "react-icons/fc";

export const Template = ({title, desc1, desc2, image, formtype, setIsLoggedin}) => {
    return (
        <div className='container'>
            <div className='content'>
                <h1 className='title'>{title}</h1>

                <p className='description'>
                    <span className='desc1'>{desc1}</span><br />
                    <span className='desc2'>{desc2}</span>
                </p>

                {
                    formtype === 'signup' ?
                        (<SignupForm setIsLoggedin={setIsLoggedin}/>)
                        :
                        (<LoginForm setIsLoggedin={setIsLoggedin}/>)
                }

                <div className='or-div'>
                    <div className='line'></div>
                    <p className='or'>or</p>
                    <div className='line'></div>
                </div>

                <button className='btn'>
                    <FcGoogle />
                    <p>
                        Sign up With Google
                    </p>
                </button>
            </div>

            <div className='img-div'>
                <img src={frameImage} alt="frame" width={558} height={504}/>
                <img className='temp-image' src={image} alt="image1" width={558} height={504}/>
            </div>
        </div>
    )
}
