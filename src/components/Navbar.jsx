import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/Logo.svg';
import { toast } from 'react-hot-toast';

export const Navbar = ({isLoggedin, setIsLoggedin}) => {
    return (
        <div className='navbar-div'>
            <Link to='/'>
                <img
                    src={logo}
                    alt="Logo"
                    width={160}
                    height={32}
                    loading='lazy'
                />
            </Link>

            <nav className='navbar'>
                <ul className='nav-ul'>
                    <li>
                        <NavLink className='Link' to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className='Link' to='/about'>About</NavLink>
                    </li>
                    <li>
                        <NavLink className='Link' to='/contact'>Contact</NavLink>
                    </li>
                </ul>
            </nav>

            
            <div className='nav-btn-div'>
                {
                    isLoggedin ?
                        (<Link to='/'>
                            <button className='nav-btn' onClick={() => {
                                setIsLoggedin(false);
                                toast.success("Logged Out")
                            }}>Logout</button>
                        </Link>)
                        : 
                        (<Link to='/login'>
                            <button className='nav-btn'>Login</button>
                        </Link>)

                }
                {
                    isLoggedin ? 
                        (<Link to='/dashboard'>
                            <button className='nav-btn'>Dashboard</button>
                        </Link>)    
                        :
                        (<Link to='/signup'>
                            <button className='nav-btn'>Signup</button>
                        </Link>)
                }
            </div>
            
        </div>
    )
}
