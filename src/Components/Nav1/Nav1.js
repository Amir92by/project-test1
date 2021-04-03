import React from 'react'
import {Link} from 'react-router-dom'
import './Nav1.css'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../JS/actions/user'


const NavBar = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector((state) => state.userReducer.isAuth)
    
    return (

            <div className="header">
                <div className="logo"> <img src="./logo.png"  alt='img-logo'/></div>

                <div className="menu-wrapper">
                    <div className="menu">
                        <ul>
                                {/*Home -page*/}
                            <li> <Link to="/">
                                    <a href="/home">Land Page</a>
                                </Link>
                            </li>

                                {/* profile page */}
                            <li><Link to="/signUp" >
                                    <a href="/profile">Profile</a>
                                </Link>
                            </li>

                                {/* signIn or signUp */}
                            <li>{ isAuth?
                            
                                <Link to="/">
                                    <a href="/" onClick={()=>dispatch(logout() )} >LogOut</a>
                                </Link>
                            :
                           (<div>
                                <Link to="/signin">
                                    <a href="/">Sign In</a>
                                </Link>

                                <Link to="/signup">
                                    <a href="/" >Sign Up</a>
                                </Link>
                          </div>)

                         }        
                            </li>

                            {/* trending -page  ::last-one */}
                            {/* <li><Link to="/trending">
                                    <a href="/Trending">Trending</a>
                                 </Link>
                            </li> */}
                        </ul>
                    </div>

                </div>

                <div id="bar-animation">
                    <span />             
                </div>
            
           </div>
  
    )
}

export default NavBar
